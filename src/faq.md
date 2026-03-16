---
layout: layouts/faq.njk
title: Frequently Asked Questions
description: Common questions about Permacommons and our approach to AI-assisted open source development
# Wrap each h3 FAQ entry into:
# <section class="faq-item"><h3>...</h3><div class="faq-answer">...</div></section>
# This keeps the source as plain Markdown while giving CSS a stable container.
headingSections:
  - headingLevel: 3
    sectionClass: faq-item
    bodyClass: faq-answer
    stopHeadingLevels:
      - 2
      - 3
    stopTokenTypes:
      - hr
---

## About Permacommons

### What is Permacommons?

Permacommons is building a permanent home for useful shared resources that are maintained with AI assistance, starting with open source software. Over time, our goal is to scale down human effort as AI and robotic systems improve, but never at the expense of quality, usability, or security.

### What types of projects are you focusing on?

Our current projects include [lib.reviews](https://lib.reviews/) (a website for humans to write reviews of almost anything), [Chabeau](https://github.com/permacommons/chabeau) (a chatbot application that runs in the terminal and supports the Model Context Protocol), and [AGPWiki](https://github.com/permacommons/agpwiki) (wiki software with an agent-first approach to editing).

### How is this different from other open source initiatives?

Some open source communities support use of AI while others reject it. One reason Permacommons exists is to create a community where maintainers do not have to re-litigate the basic question of whether AI tools may be used at all, and we can focus on more specific questions (e.g., closed vs. open models, agentic tooling, governance).

### What does "minding the future" mean?

It means being thoughtful and intentional about how we integrate AI into open source development. We're not rushing to automate everything, but carefully exploring how AI can help while maintaining human oversight and community values.

## AI Assistance and Quality

### How do you ensure quality and security don't suffer with AI assistance?

We recognize the common critique of AI based on Large Language Models: that their probabilistic, partially stochastic nature makes them inherently unreliable. This is why we maintain human oversight for all critical decisions. We use AI to enhance rather than replace human judgment.

We also believe that empirical evidence shows a clear trajectory of improving AI output quality over time. By using the best available technology (not just generic AI agents, but also specialized tools and workflows), we hope to benefit from the flywheel effect of continuous improvements to AI itself.

### How, concretely, do you handle hallucinations and errors?

Permacommons is intended to be inclusive of many useful projects, which means that we strive to be honest about the risks and maturity of each project. For software, see each project's README for those assessments.

As we develop these projects, we assess how to best support each project's quality assurance process. For software projects, that typically begins with setting up a robust set of automated tests, and ensuring continued test coverage over time.

Automated testing is augmented with manual human testing. In our experience, this is the most labor-intensive part of the development process, as it entails not just looking for bugs, but also verification of the fundamental business logic of the software.

As a software project grows in complexity, we incorporate routine assessments of code quality, technical debt, and overall architecture into the process. This informs subsequent prioritization. For example, we may freeze feature development if an architecture assessment has uncovered major issues that already make the software difficult to maintain.

## Getting Involved

### How can I contribute to Permacommons?

The best way to get started is through our [GitHub organization](https://github.com/permacommons). You can participate in [discussions](https://github.com/orgs/permacommons/discussions), contribute to existing projects, or propose new ones. We welcome developers at all skill levels who are interested in responsible AI use.

### Do I need to know about AI to contribute?

Not at all! We need traditional developers, designers, documentation writers, and community builders. AI is just one tool in our toolkit. Many valuable contributions don't involve AI at all.

### Can I bring my existing project to Permacommons?

We'd love to hear about your project! Share it in our [Show and Tell discussions](https://github.com/orgs/permacommons/discussions/categories/show-and-tell). We're particularly interested in projects that could benefit from AI-assisted maintenance or that align with our values of sustainability and community.

### Do you use only open source models?

No, we currently use a variety of AI models and agents, with the exception of xAI's Grok. However, as open weight models improve, we aim to shift ever greater workloads to them, and share success stories broadly.

Generally, we believe that AI should be developed in the public interest as open source software. While closed AI can temporarily accelerate open source development, it creates structural dependencies on a small handful of companies.

The more AI becomes open source software itself (fully transparent and fully reproducible), the more it can become a trusted part of society's technological infrastructure.

## Sustainability and Funding

### How will Permacommons be funded long-term?

Our long-term goal is to establish an endowment fund that can sustain both compute resources and human effort indefinitely. This would make the commons truly permanent, independent of market fluctuations or corporate interests.

### Is this a commercial venture?

No, Permacommons is focused on building public goods. Our mission is to create lasting value for the entire open source community, not to generate profit.

### What happens if AI development stagnates?

Our approach is designed to be valuable regardless of AI progress. Even with current AI capabilities, we can reduce the maintenance burden and improve documentation. If AI improves faster than expected, we benefit more. If it stagnates, we still provide value to the community.

### What about environmental impact?

We recognize that the AI industry has a large environmental footprint. Whatever positive effects it may bring about in the future (by, for example, accelerating development of fusion power), it's undeniable that its environmental impact to date has been negative.

Given this, we believe we have a responsibility to mitigate our own use of AI compute. As of March 2026, our total spend on AI compute to date has been under $400. We have made the following contributions to offset our carbon impact:

- November 10, 2025: $120 to [Breath of Fresh Air Guatemala](https://www.cooleffect.org/project/breath-of-fresh-air-guatemala), to construct cookstoves that save wood and time, eliminate toxic smoke, and reduce carbon emissions
- March 16, 2026: $109.90 to [A Bright Idea](https://www.cooleffect.org/project/renewable-energy), to bring renewable energy to remote communities in India

We do not use models operated by xAI due to its especially poor [environmental track record](https://insideclimatenews.org/news/17072025/elon-musk-xai-data-center-gas-turbines-memphis/).

### Does Permacommons have any policy positions?

We're not focused on policy first and foremost, but will be especially vocal in three areas:

* We are strongly in favor of developing AI in the public interest. This entails using shared datasets, avoiding duplicative training runs, and making AI fully reproducible and open source.
* We strongly support making approval for data center buildouts conditional on renewable energy use, smart grid buildout and environmental impact assessments.
* We support policies that help people share in the gains from automation and cushion labor displacement, such as Universal Basic Income.

This is consistent with advancing, incrementally, towards an environmentally sustainable, post-scarcity future.

## Community and Governance

### What stage is Permacommons in?

We're in the early experimental phase. We're building our community, establishing best practices, and creating our first tools.

### How can I stay updated on progress?

Follow our [blog](/blog/) for regular updates, watch our [GitHub organization](https://github.com/permacommons) for technical progress, and join our [discussions](https://github.com/orgs/permacommons/discussions) to participate in the conversation.

### How are decisions made in the Permacommons?

Currently, decisions are made through open discussion in our GitHub forums, with a focus on consensus-building and community input. In practice, maintainers of each project make day-to-day decisions, and broader organizational questions are decided by the core Permacommons team.

### How do you ensure the community remains welcoming?

We believe AI can actually lower barriers to entry by helping with documentation, code review, and onboarding. Our goal is to create an environment where new contributors feel welcome and supported, regardless of their experience level.

---

**Have a question not covered here?** Join our [community discussions](https://github.com/orgs/permacommons/discussions) or reach out to us at [info@permacommons.org](mailto:info@permacommons.org). We'd love to hear from you!
