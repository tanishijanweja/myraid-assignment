# SyncUp Frontend Intern Assignment

Pixel-perfect, responsive Next.js 14+ implementation of the SyncUp Home Feed and Job Dashboard designs.

## Tech Stack

- Next.js (App Router)
- React 18+
- TypeScript (strict)
- Tailwind CSS
- Recharts (analytics chart)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000/home](http://localhost:3000/home) or [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run eslint

## Project Structure

- `app/(pages)/home` — Home Feed page
- `app/(pages)/dashboard` — Job Dashboard page
- `components` — reusable UI, layout, feed, and dashboard components
- `lib` — mock data and helpers
- `types` — shared TypeScript types
- `styles` — global utilities

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Use the default Next.js build settings.
4. Deploy.
