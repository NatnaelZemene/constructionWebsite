# Premium Corporate Website Redesign Plan

This plan outlines the steps to transform the existing website into a world-class corporate web experience (inspired by Apple, Turner, DPR, and Skanska) while maintaining the current functionality, routing, and Tailwind configuration.

## Proposed Changes

### Global Setup & Design System
- **Fonts**: Replace `Inter` and `Archivo` with `Manrope` globally in `layout.jsx` and `globals.css`. 
- **Colors**: Update the CSS variables in `globals.css` to use the new premium palette:
  - Primary (Navy): `#0F172A`
  - Accent (Orange): `#F59E0B`
  - Background: `#FFFFFF`
  - Secondary Background: `#F8FAFC`
  - Text: `#334155`
  - Success: `#16A34A`
  - Danger: `#DC2626`
- **Global Styles**: Enforce a global `16px` border-radius (`--radius`), soft drop shadows, and optimized text line-heights/spacing.
- **Dependencies**: Install `framer-motion` for elegant animations.

---

### Component Upgrades (Framer Motion & UI)

#### 1. Navbar & Header (`site-header.jsx`)
- Make it transparent over the hero section.
- On scroll, animate to a white background with a backdrop blur and soft shadow.
- Improve mobile menu animations and spacing.

#### 2. Hero Section (`app/page.jsx`)
- Enlarge typography.
- Add an animated scroll indicator.
- Add a subtle background zoom effect.
- Animate elements with stagger effects (Fade Up).
- Upgrade button styles (glassmorphism/premium hover).

#### 3. About Section (`about-section.jsx`)
- Restructure the layout for better hierarchy.
- Wrap content in glass-like cards with 16px radius and soft shadows.
- Add scroll-triggered reveal animations.

#### 4. Services Section (`services-section.jsx`)
- Redesign service cards to have equal heights and a premium aesthetic.
- Add hover elevation (lift) and animated icons.
- Implement stagger animations for the grid on scroll.

#### 5. Projects Portfolio (`projects-section.jsx`)
- Create a modern, filterable portfolio grid.
- Apply a dark gradient overlay on hover with image zoom.
- Add category badges.
- **Open Question:** Do you have a specific Lightbox package you prefer (e.g., `yet-another-react-lightbox` or `framer-motion` expanded layout)? Or should I build a custom one?

#### 6. Why Choose Us (`why-choose-us-section.jsx`)
- Improve feature card designs (modern icon containers).
- Add a floating animation to the main image.
- Enhance the overall spacing and background contrast (using `#F8FAFC`).

#### 7. Contact Section (`contact-section.jsx` & `contact-form.jsx`)
- Upgrade form inputs with animated focus states (Orange outline, slight scale).
- Restructure contact info into professional, elevated cards.

#### 8. Footer (`site-footer.jsx`)
- Already uses the new Navy background and Orange accent, but will improve spacing, add typography tweaks (Manrope), and apply smooth hover effects to social icons.

---

## User Review Required

> [!WARNING]  
> We need to install `framer-motion` to handle the elegant animations and potentially a lightbox package. 

> [!IMPORTANT]  
> Please review the plan. Let me know if you approve these global architectural changes and which Lightbox approach you'd prefer for the Projects section before I begin execution!

## Verification Plan
1. **Visual QA**: Confirm every section adheres to the new colors and fonts.
2. **Animation Test**: Scroll up and down to verify Framer Motion scroll triggers are smooth and respect reduced-motion.
3. **Responsiveness**: Verify the layout still holds together on mobile sizes after spacing adjustments.
