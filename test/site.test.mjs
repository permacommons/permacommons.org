import assert from "node:assert/strict";
import { before, test } from "node:test";
import Eleventy from "@11ty/eleventy";

let pages;

before(async () => {
  // Render in memory, including a post that exercises feed escaping and URLs.
  // A western timezone catches dates accidentally formatted as the previous day.
  process.env.TZ = "America/Los_Angeles";
  const site = new Eleventy("src", "_site", {
    config(eleventyConfig) {
      eleventyConfig.addTemplate("posts/feed-regression.md", [
        "---",
        "title: 'Feed & URL regression'",
        "date: 2026-01-01",
        "---",
        "[FAQ](/faq/) and [relative](./details/).",
        "",
        "![Logo](/images/logo.svg)",
      ].join("\n"));
    },
  });
  site.setIsVerbose(false);
  pages = await site.toJSON();
});

function page(url) {
  const result = pages.find(item => item.url === url);
  assert.ok(result, `Missing page: ${url}`);
  return result.content;
}

test("main pages retain semantic navigation without client JavaScript", () => {
  for (const url of ["/", "/blog/", "/faq/"]) {
    const html = page(url);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /class="skip-link" href="#main"/);
    assert.match(html, /<main id="main">/);
    assert.match(html, /aria-current="page"/);
    assert.doesNotMatch(html, /<script\b/i);
  }
});

test("FAQ Markdown still renders each question and answer in a section", () => {
  const html = page("/faq/");
  const questions = html.match(/<h3>/g) || [];
  const sections = html.match(/<section class="faq-item"><h3>/g) || [];
  const answers = html.match(/<div class="faq-answer">/g) || [];
  assert.ok(questions.length > 0);
  assert.equal(sections.length, questions.length);
  assert.equal(answers.length, questions.length);
});

test("publication dates do not shift with the build timezone", () => {
  assert.match(page("/blog/"), /datetime="2025-07-29">July 29, 2025<\/time>/);
  assert.match(page("/posts/2025-07-16-welcome-to-permacommons/"),
    /datetime="2025-07-16">July 16, 2025<\/time>/);
});

test("Atom feed is newest first with escaped HTML and absolute content URLs", () => {
  const feed = page("/feed.xml");
  const entries = [...feed.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(match => match[1]);
  assert.equal(entries.length, 3);
  assert.match(entries[0], /<title>Feed &amp; URL regression<\/title>/);
  assert.match(entries[0], /&lt;p&gt;/);
  assert.match(entries[0], /https:\/\/permacommons.org\/faq\//);
  assert.match(entries[0], /https:\/\/permacommons.org\/posts\/feed-regression\/details\//);
  assert.match(entries[0], /https:\/\/permacommons.org\/images\/logo.svg/);
  assert.doesNotMatch(entries[0], /&amp;lt;p&amp;gt;/);
  const dates = entries.map(entry => entry.match(/<updated>(.*?)<\/updated>/)[1]);
  assert.deepEqual(dates, [...dates].sort().reverse());
});
