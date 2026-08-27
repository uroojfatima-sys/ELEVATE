 # ELEVATE — Luxury Fashion Website

> **A pixel-perfect Figma recreation crafted with HTML, Tailwind CSS, JavaScript & Vite.**

**ELEVATE** is a luxury fashion website recreated from a Figma design with a strong focus on **pixel accuracy, responsive layouts, typography, spacing, visual hierarchy, and interactive details**.

The project translates a high-end fashion interface from design into a functional front-end experience using a clean combination of **HTML, Tailwind CSS, vanilla JavaScript, custom CSS, and Vite**.

---

## ✦ About The Project

ELEVATE is designed around a sophisticated luxury-fashion aesthetic.

The goal wasn't simply to recreate the general look of the Figma design — the implementation focuses on matching the original design as closely as possible, including:

* Typography
* Colors
* Gradients
* Spacing
* Borders
* Layout proportions
* Product presentation
* Navigation structure
* Responsive behavior
* Interactive states
* Mobile experience
* Editorial visual hierarchy

The result is a frontend implementation that stays visually faithful to the original Figma concept while remaining functional in the browser.

---

## ✧ Design Direction

The visual language of ELEVATE combines **minimal luxury with editorial fashion design**.

The interface uses a dark, sophisticated background paired with warm gold tones and elegant serif typography.

### Visual Identity

* **Bark / Dark:** `#16090D`
* **Gold Light:** `#F6D995`
* **Gold:** `#C9A24B`
* **Gold Dark:** `#AB8546`

### Typography

The project uses a combination of:

* **Cormorant**
* **Cormorant Garamond**
* **Urbanist**

Serif typography creates the luxury/editorial character, while Urbanist is used for supporting interface elements and modern UI text.

---

## ⚡ Tech Stack

### Frontend

* HTML5
* Tailwind CSS
* Vanilla JavaScript
* Custom CSS

### Development

* Vite
* NPM
* Google Fonts

### Why Vite?

Vite provides a fast development environment with quick startup, efficient updates, and a lightweight build workflow.

---

## 🧩 Features

### Luxury Header

A structured fashion-style header with:

* ELEVATE branding
* Navigation
* Announcement bar
* Category/navigation elements
* Responsive layout
* Desktop and mobile variations

---

### 📢 Announcement Bar

The announcement bar includes interactive navigation that allows users to cycle through different promotional messages.

Example messages include:

* Luxury Fashion for Men & Women
* Discover Our Latest Collection
* Elevate Your Style

The messages can be changed using the previous and next controls.

---

### 🔎 Product Search

The website includes a product-search interaction that dynamically searches through available product cards.

The search functionality:

* Reads the user's query
* Searches product names
* Filters matching products
* Displays useful feedback
* Resets the collection when the search is cleared

---

### 📱 Responsive Mobile Menu

The mobile navigation includes an interactive slide-out menu.

It features:

* Hamburger menu
* Slide-in navigation
* Backdrop overlay
* Close button
* Smooth transitions
* Body scroll locking while the menu is open

The navigation adapts depending on the available screen width.

---

### 📐 Responsive Design

The layout has been carefully adapted for different screen sizes instead of relying on a single fixed desktop composition.

Responsive behavior includes:

* Desktop layouts
* Tablet adjustments
* Mobile navigation
* Mobile typography
* Flexible content widths
* Responsive spacing
* Responsive product layouts
* Small-screen optimizations

Special attention was also given to very small devices where typography and navigation need additional adjustments.

---

## 🎨 Tailwind CSS

Tailwind CSS is used throughout the interface to handle the majority of the layout and styling.

The project uses custom Tailwind configuration for the ELEVATE visual system.

### Custom Colors

```text
bark       #16090D
panel      #141F1A
card       #16090D

gold-light #F6D995
gold       #C9A24B
gold-dark  #AB8546
```

### Custom Fonts

```text
Cormorant
Cormorant Garamond
Urbanist
```

This allows the visual system to stay consistent across the entire website.

---

## ✦ Custom Visual Details

Several custom styles were added beyond standard Tailwind utilities.

These include:

* Gold gradients
* Gradient text
* Gradient backgrounds
* Hairline borders
* Custom scrollbar behavior
* Marquee animation
* Responsive typography
* Mobile transitions
* Editorial spacing
* Custom visual treatments

The gold treatment is especially important to the identity of ELEVATE and is used throughout the interface to create a premium fashion feel.

---

## 📁 Project Structure

```text
ELEVATE/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
├── src/
│   ├── main.js
│   ├── style.css
│   └── counter.js
│
├── public/
│
└── README.md
```

### `index.html`

Contains the main website markup, Tailwind configuration, Google Fonts, responsive styles, and the complete page structure.

### `src/main.js`

Contains the website's JavaScript functionality, including:

* Announcement controls
* Mobile search
* Mobile navigation
* Product search
* Product card handling
* Interactive UI behavior

### `src/style.css`

Contains global styles and additional custom CSS that works alongside Tailwind.

### `vite.config.js`

Contains the Vite configuration used to run and build the project.

---

## 🚀 Getting Started

To run the project locally, first clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd ELEVATE
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 🛠 Available Commands

### Start Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🖥️ Development Approach

The project follows a **design-to-code workflow**:

```text
Figma Design
     ↓
Visual Analysis
     ↓
HTML Structure
     ↓
Tailwind Styling
     ↓
Custom CSS
     ↓
JavaScript Interactions
     ↓
Responsive Refinement
     ↓
Pixel-Perfect UI
```

The implementation prioritizes the visual relationship between elements rather than simply reproducing individual components.

Spacing, typography, alignment, proportions, gradients, and responsive behavior were treated as part of the overall design system.

---

## ✨ What Makes ELEVATE Different?

This project isn't intended to be just another fashion landing page.

The main objective was to answer one question:

> **How accurately can a Figma luxury-fashion interface be translated into a real, responsive website?**

That means paying attention to the small things:

**The spacing between elements.**

**The weight of a heading.**

**The transition of a menu.**

**The subtle gold gradient.**

**The balance between serif and sans-serif typography.**

**The way the interface behaves on a smaller screen.**

These details collectively create the final ELEVATE experience.

---

## 📱 Responsive Philosophy

The desktop design acts as the primary visual reference, while smaller breakpoints progressively adapt the interface.

Instead of shrinking everything proportionally, the implementation adjusts:

* Navigation structure
* Typography
* Padding
* Content width
* Header arrangement
* Search interaction
* Menu behavior
* Component sizing

This keeps the design usable without losing its original visual character.

---

## 🎯 Project Goals

The main goals of ELEVATE were:

* Recreate the Figma design accurately
* Maintain a premium fashion aesthetic
* Build the interface with modern frontend tools
* Make the layout responsive
* Add functional JavaScript interactions
* Keep the implementation lightweight
* Practice translating visual designs into production-style frontend code

---

## 🧠 Learning Outcomes

This project provides practical experience with:

* Figma-to-code implementation
* Tailwind CSS
* Responsive web design
* Vite
* Vanilla JavaScript
* DOM manipulation
* Event handling
* Mobile navigation
* Search functionality
* CSS gradients
* Typography systems
* UI/UX implementation
* Pixel-perfect frontend development

---

## 📌 Current Status

**Status:** Completed Frontend Replica

The project currently contains the core visual implementation and interactive frontend behavior required for the ELEVATE design.

Further enhancements can include backend integration, real product data, shopping-cart functionality, authentication, checkout, and API-based product management.

---

## ⚠️ Disclaimer

ELEVATE is a **frontend design recreation created for educational and portfolio purposes**.

The project demonstrates the process of translating a Figma interface into a functional web experience.

All original design assets, branding, product imagery, and intellectual property remain the property of their respective owners where applicable.

---

## 👩‍💻 Built With

**HTML** · **Tailwind CSS** · **JavaScript** · **Vite**

Designed from Figma.
Built for the browser.
Crafted with attention to detail.

---

# Urooj Fatima

### *Where design meets detail.*
