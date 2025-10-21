# Cheland WMS — WMS-only Starter (Next.js + Tailwind)

WMS-only site skeleton with **Automation Pack** (native), **Carriers**, **3PL**, and **TMS Add‑on** pages.
Includes a **ROI Calculator** component.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Minimal shadcn-like UI (Button/Card)
- Framer Motion (hero animation)
- Lucide React (ready to use)

## Develop
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy (Vercel)
- Import this repo in Vercel → Framework: Next.js
- Build command: `next build` (default)
- Output: `.vercel/output` (default)
- Add your links for Calendly/WhatsApp in `app/page.tsx`

## Structure
- `app/` pages (Home, WMS, modules, addons, pricing, cases)
- `components/` (Hero, Timeline, Integrations, ROI, UI)

## Notes
- Replace placeholder copy with your final content.
- Add logos/assets in `public/` as needed.
