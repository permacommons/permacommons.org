# Third-Party Licenses

This document lists all third-party assets used in the Permacommons website and their respective licenses.

## Fonts

### Inter Font Family
- **Source**: Google Fonts (https://fonts.google.com/specimen/Inter)
- **Original URL**: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap
- **License**: SIL Open Font License 1.1
- **License URL**: https://scripts.sil.org/OFL
- **Local Files**:
  - `src/fonts/inter-300.ttf` (Light)
  - `src/fonts/inter-400.ttf` (Regular)
  - `src/fonts/inter-500.ttf` (Medium)
  - `src/fonts/inter-600.ttf` (SemiBold)
  - `src/fonts/inter-700.ttf` (Bold)
- **Usage**: Primary font family for the website
- **Downloaded**: 2025-07-17 for privacy compliance (avoiding external CDN dependencies)

The Inter font is licensed under the SIL Open Font License, Version 1.1. The full license text is available at: https://scripts.sil.org/OFL

### Source Serif 4
- **Source**: Adobe Fonts / Fontsource (https://github.com/adobe-fonts/source-serif, packaged via https://fontsource.org/fonts/source-serif-4)
- **License**: SIL Open Font License 1.1
- **License URL**: https://scripts.sil.org/OFL (full text in `src/fonts/source-serif-4-LICENSE.txt`)
- **Local Files**:
  - `src/fonts/source-serif-4-latin-400-normal.woff2` (Regular)
  - `src/fonts/source-serif-4-latin-400-italic.woff2` (Italic)
  - `src/fonts/source-serif-4-latin-600-normal.woff2` (SemiBold)
  - `src/fonts/source-serif-4-latin-700-normal.woff2` (Bold)
- **Usage**: Display/heading font family and editorial accents
- **Downloaded**: 2026-07-07 for privacy compliance (avoiding external CDN dependencies)

Copyright 2014-2024 Adobe (http://www.adobe.com/), with Reserved Font Name 'Source'.

## Icons

### Font Awesome Free
- **Source**: Fonticons, Inc. (https://fontawesome.com)
- **Version**: 6.7.2
- **License**: Multiple licenses (see details below)
- **License URL**: https://fontawesome.com/license/free
- **Local Files**: 
  - `src/icons/fontawesome-free-6.7.2-web/css/` (CSS files)
  - `src/icons/fontawesome-free-6.7.2-web/webfonts/` (Web font files)
- **Usage**: Social media icons (GitHub, Bluesky, Email, RSS)
- **Downloaded**: 2025-07-18

Font Awesome Free uses multiple licenses:
- **Icons**: CC BY 4.0 License (https://creativecommons.org/licenses/by/4.0/)
- **Fonts**: SIL OFL 1.1 License (same as Inter font above)
- **Code**: MIT License (https://opensource.org/licenses/MIT)

Copyright (c) 2024 Fonticons, Inc. All brand icons are trademarks of their respective owners.

## Project Screenshots

### Chabeau Code Preview
- **Source**: Existing Permacommons recording, [syntax.mp4](https://permacommons.org/videos/chabeau-0.7.0/syntax.mp4)
- **Local Source**: `src/videos/chabeau-0.7.0/syntax.mp4`, frame at 7 seconds
- **Local File**: `src/images/chabeau-code-preview.png`
- **License**: CC0-1.0, as provided by this repository's `LICENSE`
- **Usage**: Unmodified frame showing Chabeau in the home page's project section
