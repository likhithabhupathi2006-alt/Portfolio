<div align="center">

# 🌟 Bhupathi Likhitha | MERN Portfolio

A full-stack personal portfolio with animations, dark/light mode, downloadable resume, and a contact form wired to MongoDB.

[🌐 Live Site](https://portfolio-tan-tau-23.vercel.app/) · [⚙️ Backend API](https://portfolio-me4o.onrender.com/) · [💼 LinkedIn](https://www.linkedin.com/in/likhitha-bhupathi-21a570321)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-black)

</div>

---

## 📖 About

This portfolio is my online CV: it introduces me, shows my skills and projects, tracks my education and achievements, and lets visitors contact me or download my resume. It was built as part of a MERN stack course assignment.

## ✨ Features

- **Animated hero** with a typewriter effect and resume download buttons
- **About, Skills, Projects, Timeline, Achievements and Contact** sections
- **Scroll animations** using Framer Motion, plus animated skill bars with hover tooltips
- **Project cards** with tech badges, GitHub links and technology filters
- **Dark / Light mode** toggle that remembers your choice
- **Fully responsive** on mobile, tablet and desktop
- **Resume download** in both **PDF** and **Word (.docx)**, served from the Express backend
- **Contact form** that validates input and stores messages in **MongoDB** via Mongoose
- **React Router** single-page app with a 404 page

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React 18, Vite, React Router, Framer Motion, CSS |
| Backend | Node.js, Express.js, CORS, dotenv |
| Database | MongoDB Atlas, Mongoose |
| Deployment | Vercel (frontend), Render (backend) |

## 🚀 Projects Showcased

| Project | Description |
|---------|-------------|
| [Fitness Tracker](https://github.com/likhithabhupathi2006-alt/Fitness-tracker) | Add members and analyse their fitness and wellbeing through their profile |
| [Loan Default Prediction](https://github.com/likhithabhupathi2006-alt/Loan-Default-Prediction) | Loan default risk prediction using machine learning |
| [ClaimGuard](https://github.com/likhithabhupathi2006-alt/ClaimGuard) | AI-powered insurance claims data quality assessment tool |
| [Travel Concierge](https://github.com/likhithabhupathi2006-alt/Travel-Concierge) | AI agent that creates itineraries, budgets, packing checklists and timings |

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx         # Routes, sections, theme toggle, contact form
│   │   ├── data.js         # Skills, projects, timeline content
│   │   ├── App.css         # Styling and dark/light themes
│   │   └── main.jsx
│   └── .env.example
├── server/                 # Express backend
│   ├── files/              # Resume PDF + DOCX
│   ├── server.js           # API routes and MongoDB connection
│   └── .env.example
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/contact` | Save a contact message (`name`, `email`, `message`) |
| GET | `/api/resume/pdf` | Download resume as PDF |
| GET | `/api/resume/docx` | Download resume as Word document |

## ⚙️ Local Setup

**Prerequisites:** Node.js 18+, a MongoDB Atlas account (free tier works).

```bash
# 1. Clone the repo
git clone https://github.com/likhithabhupathi2006-alt/portfolio.git
cd portfolio
```

**Backend**
```bash
cd server
npm install
cp .env.example .env      # then add your MongoDB URI
npm run dev
```

**Frontend** (in a second terminal)
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Open **http://localhost:5173**

### Environment Variables

`server/.env`
```
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
PORT=5000
```

`client/.env`
```
VITE_API_URL=http://localhost:5000
```

> 🔒 `.env` files are listed in `.gitignore` and are never pushed to GitHub.

## ☁️ Deployment

- **Backend (Render):** root directory `server`, build `npm install`, start `npm start`, env vars `MONGO_URI` and `CLIENT_URL`.
- **Frontend (Vercel):** root directory `client`, env var `VITE_API_URL` set to the Render URL.

> Note: Render's free tier sleeps when idle, so the first request after a while may take up to a minute.

## 📸 Screenshots
<img width="1322" height="615" alt="image" src="https://github.com/user-attachments/assets/5ff2ef9f-8a8e-4855-824d-476574b5c80e" />
<img width="1035" height="688" alt="image" src="https://github.com/user-attachments/assets/87cd634e-09c5-4bcb-b258-5a900b160b94" />
<img width="1053" height="1277" alt="image" src="https://github.com/user-attachments/assets/8955df8d-7f40-4ebe-b183-3fbc81db10e2" />
<img width="1279" height="559" alt="image" src="https://github.com/user-attachments/assets/d1e93e81-49c2-41aa-8f29-99c457bd53ad" />

## 👩‍💻 Author

**Bhupathi Likhitha**
B.Tech CSE, JK Lakshmipati University · B.Sc Data Science, IIT Madras

📧 bhupathilikhitha@jklu.edu.in
🔗 [LinkedIn](https://www.linkedin.com/in/likhitha-bhupathi-21a570321) · [GitHub](https://github.com/likhithabhupathi2006-alt)

---

<div align="center">Made with ❤️ using the MERN stack</div>



