# Soham More — Personal Portfolio

An editorial developer portfolio showcasing selected full-stack engineering, systems, and interactive projects.

## Overview

This repository contains the source code for the personal portfolio of Soham More. The site presents featured projects, technical experience, development skills, and verified project contributions with an editorial visual identity and responsive layouts for desktop, tablet, and mobile devices.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5
- **Typography:** Self-hosted Google Fonts (`Instrument Serif`, `Geist Sans`, `Geist Mono`) via `next/font`
- **Testing & Tooling:** ESLint 9, Puppeteer Core (responsive review verification)

## Project Structure

```
.
├── public/                  # Static assets (favicon, public résumé)
│   ├── icon.svg
│   └── resume.pdf
├── scripts/                 # Review automation scripts
│   └── capture-review-screenshots.mjs
├── src/
│   ├── app/                 # Next.js App Router (homepage, dynamic project routes)
│   │   ├── work/[slug]/     # Dynamic case study detail pages
│   │   ├── globals.css      # Design tokens and custom utilities
│   │   ├── layout.tsx       # Root layout, fonts, and Open Graph metadata
│   │   └── page.tsx         # Main portfolio landing page
│   ├── components/          # Modular UI sections (Hero, Work, About, Skills, Contact)
│   │   ├── AboutSection.tsx
│   │   ├── ChapterNavigation.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Hero.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── TopBar.tsx
│   │   └── WorkSection.tsx
│   └── data/                # Canonical project metadata and résumé experience
│       ├── projects.ts
│       └── resume.ts
├── .env.example             # Template for optional environment variables
├── .gitignore               # Git ignore rules
├── eslint.config.mjs        # ESLint configuration
├── LICENSE                  # MIT License
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and project scripts
├── README.md                # Repository documentation
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.x or later
- npm (or compatible package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SM33-07/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

### Linting

Validate code style and syntax:

```bash
npm run lint
```

### Responsive Screenshot Verification

Capture desktop, tablet, and mobile screenshots of the homepage and all project detail pages:

```bash
npm run screenshots
```

## Environment Configuration

The application works out of the box without required environment variables.

For optional Open Graph canonical URL generation in production, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to your production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deployment Notes

This application is built with the Next.js App Router and can be deployed directly to [Vercel](https://vercel.com/) or any hosting platform supporting Next.js:

- **Root Directory:** `./` (default)
- **Build Command:** `next build`
- **Output Directory:** `.next`

## License

This project is licensed under the [MIT License](LICENSE).
