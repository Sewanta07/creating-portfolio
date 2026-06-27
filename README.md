# Sewanta Luitel - Premium Portfolio Website

This is a premium, modern, highly interactive portfolio website built for Sewanta Luitel. It acts as a digital resume and project showcase, designed with a futuristic "developer dashboard" aesthetic.

## Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** Built following [Shadcn UI](https://ui.shadcn.com/) guidelines

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign in.
3. Click on "Add New" -> "Project" and import your GitHub repository.
4. Leave the default settings (Framework Preset: Next.js) and click "Deploy".

## DNS Configuration (Cloudflare)

To point your custom domain (`sewantaluitel.com.np`) to Vercel via Cloudflare:

1. **Add Domain to Vercel:**
   - In your Vercel project dashboard, go to Settings > Domains.
   - Add `sewantaluitel.com.np` and `www.sewantaluitel.com.np`.
   - Vercel will provide you with a CNAME or A Record to add.

2. **Configure Cloudflare:**
   - Go to your Cloudflare dashboard and select your domain.
   - Navigate to the **DNS** tab.
   - Add an `A` record pointing `@` to `76.76.21.21` (Vercel's Anycast IP).
   - Add a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
   - Ensure the Proxy status (orange cloud) is **ON** (Proxied) if you want Cloudflare's CDN and security, or **OFF** (DNS only) if you prefer to rely solely on Vercel's edge network (Vercel recommends DNS Only for best performance with their platform).

3. **SSL/TLS Settings (If using Proxy):**
   - In Cloudflare, set SSL/TLS encryption mode to **Full (strict)**.

## Assets Needed
- `public/profile.jpg`: Your professional photo for the hero section.
- `public/resume.pdf`: Your resume file.
- `public/project-vehicle.jpg`, `project-inventory.jpg`, etc.: Screenshots of your projects.
