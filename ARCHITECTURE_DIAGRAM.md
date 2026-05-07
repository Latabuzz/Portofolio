# 🏗️ Website Architecture Diagram

## Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        OWEN'S PORTFOLIO - ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│                              🌐 CLIENT LAYER 🌐                             │
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                         Web Browser                                  │  │
│  │                    (Chrome, Firefox, Safari, Edge)                  │  │
│  └──────────────┬─────────────────────────────────────────────────────┘  │
│                 │                                                         │
│                 ▼                                                         │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                      HTTP/HTTPS Request                             │  │
│  │                  (Static Files + CDN Resources)                     │  │
│  └──────────────┬─────────────────────────────────────────────────────┘  │
│                 │                                                         │
└─────────────────┼─────────────────────────────────────────────────────────┘
                  │
                  │
┌─────────────────┼─────────────────────────────────────────────────────────┐
│                 ▼                                                           │
│         📁 HOSTING LAYER 📁                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │  Static File Server (Netlify / Vercel / GitHub Pages / etc)        │  │
│  │  ├─ index.html (1038 lines)                                        │  │
│  │  ├─ css/* (styles.css)                                            │  │
│  │  ├─ js/* (All JavaScript files)                                   │  │
│  │  └─ image/* (All images)                                          │  │
│  └──────────────┬─────────────────────────────────────────────────────┘  │
│                 │                                                         │
└─────────────────┼─────────────────────────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
   
┌──────────────────────────┐    ┌──────────────────────────┐
│   📄 MARKUP LAYER        │    │   🎨 STYLING LAYER       │
│  (HTML5)                 │    │  (CSS3)                  │
├──────────────────────────┤    ├──────────────────────────┤
│ ├─ <head>                │    │ ├─ Tailwind CSS (CDN)   │
│ │  └─ Meta tags          │    │ ├─ styles.css          │
│ │  └─ Stylesheets        │    │ ├─ CSS Variables       │
│ │  └─ Scripts (CDN)      │    │ ├─ Animations          │
│ │                        │    │ ├─ Dark Mode Styles    │
│ ├─ <body>                │    │ └─ Media Queries       │
│ │  ├─ nav (Navigation)   │    │                        │
│ │  ├─ section#home       │    │ Color Palette:         │
│ │  ├─ section#about      │    │ ├─ Primary: #3b82f6   │
│ │  ├─ section#skills     │    │ ├─ Secondary: #10b981 │
│ │  ├─ section#experience │    │ ├─ Dark: #1e293b      │
│ │  ├─ section#projects   │    │ └─ Light: #f8fafc     │
│ │  ├─ section#contact    │    │                        │
│ │  └─ footer             │    │ Font: Poppins          │
│ └─                       │    │ (300-700 weights)      │
└──────────────────────────┘    └──────────────────────────┘
        │                               │
        └───────────────┬───────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │   🎯 RENDERING ENGINE         │
        │  (Browser DOM Manipulation)   │
        │                               │
        │ • Parse HTML                 │
        │ • Apply CSS rules            │
        │ • Create Render Tree         │
        │ • Layout (Reflow)           │
        │ • Paint                      │
        └───────┬───────────────────────┘
                │
                ▼
        ┌───────────────────────────────┐
        │   ⚡ JAVASCRIPT LAYER         │
        │  (Runtime Execution)         │
        └───────────────────────────────┘
                │
        ┌───────┼───────┬───────┬──────────┐
        │       │       │       │          │
        ▼       ▼       ▼       ▼          ▼
```

---

## Detailed File Structure with Data Flow

```
┌────────────────────────────────────────────────────────────────────────────┐
│                         JAVASCRIPT EXECUTION FLOW                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1️⃣  PAGE LOAD                                                            │
│  ────────────────                                                          │
│   ├─ Browser downloads index.html                                        │
│   ├─ Parse HTML structure                                               │
│   ├─ Load external resources (CSS, fonts, scripts)                      │
│   └─ Create DOM tree                                                    │
│                                                                             │
│  2️⃣  SCRIPT EXECUTION                                                    │
│  ───────────────────                                                      │
│   ├─ Load cv-data.js                                                    │
│   │  └─ educationData[]                                                │
│   │  └─ experienceData[]                                               │
│   │  └─ certificationsData[]                                           │
│   │                                                                     │
│   ├─ Load projects-data.js                                             │
│   │  └─ projectsData[]  ──┐                                           │
│   │                        │                                           │
│   ├─ Load projects-manager.js                                          │
│   │  ├─ filterProjects()  ◄─┘                                         │
│   │  ├─ renderProjects()                                              │
│   │  ├─ showProjectModal()                                            │
│   │  └─ Dynamic DOM updates                                           │
│   │                                                                     │
│   └─ Load script.js (Core Logic)                                       │
│      ├─ DOMContentLoaded event                                        │
│      ├─ Setup Intersection Observer                                   │
│      ├─ Smooth scroll handlers                                        │
│      ├─ Dark mode toggle                                              │
│      ├─ Mobile menu                                                   │
│      ├─ Back-to-top button                                            │
│      ├─ GSAP animations initialization                                │
│      └─ Event listeners                                               │
│                                                                             │
│  3️⃣  ANIMATION INITIALIZATION                                            │
│  ──────────────────────────────                                          │
│   ├─ GSAP Timeline                                                      │
│   ├─ ScrollTrigger setup                                               │
│   ├─ SplitText animations                                              │
│   ├─ WebGL ribbons effect                                              │
│   └─ All animations ready                                              │
│                                                                             │
│  4️⃣  USER INTERACTION                                                    │
│  ──────────────────────                                                  │
│   ├─ Click events                                                       │
│   ├─ Scroll events                                                      │
│   ├─ Keyboard events                                                    │
│   ├─ Touch events (mobile)                                             │
│   ├─ Window resize events                                              │
│   └─ Animations trigger                                                │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Structure Diagram

```
┌────────────────────────────────────────────────────────────────────────────┐
│                          DATA ARCHITECTURE                                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  📚 CV-DATA.JS                                                            │
│  ══════════════                                                           │
│                                                                             │
│  educationData = [                                                        │
│    {                                                                      │
│      id: 1                                                               │
│      institution: "Universitas Sam Ratulangi"                           │
│      program: "Information Systems"                                      │
│      period: "2021 - 2025"                                              │
│      gpa: "3.88 / 4.00"                                                 │
│      achievements: [...]                                                │
│    }                                                                      │
│  ]                                                                        │
│                                                                             │
│  experienceData = [                                                       │
│    ORDER 1 (Orders Startup)                           ┐                 │
│    ORDER 2 (BEM FMIPA UNSRAT)                        ├─ 3 entries      │
│    ORDER 3 (HIMSIFOR UNSRAT)                         ┘                 │
│  ]                                                                        │
│                                                                             │
│  certificationsData = [                                                   │
│    CERT 1 (RevoU Tech Academy)                       ┐                 │
│    CERT 2 (...)                                      ├─ 3+ entries     │
│    CERT 3 (...)                                      ┘                 │
│  ]                                                                        │
│                                                                             │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  📊 PROJECTS-DATA.JS                                                      │
│  ══════════════════════                                                   │
│                                                                             │
│  projectsData = [                                                         │
│    PROJECT 1: TouLeos                          ┐                        │
│    ├─ name, description                        │                        │
│    ├─ technologies: [React, Laravel, Flask]    │                        │
│    ├─ category: "Mobile/Web"                   │                        │
│    ├─ status: "Completed"                      │                        │
│    ├─ image, links (GitHub, Live)              ├─ 4 PROJECTS           │
│    ├─ highlights, impact metrics               │                        │
│    └─ role, duration                           │                        │
│                                                 │                        │
│    PROJECT 2: Kapoya Portal                     │                        │
│    ├─ name, description                        │                        │
│    ├─ technologies: [Node.js, React, MongoDB]  │                        │
│    ├─ category: "Web Application"              │                        │
│    ├─ status: "Active"                         │                        │
│    └─ ... (same structure)                     │                        │
│                                                 │                        │
│    PROJECT 3: EcoMeter                          │                        │
│    ├─ Blockchain-based IoT system              │                        │
│    └─ category: "Advanced/Web3"                │                        │
│                                                 │                        │
│    PROJECT 4: KarWanua                          │                        │
│    └─ GHG Emission Calculator                  │                        │
│                                                 ┘                        │
│  ]                                                                        │
│                                                                             │
│  ────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  🎯 RENDERED OUTPUT (DOM)                                                │
│  ════════════════════════                                                │
│                                                                             │
│  HTML Elements Generated:                                                │
│  ├─ Skills Grid (12+ items)                                            │
│  ├─ Experience Timeline (3 entries)                                    │
│  ├─ Education Cards (1 entry)                                         │
│  ├─ Certification List (3+ entries)                                   │
│  ├─ Projects Gallery                                                  │
│  │  ├─ Filter buttons (4 categories)                                 │
│  │  ├─ Project cards (4 items)                                       │
│  │  └─ Modals (with details)                                         │
│  └─ Contact section                                                   │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## CDN & External Dependencies Architecture

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      EXTERNAL DEPENDENCIES                                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FRAMEWORKS & LIBRARIES (CDN)                                             │
│  ════════════════════════════════                                         │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ HTML Meta & Description                                             │  │
│  │ └─ Uses semantic structure for proper rendering                   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌─ Tailwind CSS (CDN)                                                  │  │
│  │  └─ Utility-first CSS framework                                   │  │
│  │     ├─ Responsive classes (md:, lg:, etc)                        │  │
│  │     ├─ Spacing utilities (px, py, m, p)                         │  │
│  │     ├─ Color utilities                                           │  │
│  │     ├─ Flexbox utilities                                        │  │
│  │     ├─ Grid utilities                                           │  │
│  │     └─ Animation utilities                                      │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─ Google Fonts (CDN)                                                  │  │
│  │  └─ Poppins font family                                          │  │
│  │     ├─ Weights: 300, 400, 500, 600, 700                        │  │
│  │     ├─ Subsets: latin                                           │  │
│  │     └─ Display: swap (fast loading)                             │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─ Font Awesome (CDN) v6.4.0                                           │  │
│  │  └─ Icon library (1600+ icons)                                  │  │
│  │     ├─ Social media icons (LinkedIn, GitHub, Instagram)         │  │
│  │     ├─ UI icons (bars, times, moon, sun)                       │  │
│  │     ├─ Feature icons (code, star, etc)                         │  │
│  │     └─ All SVG-based                                           │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─ React 18 (CDN - Optional)                                           │  │
│  │  ├─ React core library                                          │  │
│  │  ├─ ReactDOM                                                    │  │
│  │  └─ Babel Standalone (for JSX)                                 │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─ GSAP Animation Library (CDN)                                        │  │
│  │  ├─ GSAP Core v3.12.2                                          │  │
│  │  │  └─ Animation engine                                        │  │
│  │  ├─ ScrollTrigger Plugin                                       │  │
│  │  │  └─ Scroll-based animations                                │  │
│  │  └─ SplitText Plugin                                           │  │
│  │     └─ Character animation plugin                             │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─ OGL/WebGL (Optional)                                                │  │
│  │  └─ For WebGL ribbons background effect                        │  │
│  └────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  NPM PACKAGES (Optional, for building)                                   │
│  ╒════════════════════════════════════════════════════════════════════╕  │
│  │ package.json:                                                      │  │
│  │ {                                                                  │  │
│  │   "dependencies": {                                              │  │
│  │     "gsap": "^3.13.0",    // Animation library                  │  │
│  │     "ogl": "^1.0.11"      // WebGL graphics                    │  │
│  │   }                                                              │  │
│  │ }                                                                  │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Interaction Flow Diagram

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      USER INTERACTION FLOW                                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  👤 USER LANDS ON WEBSITE                                                │
│  └──► index.html loads                                                   │
│       ├─ HTML parsed                                                     │
│       ├─ CSS applied                                                     │
│       ├─ JavaScript executed                                             │
│       ├─ Dark mode preference loaded from localStorage                  │
│       ├─ GSAP animations initialized                                    │
│       └─ Ready for interaction                                         │
│                                                                             │
│  🖱️  USER INTERACTIONS                                                    │
│  ════════════════════════                                                │
│                                                                             │
│  ┌─ NAVIGATION CLICK                                                      │
│  │  ├─ User clicks anchor link (e.g., "#projects")                      │
│  │  └─ Smooth scroll to section id                                      │
│  │                                                                       │
│  ├─ DARK MODE TOGGLE                                                    │
│  │  ├─ User clicks dark mode button                                     │
│  │  ├─ Toggle theme class on <html>                                    │
│  │  ├─ Save preference to localStorage                                 │
│  │  └─ CSS :dark rules applied                                        │
│  │                                                                       │
│  ├─ MOBILE MENU                                                          │
│  │  ├─ User clicks hamburger button                                     │
│  │  ├─ Show mobile menu                                                │
│  │  ├─ Change icon to X                                               │
│  │  ├─ Click link to navigate                                          │
│  │  └─ Auto-close menu                                                │
│  │                                                                       │
│  ├─ PROJECT FILTERING                                                   │
│  │  ├─ User clicks filter button (e.g., "Web Apps")                    │
│  │  ├─ JavaScript filters projectsData array                           │
│  │  ├─ Re-renders project cards                                        │
│  │  └─ Shows animated results                                          │
│  │                                                                       │
│  ├─ PROJECT MODAL                                                        │
│  │  ├─ User clicks "View Details"                                      │
│  │  ├─ Show modal with full project info                              │
│  │  ├─ Close on X button or ESC key                                  │
│  │  └─ Smooth fade animation                                           │
│  │                                                                       │
│  ├─ SCROLL ANIMATIONS                                                   │
│  │  ├─ User scrolls page                                               │
│  │  ├─ ScrollTrigger fires on elements                                │
│  │  ├─ Fade-in animations trigger                                      │
│  │  └─ GSAP animations run                                           │
│  │                                                                       │
│  ├─ HOVER EFFECTS                                                       │
│  │  ├─ Card hover (lift effect)                                        │
│  │  ├─ Button hover (scale & shadow)                                  │
│  │  ├─ Link hover (underline animation)                               │
│  │  └─ Icon hover (color change)                                      │
│  │                                                                       │
│  ├─ FORM SUBMISSION (Contact)                                          │
│  │  ├─ User fills form                                                 │
│  │  ├─ Clicks "Send Message"                                           │
│  │  ├─ Opens WhatsApp integration                                      │
│  │  └─ Pre-filled message                                             │
│  │                                                                       │
│  ├─ BACK-TO-TOP BUTTON                                                 │
│  │  ├─ User scrolls down > 300px                                       │
│  │  ├─ Button appears                                                  │
│  │  ├─ User clicks button                                              │
│  │  ├─ Smooth scroll to top                                            │
│  │  └─ Button disappears                                               │
│  │                                                                       │
│  └─ WINDOW RESIZE                                                        │
│     ├─ User resizes window                                             │
│     ├─ Media queries activate                                          │
│     ├─ Layout adjusts                                                  │
│     └─ Close mobile menu if needed                                    │
│                                                                             │
│  💾 DATA PERSISTENCE                                                     │
│  ══════════════════════                                                  │
│  └─ localStorage                                                         │
│     └─ darkMode preference                                             │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      COMPONENT HIERARCHY                                    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ROOT: index.html                                                         │
│  ├──────────────────────────────────────────                              │
│  │                                                                         │
│  ├─ <head>                                                                │
│  │  ├─ Meta tags                                                         │
│  │  ├─ CDN stylesheets                                                   │
│  │  └─ Script tags (CDN libraries)                                       │
│  │                                                                         │
│  └─ <body>                                                                │
│     ├─ #ribbonsContainer (WebGL)                                         │
│     │(Background animated effect)                                        │
│     │                                                                     │
│     ├─ <nav> (Navigation Bar)                                           │
│     │  ├─ Logo/Name                                                      │
│     │  ├─ Navigation links                                              │
│     │  │  ├─ Home                                                        │
│     │  │  ├─ About                                                       │
│     │  │  ├─ Skills                                                      │
│     │  │  ├─ Experience                                                  │
│     │  │  ├─ Projects                                                    │
│     │  │  └─ Contact                                                     │
│     │  ├─ Dark mode toggle                                              │
│     │  └─ Mobile menu button                                            │
│     │      └─ Mobile menu (hidden by default)                           │
│     │         └─ Mobile nav links                                       │
│     │                                                                     │
│     ├─ <section id="home"> (Hero)                                        │
│     │  ├─ Introduction text                                             │
│     │  ├─ Call-to-action buttons                                        │
│     │  ├─ Social media links                                            │
│     │  ├─ Profile image (circle)                                        │
│     │  ├─ Stats boxes                                                   │
│     │  └─ Floating animation                                            │
│     │                                                                     │
│     ├─ <section id="about">                                              │
│     │  ├─ Section title                                                 │
│     │  ├─ About text                                                    │
│     │  ├─ Personal info                                                 │
│     │  └─ Services offered                                              │
│     │                                                                     │
│     ├─ <section id="skills">                                             │
│     │  ├─ Section title                                                 │
│     │  └─ Skills grid                                                   │
│     │     ├─ Skill card 1                                              │
│     │     ├─ Skill card 2                                              │
│     │     ├─ Skill card 3                                              │
│     │     └─ ... (12+ total)                                           │
│     │                                                                     │
│     ├─ <section id="experience">                                         │
│     │  ├─ Section title                                                 │
│     │  ├─ Education subsection                                         │
│     │  │  └─ Education cards (from cv-data.js)                        │
│     │  └─ Experience timeline                                           │
│     │     ├─ Experience card 1 (Orders)                                │
│     │     ├─ Experience card 2 (BEM FMIPA)                           │
│     │     └─ Experience card 3 (HIMSIFOR)                            │
│     │                                                                     │
│     ├─ <section id="projects">                                           │
│     │  ├─ Section title                                                 │
│     │  ├─ Filter buttons                                               │
│     │  │  ├─ All                                                        │
│     │  │  ├─ Web Apps                                                  │
│     │  │  ├─ Mobile/Web                                                │
│     │  │  └─ Advanced/Web3                                             │
│     │  ├─ Projects grid (dynamic: 4 projects)                          │
│     │  │  ├─ Project card 1: TouLeos                                  │
│     │  │  │  └─ Modal with details (shown on click)                  │
│     │  │  ├─ Project card 2: Kapoya Portal                           │
│     │  │  │  └─ Modal with details                                   │
│     │  │  ├─ Project card 3: EcoMeter                                │
│     │  │  │  └─ Modal with details                                   │
│     │  │  └─ Project card 4: KarWanua                                │
│     │  │     └─ Modal with details                                   │
│     │  └─ Modals (hidden by default)                                  │
│     │                                                                     │
│     ├─ <section id="contact">                                            │
│     │  ├─ Section title                                                 │
│     │  ├─ Contact form                                                 │
│     │  │  ├─ Input fields                                             │
│     │  │  ├─ Submit button                                            │
│     │  │  └─ WhatsApp integration                                     │
│     │  └─ Contact info                                                 │
│     │     ├─ Email                                                     │
│     │     ├─ Phone                                                     │
│     │     └─ Social links                                              │
│     │                                                                     │
│     ├─ <footer>                                                          │
│     │  ├─ Footer text                                                   │
│     │  ├─ Build info                                                    │
│     │  └─ Version                                                       │
│     │                                                                     │
│     └─ #backToTop (Back-to-top button)                                  │
│        └─ Hidden by default, shows on scroll                           │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ EXTERNAL SCRIPTS LOADED:                                             │  │
│  │ ├─ js/cv-data.js         (Data definitions)                         │  │
│  │ ├─ js/projects-data.js   (Data definitions)                         │  │
│  │ ├─ js/projects-manager.js (Rendering logic)                         │  │
│  │ └─ js/script.js           (Main logic)                              │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack Layer Diagram

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    TECHNOLOGY STACK - LAYERS                               │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAYER 7: USER INTERFACE (What User Sees)                                 │
│  ════════════════════════════════════════════                             │
│   • Responsive layouts                                                    │
│   • Interactive components                                               │
│   • Animations & effects                                                 │
│   • Dark/Light themes                                                    │
│   • Seamless experience                                                  │
│                            ▲                                              │
│                            │                                              │
│  LAYER 6: ANIMATION ENGINE (Motion & Effects)                            │
│  ═════════════════════════════════════════════════                       │
│   GSAP 3.12.2                                                            │
│   ├─ Tweens (smooth transitions)                                         │
│   ├─ Timelines (complex sequences)                                       │
│   ├─ ScrollTrigger (scroll-based)                                        │
│   ├─ SplitText (character animation)                                     │
│                            ▲                                              │
│                            │                                              │
│  LAYER 5: STYLING ENGINE (Visual Appearance)                             │
│  ════════════════════════════════════════════                            │
│   Tailwind CSS + Custom CSS                                              │
│   ├─ Utility classes                                                     │
│   ├─ Components                                                          │
│   ├─ Responsive design                                                   │
│   ├─ Dark mode                                                           │
│   ├─ Typography                                                          │
│   ├─ Animations                                                          │
│                            ▲                                              │
│                            │                                              │
│  LAYER 4: INTERACTION LAYER (Event Handling)                             │
│  ════════════════════════════════════════════                            │
│   Vanilla JavaScript (No Framework)                                      │
│   ├─ Event listeners                                                    │
│   ├─ DOM manipulation                                                   │
│   ├─ Data management                                                    │
│   ├─ State management (localStorage)                                    │
│   ├─ API integration (WhatsApp)                                         │
│                            ▲                                              │
│                            │                                              │
│  LAYER 3: APPLICATION LOGIC (Business Logic)                             │
│  ═════════════════════════════════════════════                           │
│   Custom JavaScript Modules                                              │
│   ├─ projects-manager.js (Filtering, rendering)                        │
│   ├─ cv-data.js (Data definitions)                                     │
│   ├─ projects-data.js (Data definitions)                               │
│   ├─ script.js (Core functionality)                                    │
│                            ▲                                              │
│                            │                                              │
│  LAYER 2: STRUCTURE & MARKUP (Content)                                   │
│  ═════════════════════════════════════════════════════════════════════   │
│   HTML5 (Semantic)                                                       │
│   ├─ Semantic tags (<header>, <nav>, <section>, <article>)            │
│   ├─ Proper hierarchy (h1-h6)                                           │
│   ├─ Form elements                                                      │
│   ├─ Meta tags                                                          │
│   ├─ Accessibility attributes                                          │
│                            ▲                                              │
│                            │                                              │
│  LAYER 1: DELIVERY (HTTP/HOSTING)                                        │
│  ════════════════════════════════════════════════                        │
│   Static File Server                                                     │
│   ├─ index.html (downloaded)                                            │
│   ├─ CSS files (downloaded)                                             │
│   ├─ JS files (downloaded)                                              │
│   ├─ Images (lazy loaded)                                               │
│   └─ CDN resources (external)                                           │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

**Created:** May 7, 2026  
**Architecture Version:** 2.0  
**Last Updated:** May 7, 2026

