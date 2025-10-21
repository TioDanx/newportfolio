---

# 👨‍💻 Personal Portfolio — Daniel Campuzano

A modern, performance-focused portfolio built with **Next.js**, showcasing my work as a **Frontend & Software Engineer**. Designed with clean architecture, accessibility, and scalability in mind—optimized for Core Web Vitals, responsive layouts, and seamless user interaction.

---

## 🚀 Tech Stack

### **Framework & Language**

* **Next.js 15** (App Router, RSC, Optimized Routing)
* **TypeScript 5**

### **Styling & UI**

* **Tailwind CSS 4**
* **shadcn/ui + Radix UI**
* **Lucide Icons**
* **Framer Motion** (animations with reduced-motion fallback)
* **next-themes** (dark/light mode with persistence)

---

## 🎯 Guiding Principles

* **Clean Architecture** (SOLID, DRY, KISS)
* **Mobile-First, Fully Responsive**
* **UI Focused on Clarity & Micro-Interactions**
* **Performance-Driven** (lazy loading, caching, optimized assets)
* **Accessible by Default** (ARIA roles, focus states, contrast compliance)

---

## ⚡ Getting Started

```bash
# Install dependencies
pnpm install     # or npm / yarn

# Run in development
pnpm dev

# Build for production
pnpm build

# Start production build
pnpm start
```

Visit **[http://localhost:3000](http://localhost:3000)** to view the app.

---

## 🌐 Environment Variables (Optional Features)

```env
# Authentication (optional)
NEXTAUTH_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/                # App Router pages, layouts, metadata
│   ├── (public)/       # Public-facing portfolio routes
├── components/
│   ├── ui/             # Reusable UI components from shadcn
├── hooks/              # Custom React hooks
├── lib/                # Utils, SEO config, fetchers
```

---

## ✨ Key Features

* ✅ **Dark & Light theme with persistence**
* 🎬 **Smooth animations, respecting system motion preferences**
* 📱 **Fully responsive — mobile-first layout**
* 🌐 **SEO optimized: metadata, Open Graph tags, sitemap**

---

## 🧪 Code Quality

* **ESLint & Prettier** with strict TypeScript rules
* **Conventional Commits** (for clean Git history)

---

## 🎨 Design System

Theming and UI consistency are handled using Tailwind design tokens:

```css
:root {
  --color-primary: 100 5 95;   /* #640D5F */
  --color-secondary: 235 91 0; /* #EB5B00 */
  --color-background: 11 11 15;
  --color-text: 237 237 247;
}
```

These tokens are applied across buttons, cards, sections, and layout components to maintain branding consistency.

---

## 🚢 Deployment

**Recommended:** Vercel
Supports Next.js native features such as:

* Server-side rendering
* Edge Functions
* Image Optimization
* Preview Deployments

---


## 👤 About Me

**Daniel Campuzano**
Frontend & Software Engineer — Passionate about clean UI, performance, and AI integration.
📍 Mar del Plata, Argentina | 🌎 Open to Remote Opportunities
📧 [danicampu56@gmail.com](mailto:danicampu56@gmail.com)
🔗 LinkedIn: https://www.linkedin.com/in/daniel-campuzano-7149552b7/

---
