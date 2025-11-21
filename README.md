# Pradeep Kumar - Portfolio Website

A premium, dark-mode portfolio website for mobile app developer Pradeep Kumar. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, glass morphism design, and full mobile responsiveness.

## 🚀 Features

- **Modern Design**: Dark theme with glass morphism effects and indigo-to-teal gradients
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Subtle entrance animations and micro-interactions
- **Accessible**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Optimized Performance**: Lazy loading, optimized assets, and fast load times
- **PWA Ready**: Includes manifest.json for progressive web app functionality

## 🛠️ Tech Stack

- **React 18+** - Modern functional components with hooks
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling with custom design system
- **Vite** - Fast build tool and dev server
- **Shadcn/ui** - Accessible component library
- **Lucide React** - Beautiful icon library

## 📦 Installation & Local Development

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd pradeep-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The site will be available at `http://localhost:8080`

4. **Build for production**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## 🚢 Deployment

### Deploy to Netlify

1. **Via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

2. **Via Netlify Dashboard**
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. **Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

2. **Via Vercel Dashboard**
   - Import your Git repository
   - Vercel will auto-detect the Vite configuration

### Deploy to GitHub Pages

1. **Update `vite.config.ts`** to include base path:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. **Build and deploy**
```bash
npm run build
npx gh-pages -d dist
```

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Replace name, title, and bio text
   - Update availability status

2. **Projects** (`src/components/Projects.tsx`):
   - Replace the `projects` array with your actual projects
   - Add real project URLs (GitHub, Play Store, App Store)
   - Update screenshots and metrics

3. **Contact Information** (`src/components/ContactForm.tsx`):
   - Update email address
   - Add links to calendar booking system
   - Update social media URLs

4. **Meta Tags** (`index.html`):
   - Update title, description, and OG tags
   - Replace `/og-image.png` with your own image

### Customize Design

All design tokens are defined in:
- `src/index.css` - CSS variables and global styles
- `tailwind.config.ts` - Tailwind theme configuration

Colors use HSL format for easy customization:
```css
--primary: 239 84% 67%;        /* Indigo */
--accent: 173 80% 40%;         /* Teal */
--neon-accent: 180 100% 50%;   /* Cyan */
```

### Add More Sections

Create new components in `src/components/` and import them in `src/pages/Index.tsx`:

```tsx
import NewSection from "@/components/NewSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* ... existing sections */}
      <NewSection />
    </div>
  );
};
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:
- **Glass morphism cards**: `.glass-card` utility class
- **Gradient text**: `.gradient-text` utility class
- **Smooth transitions**: Defined in CSS custom properties
- **Animations**: Fade-up, pulse-glow, and gradient-shift keyframes

All components use semantic tokens from the design system - no hardcoded colors!

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Respects `prefers-reduced-motion` for animations
- Form validation with descriptive error messages

## 📱 PWA Support

The site includes a `manifest.json` for PWA functionality. Users can install it as a native app on mobile devices.

## 🐛 Testing

While unit tests are optional, here's how to add basic snapshot tests:

1. **Install testing dependencies**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

2. **Create test files**
```tsx
// src/components/__tests__/Hero.test.tsx
import { render } from '@testing-library/react';
import Hero from '../Hero';

test('Hero renders correctly', () => {
  const { container } = render(<Hero />);
  expect(container).toMatchSnapshot();
});
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Pradeep Kumar - [contact@pradeepkumar.dev](mailto:contact@pradeepkumar.dev)

---

Built with ❤️ using React + Tailwind CSS
