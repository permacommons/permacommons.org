# OpenGraph Metadata Implementation

This document describes the OpenGraph metadata implementation for the Permacommons website.

## Overview

The site includes comprehensive OpenGraph and Twitter Card metadata to ensure proper social media sharing across platforms like Bluesky, LinkedIn, and others.

## Implementation Details

### Base Layout (`src/_includes/layouts/base.njk`)

The base layout includes:

- **Standard OpenGraph tags**: title, description, type, URL, image, site name, locale
- **Image metadata**: dimensions (1200x630 for optimal social sharing)
- **Twitter Card tags**: summary_large_image format for rich previews
- **Article-specific metadata**: published time, author, section, and tags (when `ogType` is "article")
- **SEO enhancements**: canonical URLs, author, robots directives

### Content Types

#### Website Pages (Default)
- `og:type`: "website"
- Uses site-wide defaults for title and description
- OpenGraph banner image for social sharing

#### Blog Posts
- `og:type`: "article" (set in post layout)
- Includes article-specific metadata:
  - `article:published_time`
  - `article:author`
  - `article:section`: "Blog"
  - `article:tag`: for each tag in the post

## Usage Guidelines

### For New Pages

Add frontmatter variables to customize metadata:

```yaml
---
title: "Your Page Title"
description: "Your page description for social sharing"
---
```

### For Blog Posts

The post layout automatically sets `ogType: article`. Include these frontmatter variables:

```yaml
---
layout: layouts/post.njk
title: "Your Post Title"
description: "Your post description"
date: 2025-07-16
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
---
```

### For Special Content Types

To override the default OpenGraph type, add to frontmatter:

```yaml
---
ogType: "video"  # or "music", "book", etc.
---
```

## Image Recommendations

- **Recommended size**: 1200x630 pixels
- **Minimum size**: 600x315 pixels
- **Aspect ratio**: 1.91:1
- **File format**: PNG or JPG
- **File size**: Under 1MB

### Custom Images for Posts

To add custom images for specific posts, you can extend the implementation by:

1. Adding an `image` field to post frontmatter
2. Updating the base layout to use custom images when available:

```html
<meta property="og:image" content="https://permacommons.org{{ image or '/images/opengraph-banner.jpg' }}">
```

## Testing

Test your OpenGraph implementation using:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Validation

The implementation follows:

- [Open Graph Protocol](https://ogp.me/) specifications
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) guidelines
- SEO best practices for social sharing

## Future Enhancements

Consider adding:

- Custom images for different content types
- Video metadata for video content
- Structured data (JSON-LD) for enhanced search results
- Additional social platform optimizations
