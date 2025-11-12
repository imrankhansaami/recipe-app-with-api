# 🎨 RecipeHub - UI/UX Style Guide

## Design System Overview

RecipeHub uses a warm, inviting design system inspired by popular food platforms (Pinterest, Yummly, Tasty) with a focus on beautiful food imagery, elegant typography, and smooth interactions.

---

## 🎯 Color Palette

### Primary Colors

```css
Gold Accent:        #d4a574  /* Warm, inviting, appetite-inducing */
Dark Gold:          #c4915f  /* Hover states, deeper interactions */
Lighter Gold:       #e6c9a8  /* Subtle backgrounds */
```

### Neutral Colors

```css
Dark Text:          #2c2c2c  /* High contrast for readability */
Medium Gray:        #555555  /* Secondary text */
Light Gray:         #999999  /* Tertiary text */
Border Gray:        #e0e0e0  /* Subtle dividers */
```

### Background Colors

```css
Cream:              #faf8f5  /* Primary background gradient start */
Off-White:          #f5f0eb  /* Primary background gradient end */
Card White:         #fff9f5  /* Card background (warm white) */
Card Overlay:       rgba(212, 165, 116, 0.08)  /* Subtle color overlay */
```

---

## 🔤 Typography

### Font Family

- **Primary Font**: Poppins (Google Fonts)
- **Fallback**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Line Height**: 1.3 - 1.8 (depending on size)

### Font Sizes & Weights

| Element          | Size   | Weight | Usage                         |
| ---------------- | ------ | ------ | ----------------------------- |
| Page Title (Nav) | 1.8em  | 700    | Brand name                    |
| Recipe Title     | 2em    | 700    | Main recipe heading           |
| Section Heading  | 1.6em  | 700    | "Ingredients", "Instructions" |
| Card Title       | 1.1em  | 600    | Recipe card name              |
| Body Text        | 1em    | 400    | Descriptions, instructions    |
| Small Text       | 0.95em | 500    | Ingredient amounts            |
| Tiny Text        | 0.85em | 400    | Metadata                      |

---

## 🎭 Component Styles

### Buttons

**Primary Button (View Recipe)**

```css
Background:     linear-gradient(135deg, #d4a574 0%, #c4915f 100%)
Color:          white
Padding:        12px 24px
Border Radius:  8px
Font Weight:    600
Transition:     all 0.3s ease
Letter Spacing: 0.5px
```

**On Hover:**

```css
Background:     linear-gradient(135deg, #c4915f 0%, #b47d4d 100%)
Transform:      translateY(-2px)
Box Shadow:     0 6px 16px rgba(212, 165, 116, 0.3)
```

**On Active:**

```css
transform: translateY(0);
```

### Search Input

**Default State:**

```css
Background:     white
Padding:        16px 24px
Border Radius:  12px
Font Size:      16px
Box Shadow:     0 8px 24px rgba(0, 0, 0, 0.08)
Transition:     all 0.3s ease
```

**Focus State:**

```css
Box Shadow:     0 12px 32px rgba(212, 165, 116, 0.25)
Transform:      translateY(-2px)
```

### Recipe Cards

**Default:**

```css
Background:     white
Border Radius:  16px
Padding:        16px
Box Shadow:     0 4px 12px rgba(0, 0, 0, 0.08)
Transition:     all 0.3s ease
Width:          280px
```

**On Hover:**

```css
Box Shadow:     0 12px 28px rgba(212, 165, 116, 0.2)
Transform:      translateY(-8px)
```

**Image Animation:**

```css
Transform on Hover:  scale(1.05)
Transition:         transform 0.3s ease
```

### Ingredient Items

**Container:**

```css
Background:     linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%)
Border:         1px solid rgba(212, 165, 116, 0.1)
Border Radius:  12px
Padding:        16px
Gap:            16px
Margin Top:     12px
```

**On Hover:**

```css
Box Shadow:     0 6px 16px rgba(212, 165, 116, 0.15)
Transform:      translateX(4px)
```

### Inner Container (Scrollable)

```css
Background:         rgba(255, 255, 255, 0.6)
Backdrop Filter:    blur(10px)  /* Glassmorphism effect */
Border Radius:      16px
Padding:            24px
Box Shadow:         0 8px 24px rgba(0, 0, 0, 0.06)
Border:             1px solid rgba(212, 165, 116, 0.1)
Max Height:         80vh
Overflow Y:         auto
```

---

## 📐 Spacing System

| Unit | Value | Usage               |
| ---- | ----- | ------------------- |
| xs   | 8px   | Small gaps          |
| sm   | 12px  | Comfortable padding |
| md   | 16px  | Standard padding    |
| lg   | 20px  | Component spacing   |
| xl   | 24px  | Section spacing     |
| xxl  | 32px  | Large sections      |

---

## 🎪 Shadow System

| Level  | Value                                |
| ------ | ------------------------------------ |
| Subtle | 0 2px 4px rgba(0, 0, 0, 0.06)        |
| Medium | 0 4px 12px rgba(0, 0, 0, 0.08)       |
| Strong | 0 8px 24px rgba(0, 0, 0, 0.1)        |
| Gold   | 0 12px 28px rgba(212, 165, 116, 0.2) |

---

## 🔄 Animations & Transitions

### Timing

```css
Fast:    0.15s  /* Micro-interactions */
Normal:  0.3s   /* Button clicks, hovers */
Slow:    0.5s   /* Page transitions */
```

### Easing

```css
ease        /* Default: smooth acceleration */
ease-out    /* Page exits */
ease-in     /* Page entries */
```

### Common Transitions

**Hover Lift**

```css
transition: all 0.3s ease;
transform: translateY(-4px);
```

**Zoom Image**

```css
transition: transform 0.3s ease;
transform: scale(1.05);
```

**Color Shift**

```css
transition: background 0.3s ease, box-shadow 0.3s ease;
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Desktop */
@media (min-width: 1200px) {
  Grid: 2 columns (recipes + details)
  Max Width: 1600px
}

/* Tablet */
@media (max-width: 1200px) {
  Grid: 1 column (stacked)
  Card Width: auto
}

/* Mobile */
@media (max-width: 600px) {
  Reduced padding: 24px → 16px
  Smaller cards: 240px → 200px
  Simplified spacing
}
```

---

## ♿ Accessibility Features

- **Color Contrast**: WCAG AA compliant (7:1 for text)
- **Focus States**: Visible on all interactive elements
- **Semantic HTML**: Proper heading hierarchy
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Descriptive labels and alt text

---

## 🎨 Visual Hierarchy

### Primary Focus Areas (Highest Emphasis)

- Recipe titles (large, bold, dark)
- Food images (high quality, prominent placement)
- Search bar (center, inviting)

### Secondary Focus Areas

- Category, cuisine, tags (gold accents)
- Ingredient amounts (gold text)
- Section headings

### Tertiary Focus Areas

- Helper text (light gray)
- Loading states (subtle)
- Metadata

---

## 🌟 Brand Identity

### Logo/Branding

- **Icon**: 👨‍🍳 Chef hat emoji
- **Name**: RecipeHub
- **Tagline**: "Discover, Cook, Enjoy"

### Photography Style

- High-quality food photography
- Vibrant, appetizing colors
- Professional presentation
- Consistent sizing and framing

### Voice & Tone

- Warm and inviting
- Approachable and friendly
- Encouraging and supportive
- Non-pretentious

---

## 📊 Grid System

### Recipe Cards Grid

```css
Grid: auto-fill, minmax(280px, 1fr)
Gap: 20px

/* Responsive adjustments */
@media (max-width: 900px): minmax(240px, 1fr), gap 16px
@media (max-width: 600px): minmax(200px, 1fr), gap 12px
```

### Main Layout

```css
Grid: 1fr 1fr (desktop)
Gap: 32px
Padding: 32px

/* Tablet */
Grid: 1fr (single column)
Gap: 24px
Padding: 24px
```

---

## 🎯 Component Checklist

- [x] Navigation bar with gradient
- [x] Search input with focus animations
- [x] Recipe card grid with hover effects
- [x] Recipe details panel
- [x] Ingredient list items
- [x] Scrollable containers with glass effect
- [x] Responsive layout
- [x] Smooth transitions
- [x] Accessibility features
- [x] Mobile optimization

---

## 📝 Usage Examples

### Button Implementation

```jsx
<button className={styles.itemButton}>View Recipe</button>
```

### Card Container

```jsx
<div className={styles.itemContainer}>{/* Card content */}</div>
```

### Responsive Grid

```jsx
<div className={styles.foodListContainer}>{/* Cards automatically grid */}</div>
```

---

## 🚀 Future Design Enhancements

- [ ] Dark mode support
- [ ] Animated recipe transitions
- [ ] Parallax scrolling effects
- [ ] Advanced micro-interactions
- [ ] Custom loading animations
- [ ] Seasonal color themes
- [ ] Advanced filtering UI
- [ ] Wishlist/favorites visual indicators

---

**Last Updated**: November 12, 2025
**Version**: 1.0
**Status**: Production Ready ✅
