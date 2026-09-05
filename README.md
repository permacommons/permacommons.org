# Permacommons Website

The official website for Permacommons – building a permanent home for useful shared resources maintained with AI assistance.

## About Permacommons

Permacommons is building a permanent home for useful shared resources that are maintained with AI assistance, starting with open source software. Our mission is to create a sustainable ecosystem where the amount of human labor scales with the quality of AI systems—as they improve, human effort decreases, but never at the expense of quality, usability, or security.

**Our Vision**: Human Oversight + AI Assistance + Endowment Funding = Permanent Commons of Shared Resources

### Core Values

- **Quality never compromises** as AI systems improve
- **Human effort scales down** while impact scales up  
- **Security monitoring and maintenance** are highly automated, with human oversight
- **Documentation stays fresh** through continuous AI updates
- **New contributors feel welcomed** by reduced barriers to entry

## Architecture

This website is built using modern web technologies with a focus on performance, accessibility, and maintainability:

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/) (v3.1.6)
- **Templating**: Nunjucks (.njk files)
- **Styling**: Custom CSS with locally hosted Inter font family
- **Build System**: Node.js with npm scripts
- **Feeds**: Atom feed generated with the official Eleventy RSS plugin
- **Deployment**: Static files generated to `_site/` directory
- **Privacy**: No external CDN dependencies - all assets served locally

### Project Structure

```
permacommons.org/
├── src/                    # Source files
│   ├── _includes/          # Reusable templates
│   │   └── layouts/        # Page layouts
│   │       ├── base.njk    # Base HTML template
│   │       ├── home.njk    # Homepage template
│   │       └── post.njk    # Blog post template
│   ├── css/                # Stylesheets
│   │   └── style.css       # Main stylesheet
│   ├── fonts/              # Local font files
│   │   ├── inter.css       # Font declarations
│   │   └── inter-*.ttf     # Inter font files (300-700 weights)
│   ├── posts/              # Blog posts (Markdown)
│   ├── blog.njk            # Blog index page
│   ├── index.njk           # Homepage
│   └── images/             # Image assets
│       ├── logo.png        # Site logo
│       └── opengraph-banner.jpg # Social media banner
├── _site/                  # Generated static site
├── .eleventy.js            # Eleventy configuration
├── package.json            # Dependencies and scripts
├── AGENTS.md               # AI agent guidelines
├── LICENSES.md             # Third-party asset licenses
└── README.md               # This file
```

## Development

### Prerequisites

- Node.js 24 LTS (recommended; `.nvmrc` is shared with CI), or Node.js 22.19+
- npm

If you use nvm, run `nvm install` and `nvm use` in the repository first.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/permacommons/permacommons.org.git
   cd permacommons.org
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080` with live reload.

### Build Scripts

- `npm run build` - Build the static site for production
- `npm run serve` - Build and serve the site locally with watch mode
- `npm run dev` - Development server with watch mode
- `npm test` - Render in memory and check navigation markup, FAQ sections, dates, and feed output

### Dependency Maintenance and CI

Run `npm outdated` and `npm audit` to check dependencies. After updating packages,
commit both `package.json` and `package-lock.json`, and run `npm run build` and
`npm test`. Builds use local assets and do not fetch third-party resources.

GitHub Actions builds and tests pull requests. Successful builds on `main` deploy
to GitHub Pages; deployment permissions are limited to the deploy job. Dependabot
checks npm dependencies and GitHub Actions monthly.

### Adding Content

#### Blog Posts

Create new blog posts in `src/posts/` using the format:

```markdown
---
layout: layouts/post.njk
title: "Your Post Title"
description: "Brief description"
date: YYYY-MM-DD
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

#### Pages

Create new pages in `src/` as `.njk` files with front matter.

## Contributing

We welcome contributions that align with our principles. Please read [AGENTS.md](AGENTS.md) for detailed guidelines on accessibility, progressive enhancement, privacy, and design standards.

This website works without JavaScript, prioritizes accessibility, minimizes external dependencies, and maintains high aesthetic standards.

## License

This project is licensed under CC0-1.0 - see the [LICENSE](LICENSE) file for details.

## Connect

- **Website**: [permacommons.org](https://permacommons.org)
- **GitHub**: [github.com/permacommons](https://github.com/permacommons)
- **Discussions**: [github.com/orgs/permacommons/discussions](https://github.com/orgs/permacommons/discussions)

---

*Building the future of open source, one commit at a time.*
