# Personal Portfolio (MERN)
Full-stack portfolio for Bhupathi Likhitha: React (Vite) + Express + MongoDB (Mongoose).

**Live site:** <ADD VERCEL/NETLIFY LINK> | **API:** <ADD RENDER/RAILWAY LINK>

## Features
Typewriter hero, scroll animations (Framer Motion), animated skill bars, filterable project cards, timeline, achievements, dark/light toggle, responsive layout, contact form saved to MongoDB, CV download (PDF + DOCX) served from Express.

## Local setup
```bash
git clone <repo-url> && cd portfolio
cd server && npm install && cp .env.example .env   # add MONGO_URI
npm run dev
cd ../client && npm install && cp .env.example .env
npm run dev
```
## Deployment
Backend on Render (root `server`, start `npm start`, env: MONGO_URI, CLIENT_URL). Frontend on Vercel (root `client`, env: VITE_API_URL = backend URL).
