# SyncUp - Professional Networking Dashboard

A modern dashboard for professional networking and job search, built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Home Feed**: Interactive posts with like, comment, share, and bookmark
- **Job Dashboard**: Application tracker with filtering, sorting, and analytics
- **Search**: Real-time search for users, jobs, and companies
- **Notifications**: Live notification center with mark as read
- **Responsive**: Mobile-first design optimized for all screens
- **Animations**: Smooth transitions and micro-interactions

## Tech Stack

- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Recharts 2.15.4

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/home](http://localhost:3000/home) or [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
myraid/
├── app/                    # Next.js pages
│   ├── (pages)/home/       # Social feed
│   └── (pages)/dashboard/  # Job tracker
├── components/
│   ├── dashboard/          # Dashboard components
│   ├── feed/               # Feed components
│   ├── layout/             # Layout components
│   └── ui/                 # Reusable UI
├── lib/
│   └── mock-data.ts        # Sample data
└── public/images/          # Static assets
```

## Interactive Features

### Posts
- Click heart to like/unlike
- Click bookmark to save
- Click share to copy link
- Press Enter in comment box to submit

### Job Table
- Toggle status filters (In Progress, Applied, Offered, Rejected)
- Click "Sort by" to change sorting (Date, Company, Role)
- Click rows for hover effect

### Search
- Type to see instant results
- Click result to navigate
- Click outside to close

### Notifications
- Click bell icon to open panel
- Click notification to mark as read
- Click "Mark all as read" to clear all

### Chart
- Toggle data series with switches
- Click date dropdown to change range (Year/6 Months/3 Months)

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# Deploy at vercel.com
```

### Manual

```bash
npm run build
npm run start
```

## Customization

### Change Colors

Edit `app/globals.css`:

```css
@theme inline {
  --color-accent: #6366f1;
  --color-success: #10b981;
}
```

### Add Pages

```typescript
// app/(pages)/messages/page.tsx
export default function MessagesPage() {
  return <div>Messages</div>
}
```

### Modify Data

Edit `lib/mock-data.ts` to change posts, jobs, users, etc.

## Troubleshooting

**Port in use**
```bash
PORT=3002 npm run dev
```

**Build fails**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Type errors**
```bash
rm -rf .next
npm run dev
```

## License

Private and proprietary.

---

Built with Next.js 16, React 19, and Tailwind CSS 4
