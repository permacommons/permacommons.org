# Agent Guidelines

This document outlines key principles for AI agents and human contributors working on the Permacommons website.

## Core Principles

### 1. Accessibility First
- Ensure proper tab order for keyboard navigation
- Use semantic HTML and ARIA labels where appropriate
- Maintain sufficient color contrast ratios
- Test with screen readers and other assistive technologies
- Provide alternative text for images and media

### 2. Progressive Enhancement
- **The core site must work without JavaScript**
- JavaScript should be treated as a fallback for modern features that may not be supported in older browsers
- Ensure all essential functionality is available with HTML and CSS alone
- Use JavaScript to enhance, not replace, basic functionality

### 3. Aesthetic Excellence
- Beauty matters - strive for visual appeal and unique identity
- Maintain consistent design language throughout the site
- Pay attention to typography, spacing, and visual hierarchy
- Consider the emotional impact of design choices

### 4. Usability and Information Architecture
- Ensure clear navigation paths to key sections
- Consider the overall information architecture when adding new sections
- New major sections may require rethinking existing navigation structures
- Prioritize user experience and intuitive site organization
- Test navigation flows and user journeys

### 5. Privacy and Self-Reliance
- Avoid downloading from CDNs or other third-party servers when possible
- Make local copies of third-party files instead of linking externally
- **Always document third-party usage in LICENSES.md**
- Include source URL and license information for any third-party assets
- Minimize external dependencies to protect user privacy

## Implementation Notes

When making changes to the site, always consider how these principles apply to your specific contribution. Major architectural changes should be discussed to ensure they align with these guidelines.