# Position-Tools-
A lightweight, robust JavaScript library for precise element positioning relative to other elements on the page.
#JavaScript #WebDevelopment #Positioning #Frontend #OpenSource

# Features
- 12 Positioning Options - Top, bottom, left, right, corners, and centered edges
- Pixel-Perfect Placement - Absolute positioning with scroll compensation
- Comprehensive Validation - Type checking and error handling
- Flexible Distances - Support for positive/negative spacing and offsets
- Zero Dependencies - Pure vanilla JavaScript

# Demo Video
The video demonstrates:
- Basic positioning (top, right, bottom, left)
- Corner positioning with offsets
- Centered edge positioning
- Real-time distance adjustments
- Responsive behavior

# Installation
```javascript
<script src="position-tools.js"></script>
```

# Quick Start
```javascript
// Position element 20px below base element
PositionTools.positionBottom(baseElement, targetElement, 20);

// Position element 10px above and 15px offset left
PositionTools.positionTopLeft(baseElement, targetElement, 10, 15);

// Center element below with 30px spacing
PositionTools.positionBottomCenter(baseElement, targetElement, 30);
```

# API Reference
## Basic Positioning
- positionTop(base, target, distance)
- positionRight(base, target, distance)
- positionBottom(base, target, distance)
- positionLeft(base, target, distance)

## Corner Positioning
- positionTopLeft(base, target, distance, offset)
- positionTopRight(base, target, distance, offset)
- positionBottomLeft(base, target, distance, offset)
- positionBottomRight(base, target, distance, offset)

## Centered Edge Positioning
- positionTopCenter(base, target, distance)
- positionRightCenter(base, target, distance)
- positionBottomCenter(base, target, distance)
- positionLeftCenter(base, target, distance)

# Parameters
- base - Reference element (HTMLElement)
- target - Element to position (HTMLElement)
- distance - Spacing between elements in pixels (Number)
- offset - Horizontal/vertical offset for corner positions (Number)

# Live Demo
Check out the interactive demo in the [Open demo video]([./demo.mp4](https://youtu.be/HVB-r7Sh9MU)) file to test all positioning options!

# Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge)

# License
MIT License - feel free to use in personal and commercial projects.

**Tags:** `javascript` `frontend` `positioning` `layout` `web-development`
**Hashtags:** #JavaScript #WebDevelopment #Positioning #OpenSource #FrontendTools
