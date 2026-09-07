# Shaheer Suhaib — Portfolio Design System

## Overview

This is the design system for **Shaheer Suhaib's personal portfolio website** — a single-page React application showcasing his work as a software engineer and AI/ML developer based in Islamabad, Pakistan.

The portfolio is a dark, editorial, full-screen scrolling site with a strong typographic personality. It blends a variable serif display font (Fraunces) with a geometric sans body font (Manrope) and a monospace accent font (JetBrains Mono) against a near-black background with purple-to-orange gradient accents.

---

## Sources

- **Codebase:** [https://github.com/shaheer-suhaib/portfolio](https://github.com/shaheer-suhaib/portfolio) — React 19 + Vite, Framer Motion, Lucide React, React Router DOM
- **Screenshots:** `uploads/Screenshot 2026-05-04 140432.png`, `uploads/Screenshot 2026-05-04 140531.png`, `uploads/Screenshot 2026-05-04 140605.png`
- No Figma link was provided.

---

## Product Context

**Single product:** A personal portfolio website with the following sections/routes:
- `/` — Home page (Hero → About → My Work → Skills & Experience → Contact → Footer)
- `/projects` — Full projects grid listing
- `/projects/:id` — Individual project detail view
- `/engineered-projects` — Engineering/hardware projects listing

**Key persona:** Shaheer Suhaib — software engineer, AI/ML practitioner, NUST student, based in Islamabad. Work spans full-stack web, LLM/agent frameworks (LangChain, LangGraph, CrewAI), and ML (TensorFlow, CNNs, ANNs).

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **First-person, direct.** Uses "I am", "I love", "I am always open to…"
- **Lowercase casual headings mix with title-case labels.** Hero h1 is all lowercase italic serif. Section eyebrows (SKILLS, EXPERIENCE) are ALL CAPS mono.
- **Warm, enthusiastic, not corporate.** "passionate and curious learner", "bringing ideas to life through hands-on projects."
- **No emoji.** Zero emoji in copy. Icons are image-based (png/svg).
- **No exclamation points in body copy.** Subdued confidence.
- **Short descriptive lines.** Sub-headlines are 1–2 short punchy lines, never long paragraphs.
- **"Pakistan" used lowercase** in hero ("based in pakistan") — deliberate stylistic choice.
- **Contact intro:** "I am always open to discussing product design work or partnerships." — open and professional.

### Casing System
| Element | Case |
|---|---|
| Hero h1 | lowercase italic |
| Section titles (About, Contact, My Work) | Title Case (serif display) |
| Section eyebrows (SKILLS, EXPERIENCE) | ALL CAPS, underlined |
| Category labels (Languages:, Frameworks:) | Title Case + colon, mono font |
| Nav links | Title Case |
| CTA buttons | Title Case ("Connect With Me") |
| Footer copyright | UPPERCASE mono |

### Specific Copy Examples
- Hero: *"I'm software engineer based in pakistan"*
- About bio: *"I am a passionate and curious learner currently navigating the exciting world of engineering and software development."*
- Contact headline: *"Get in touch"*
- Contact sub: *"Lets Talk"*
- Footer tagline: *"Software Engineer based in Pakistan"*
- CTA: *"Connect With Me"*, *"My Resume"*, *"show more →"*

---

## VISUAL FOUNDATIONS

### Colors
| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0a` | Page background (near-black) |
| Accent gradient | `linear-gradient(267deg, #da7c25 0.36%, #b923e1 100%)` | CTA fills, gradient text, section titles, scrollbar |
| Purple primary | `#b923e1` | Hover color, borders, nav Resume button border |
| Orange secondary | `#da7c25` | Gradient start, experience title underline tint |
| Text primary | `white` / `rgba(255,255,255,1)` | Headings, nav, buttons |
| Text body | `rgba(255,255,255,0.88)` | Body paragraphs, descriptions |
| Text muted | `rgba(255,255,255,0.72)` | Footer body text |
| Text subtle | `rgba(255,255,255,0.45)` | Footer copyright |
| Skill pill bg | `rgba(185,35,225,0.1)` | Skill pill default |
| Skill pill border | `rgba(185,35,225,0.3)` | Skill pill border |
| Skill item bg | `rgba(255,255,255,0.08)` | Skills section items (Experience page) |
| Contact detail bg | `rgba(185,35,225,0.05)` | Contact info rows |
| Experience card bg | `rgb(4,7,29)` | Dark navy — experience card interior |
| Divider | `rgba(255,255,255,0.1)` | Horizontal rules, footer top border |
| Section divider glow | `linear-gradient(90deg, transparent, rgba(185,35,225,0.5), transparent)` | 1px decorative divider line between sections |

**Background treatment:** Near-black `#0a0a0a` with very subtle radial gradients at 20%/80% injecting purple and orange at 5% opacity — barely visible atmospheric glow. No full-bleed images or textures.

### Typography
| Role | Font | Weight | Size Token | Features |
|---|---|---|---|---|
| Display / headings | Fraunces (variable serif) | 500–600 | `--text-3xl` to `--text-7xl` | italic, SOFT axis 50–80, opsz 96–144 |
| Body | Manrope (geometric sans) | 400–600 | `--text-sm` to `--text-lg` | ss01, ss02, cv11 |
| Mono / labels | JetBrains Mono | 400–700 | `--text-xs` to `--text-base` | zero, ss01, tracking-widest |

**Gradient text:** Section titles use `background-clip: text` with the accent gradient applied directly to the `<h1>` or `.about-title` — a signature visual motif.

**Fluid type scale:** All sizes use `clamp()` — fully responsive from mobile to 4K with no breakpoint overrides for type.

### Spacing & Layout
- **Section padding:** `clamp(50px, 8vw, 120px)` vertical, `clamp(24px, 5vw, 80px)` horizontal
- **Section gap:** `clamp(2rem, 4vw, 5rem)` between top-level sections
- **Container max-width:** `clamp(1200px, 92vw, 2600px)` — auto-centered with fluid margins
- **Card gap:** `40px` between work cards
- **Skills gap:** `20px` between skill pills

### Borders & Radius
- **Pill buttons:** `border-radius: 50px`
- **Skill pills (About):** `border-radius: 30px`
- **Skill items (Experience):** `border-radius: 0.6rem` (~9px) — subtle
- **Work cards:** `border-radius: 15px`
- **Contact details:** `border-radius: 12px`
- **About image:** `border-radius: 20px`
- **Hero image:** `border-radius: 50%` (circle)
- **Company logos:** `border-radius: 8px`
- **Experience cards:** `border-radius: 1.75rem` (~28px) with animated moving border

### Shadows
- **Hero image:** `box-shadow: 0 20px 60px rgba(185,35,225,0.3)` — purple glow
- **Work cards hover:** `box-shadow: 0 12px 30px rgba(185,35,225,0.4)`
- **CTA button:** `box-shadow: 0 4px 15px rgba(185,35,225,0.3)` default, `0 8px 25px rgba(185,35,225,0.5)` hover
- **Profile glow:** pseudo-element blur `20px` orange-purple radial behind circle

### Animations & Motion
- **Library:** Framer Motion exclusively
- **Entry animations:** `opacity: 0 → 1` + `y: 30 → 0`, `duration: 0.6s`, `ease: "easeOut"` — standard scroll trigger
- **Stagger children:** `0.1s–0.2s` delay between child elements
- **Hover lift:** `translateY(-3px)` on buttons, `translateY(-5px)` on experience stat
- **Hover scale:** `scale(1.05)` on profile image, work cards; `scale(1.1)` on skill pills
- **Tap press:** `scale(0.95)` on all interactive elements
- **Pulse keyframe:** Profile glow `opacity 0.3→0.5`, `scale 1→1.05`, 3s infinite ease-in-out
- **Typing cursor blink:** `opacity 1→0`, 0.8s infinite reverse
- **"show more" arrow:** `x: [0,10,0]` 1.5s infinite loop
- **Moving border:** Experience cards have an animated gradient border `MovingBorders` component
- **Page transitions:** `AnimatePresence mode="wait"` for route changes
- **Loading screen:** Present on first load before content renders
- **Nav slide-in:** `y: -100 → 0`, opacity 0→1, 0.6s on mount
- **Scroll trigger:** `useInView` with `margin: "-100px"` for all sections

### Hover States
- **Links/nav:** Color change to `#b923e1` (purple)
- **Buttons (CTA):** Lift `translateY(-3px)` + box-shadow intensify
- **Resume button:** Background fills white, text goes black
- **Skill pills:** Background opacity increases + border brighter + lift
- **Work cards:** `scale(1.05)` + `y: -10` + image `scale(1.1)` + overlay slides up from bottom
- **Footer links:** Color turns purple + underline grows from center (pseudo-element)
- **Contact details:** Background tints purple + slide right `translateX(5px)` + shadow

### Work Card Overlay
Overlay is `position: absolute, translateY(100%)` by default, slides up on hover. Background is a red-tinted gradient (`rgba(220,38,38,…)`) — an intentional dramatic contrast to the purple scheme.

### Custom Cursor
A custom cursor component replaces the default cursor on `min-width: 769px` (`cursor: none` on body).

### Scroll & Chrome
- Custom scrollbar with accent gradient thumb, `border-radius: 5px`
- `::selection` background: `rgba(185,35,225,0.35)`
- Scroll progress indicator component (thin bar at top)
- Particle background component (ambient particles behind content)
- Sticky nav with `backdrop-filter: blur(20px)` — glass morphism

### Imagery
- **Profile photo:** Circle-cropped with purple glow border + box shadow
- **About/side image:** Rectangular with `border-radius: 20px` and purple border tint
- **NUST logo:** Circle-cropped with semi-transparent background
- **No illustrations, no hand-drawn elements, no gradients on backgrounds**
- **No pattern or texture backgrounds** — pure dark + atmospheric radial gradients
- **Color vibe:** Natural/warm-toned photography against dark backgrounds

---

## ICONOGRAPHY

### Approach
- **No icon font, no icon sprite.** All icons are individual image files (PNG or SVG).
- **No emoji** used for UI icons in production components.
- **Tech stack icons:** Colorful brand-accurate PNG/SVG files sourced from icons8 (PNG) and official brand SVGs
- **UI icons (contact section, scroll arrow):** Lucide React (`lucide-react@0.556.0`) — stroke-based, default stroke weight 2, size 24px
- **Social/utility icons:** Simple SVGs inline (LinkedIn, Send, Shield, Star)

### Icon Usage
| Context | Style | Source |
|---|---|---|
| Skill pills | Brand PNG/SVG, 24–40px | `assets/icons/` |
| Experience section skill items | Brand PNG/SVG, 40–56px | `assets/icons/` |
| Contact details | Lucide React stroke icons, 24px | CDN |
| Nav underline | Custom SVG squiggle | `src/assets/nav_underline.svg` |

### Available Brand Icons
All icon files are in `assets/icons/`:
- `python.svg`, `python-96.png` — Python
- `java.svg`, `java-96.png` — Java
- `c-96.png` — C/C++
- `Docker.svg` — Docker
- `Git.svg`, `Github.svg` — Version control
- `Javascript.svg` — JavaScript
- `React.png` — React
- `Langchain.svg`, `Langgraph.svg` — LangChain / LangGraph
- `crewai.png` — CrewAI
- `tensorflow-96.png` — TensorFlow
- `Typescript.svg` — TypeScript
- `NodeJs.svg` — Node.js
- `Next.svg` — Next.js
- `MongoDB.svg` — MongoDB
- `HTML.png`, `CSS.png` — HTML/CSS
- `Redux.svg` — Redux
- `arduino-96.png` — Arduino
- `django-96.png` — Django
- `numpy-96.png` — NumPy

---

## File Index

```
README.md                    ← This file
SKILL.md                     ← Agent skill descriptor
colors_and_type.css          ← CSS custom properties: colors, typography, spacing

assets/
  face.png                   ← Hero profile photo (circular)
  side_img.png               ← About section photo
  NUST.png                   ← University logo
  icons/                     ← All tech stack + brand icons (PNG + SVG)

preview/
  colors-base.html           ← Base color palette swatches
  colors-semantic.html       ← Semantic color usage
  type-display.html          ← Fraunces display type specimens
  type-body.html             ← Manrope body + JetBrains Mono specimens
  type-scale.html            ← Full fluid type scale
  spacing-tokens.html        ← Spacing, radius, shadow tokens
  components-buttons.html    ← Button variants
  components-nav.html        ← Navigation bar
  components-skills.html     ← Skill pills component
  components-cards.html      ← Work cards + experience cards
  components-forms.html      ← Form inputs + contact details
  brand-icons.html           ← Brand icon grid
  brand-photos.html          ← Photography assets

ui_kits/
  portfolio/
    README.md                ← UI kit documentation
    index.html               ← Interactive portfolio prototype
    Nav.jsx                  ← Navigation bar component
    Hero.jsx                 ← Hero section component
    About.jsx                ← About section component
    Experience.jsx           ← Skills & Experience section
    Contact.jsx              ← Contact section component
    Footer.jsx               ← Footer component
```
