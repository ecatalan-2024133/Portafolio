# Portafolio

## Overview

This is a React + Vite portfolio project with a contact API powered by Express and Nodemailer. The app is configured for local development, Docker deployment, and Vercel deployment.

## Features

- React + Vite frontend
- Tailwind CSS styling
- Animated sections with Framer Motion
- Contact form with server-side email sending
- Docker-ready production build
- Vercel-ready serverless API route

## Technologies

- React
- Vite
- Tailwind CSS
- Framer Motion
- Express
- Nodemailer
- Vercel
- Docker

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run locally

The project uses `concurrently` to run both the Vite frontend and the Express backend:

```bash
pnpm dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api/contact`

### 3. Build for production

```bash
pnpm build
```

### 4. Run production server

```bash
pnpm start
```

This starts the Express server and serves the built `dist` files.

## Docker

### Build the image

```bash
docker build -t portfolio-app .
```

### Run the container

```bash
docker run -p 5000:5000 portfolio-app
```

Then open `http://localhost:5000`.

## Vercel Deployment

The project includes a `vercel.json` configuration and an API route at `api/contact.js`.

### Required environment variables

Set these values in Vercel:

- `BREVO_SMTP_USER`
- `BREVO_SMTP_PASS`
- `BREVO_FROM_EMAIL`
- `BREVO_TO_EMAIL`

### Notes

- The frontend uses `/api/contact` for the contact form.
- On Vercel, this route is handled by the serverless function in `api/contact.js`.

## Environment Variables

Use `.env` locally (not committed) with values like:

```env
BREVO_SMTP_USER=your-brevo-smtp-login
BREVO_SMTP_PASS=your-brevo-smtp-key
BREVO_FROM_EMAIL=your-sender-email
BREVO_TO_EMAIL=your-recipient-email
PORT=5000
```

## Scripts

- `pnpm dev` — run Vite and backend server together
- `pnpm dev:client` — run only Vite
- `pnpm dev:server` — run only Express backend
- `pnpm build` — build frontend for production
- `pnpm start` — start Express server in production
- `pnpm preview` — preview built Vite app
- `pnpm lint` — run ESLint

## Notes

- Ensure `yo.jpeg` remains inside `src/assets/images` for the hero section image.
- The contact form now posts to `/api/contact`, making it compatible with both local and deployed environments.
