<div align="center">

# RAVI SHARMA — Portfolio

**Full Stack Developer · Next.js · React · Node.js · TypeScript**

[![Live Site](https://img.shields.io/badge/Live_Site-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ravisharma7877.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RaviSharma7877)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-000000?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on GitHub Pages](https://img.shields.io/badge/GitHub_Pages-000000?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)

---

*A clean, minimal, black & white developer portfolio — built for performance and clarity.*

</div>

---

## Overview

Professional portfolio for **Ravi Sharma**, Full Stack Developer specialising in Next.js, React, Node.js, and TypeScript. Designed with a strict monochrome editorial aesthetic — zero colour, maximum clarity. Statically exported and auto-deployed to GitHub Pages via GitHub Actions on every push.

---

## Sections

| # | Section | Description |
|---|---|---|
| 01 | **Hero** | Full-screen landing with animated blinking cursor, tech stack tagline, and dual CTAs |
| 02 | **About** | Personal bio and key stats (experience, projects, technologies) |
| 03 | **Skills** | Categorised tech stack across Frontend, Backend, Database, Tools & Soft Skills |
| 04 | **Projects** | Numbered featured project cards with tech tags and bullet descriptions |
| 05 | **Experience** | Vertical timeline of work history and education |
| 06 | **Contact** | Direct contact links (Email, Phone, GitHub) and resume download |

---

## Tech Stack

```
Framework     Next.js 16       (App Router, Static Export)
Language      TypeScript 5
Styling       Tailwind CSS v4
Fonts         Geist Sans + Geist Mono  (via next/font)
Deployment    GitHub Pages  ←  GitHub Actions CI
```

---

## Project Structure

```
RaviSharma7877.github.io/
│
├── .github/
│   └── workflows/
│       └── static.yml          # CI: build Next.js → deploy out/ to GitHub Pages
│
├── public/
│   └── media/
│       └── RaviSharmaResume.pdf
│
├── src/
│   ├── app/
│   │   ├── globals.css         # CSS design tokens (B&W palette, scrollbar)
│   │   ├── layout.tsx          # Root layout — metadata + Geist fonts
│   │   └── page.tsx            # Page composition + footer
│   │
│   └── components/
│       ├── Navbar.tsx           # Fixed nav, smooth-scroll links, mobile menu
│       ├── Hero.tsx             # Full-screen section with blinking cursor
│       ├── About.tsx            # Bio + 2×2 stats grid
│       ├── Skills.tsx           # Categorised skill tags (5 categories)
│       ├── Projects.tsx         # Numbered project cards (4 projects)
│       ├── Experience.tsx       # Work + education vertical timeline
│       ├── Contact.tsx          # Contact cards + download resume CTA
│       └── ResumeButton.tsx    # Opens PDF in new tab AND downloads it
│
├── next.config.ts               # output: 'export', images: unoptimized
├── tsconfig.json
└── package.json
```

---

## Design System

The entire UI uses a **strict black & white palette** — no colour accents anywhere.

| Role | Value | Used For |
|---|---|---|
| Background | `#ffffff` | Primary sections |
| Background Alt | `#f9f9f9` | Alternating sections |
| Card | `#ffffff` (white) | Stat boxes, experience cards |
| Text Primary | `#000000` | Headings |
| Text Secondary | `#666666` | Body paragraphs |
| Text Muted | `#999999` → `#bbbbbb` | Labels, captions, section indexes |
| Border Default | `#e5e5e5` | Cards, dividers |
| Border Hover | `#bbbbbb` | Interactive border states |
| Dot Grid | `#e0e0e0` | Hero background texture |

**Hover rule** — all interactive elements animate from gray → black on hover. Nothing ever animates toward a colour.

**Typography** — Hero heading uses `clamp(3rem, 10vw, 8rem)` for fluid responsive scaling. Section labels use `text-xs font-mono tracking-[0.2em] uppercase`. Body copy uses Geist Sans; labels, tags, and numbers use Geist Mono.

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm**

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/RaviSharma7877/RaviSharma7877.github.io.git
cd RaviSharma7877.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Locally

```bash
npm run build
# Static output is generated in out/
```

---

## Deployment Pipeline

Every push to `main` triggers the GitHub Actions workflow:

```
git push origin main
        │
        ▼
  GitHub Actions (.github/workflows/static.yml)
        │
        ├─ actions/setup-node@v4     → Node.js 20 + npm cache
        ├─ npm ci                    → install dependencies
        ├─ npm run build             → next build → out/
        ├─ touch out/.nojekyll       → disable Jekyll processing
        ├─ actions/configure-pages   → set up Pages environment
        └─ actions/upload-pages-artifact + deploy-pages
                │
                ▼
         GitHub Pages  (live in ~2 min)
         https://ravisharma7877.github.io
```

> The `out/` build folder is in `.gitignore` and is **never committed** — it is built fresh in CI on every deploy.

---

## ResumeButton — How It Works

The `ResumeButton` component solves a browser limitation:

- `<a download>` alone — downloads the file but does **not** open a new tab
- `<a target="_blank">` alone — opens a new tab but does **not** download

The component uses JavaScript to do **both simultaneously**:

```tsx
// Opens PDF in new tab
window.open('/media/RaviSharmaResume.pdf', '_blank', 'noreferrer');

// Programmatically triggers a file download
const link = document.createElement('a');
link.href = '/media/RaviSharmaResume.pdf';
link.download = 'RaviSharma-Resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
```

This component is reused across the Navbar, Hero section, Contact section, and Footer.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server at `localhost:3000` |
| `npm run build` | Build static site to `out/` |
| `npm run start` | Start Next.js production server (after build) |
| `npm run lint` | Run ESLint across the project |

---

## Projects Featured

| # | Project | Tech |
|---|---|---|
| 01 | **SamskritSamhita** | Next.js, Prisma, Python |
| 02 | **Actionable** | Next.js, Node.js, REST APIs |
| 03 | **NexAvenir Platform** | Next.js, Prisma ORM, TypeScript |
| 04 | **SketchPad** | Socket.io, WebSockets, Canvas API |

---

## Contact

| Channel | Details |
|---|---|
| Email | [sraa7877@gmail.com](mailto:sraa7877@gmail.com) |
| Phone | +91 7877173859 |
| GitHub | [@RaviSharma7877](https://github.com/RaviSharma7877) |
| Portfolio | [ravisharma7877.github.io](https://ravisharma7877.github.io) |

---

<div align="center">

Built with [Next.js](https://nextjs.org) · Styled with [Tailwind CSS](https://tailwindcss.com) · Deployed on [GitHub Pages](https://pages.github.com)

</div>
