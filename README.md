# Ideal Home UI

A modern, responsive landing page for Ideal Home, a premium interior design and manufacturing company based in the UAE.

Smooth scroll-triggered animations powered by GSAP. Fully responsive across mobile, tablet, and desktop devices. Uses Next.js dynamic imports, optimized images, and component memoization for fast load times.

## Tech Stack

- **Framework**: Next.js
- **Library**: React
- **Styling**: Tailwind CSS
- **Animations**: GSAP & `@gsap/react`
- **Icons**: Lucide React

## Project Structure

- `/src/app` - Next.js App Router pages and layouts.
- `/src/components/layout` - Major structural page sections (Hero, Navbar, Solution, Gallery, etc.).
- `/src/components/ui` - Reusable UI elements (Buttons, etc.).
- `/public/assets` - Static assets like images and logos.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the Development Server**

   ```bash
   npm run dev
   ```

3. **Open the App**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Hosted Link**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Optimizations

- Implemented `next/image` for automatic WebP conversion and responsive sizing.
- Added `next/dynamic` for lazy-loading below-the-fold components.
- Migrated GSAP animations to `useGSAP()` to ensure proper memory management in React 19.
- Switched to Next.js `<Link>` tags for seamless client-side routing.
