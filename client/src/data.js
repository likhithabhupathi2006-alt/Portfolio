export const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const links = { github: 'https://github.com/likhithabhupathi2006-alt', linkedin: 'https://www.linkedin.com/in/likhitha-bhupathi-21a570321', email: 'bhupathilikhitha@jklu.edu.in' };
export const roles = ['Computer Science Undergraduate', 'Machine Learning Enthusiast', 'Aspiring MERN Developer'];
export const skills = {
  Frontend: [['HTML/CSS',50], ['React.js',50], ['Figma',70]],
  Backend: [['Node.js', 40], ['Express.js', 20], ['MongoDB', 50], ['Python', 80]],
  'Tools & Technologies': [['C', 80],['DSA',75],['Statistics',80],['Git/GitHub', 65], ['Google Colab', 75], ['Linux', 60]],
};

const gh = 'https://github.com/likhithabhupathi2006-alt/';
export const projects = [
  { name: 'Fitness Tracker', desc: 'Add members and analyse their fitness and wellbeing through their profile.', tech: ['Data', 'DBMS'], github: gh + 'Fitness-tracker' },
  { name: 'Loan Default Prediction', desc: 'Loan default risk prediction using machine learning, comparing models like Logistic Regression, KNN, Random Forest and Gradient Boosting.', tech: ['Python', 'ML'], github: gh + 'Loan-Default-Prediction' },
  { name: 'ClaimGuard', desc: 'AI-powered tool for assessing the data quality of insurance claims.', tech: ['AI', 'Python'], github: gh + 'ClaimGuard' },
  { name: 'Travel Concierge', desc: 'AI agent that creates itineraries, budgets, attraction lists, packing checklists and suggested timings.', tech: ['AI', 'Agent'], github: gh + 'Travel-Concierge' },
];

export const timeline = [
  { year: '2024 – 2028', title: 'B.Tech CSE', place: 'JK Lakshmipati University', note: 'CGPA 8.68 (till 3rd semester)' },
  { year: 'Ongoing', title: 'B.Sc (Online) Data Science', place: 'IIT Madras', note: 'Currently pursuing' },
  { year: '2025 – 2026', title: 'Secretary, Council of Academic Affairs', place: 'JK Lakshmipati University', note: 'Student representative in LRC Committee (2026–2027)' },
  { year: 'Experience', title: 'Teaching Assistant – C Language', place: 'JK Lakshmipati University', note: 'Also Campus Ambassador (eDC IIT Delhi BE\'CON) and Campus Mantri (GeeksForGeeks)' },
  { year: 'May 2026 – June 2026', title: 'Project Intern', place: 'Sri Satya Sai Institute of Actuaries', note: 'Have built ClaimGuard-Data quality assement agent' },
  { year: 'May 2026 – July 2026', title: 'ResearcH Intern', place: 'JK Lakshmipat University', note: 'Worked and published a research paper on Masked Autoencoder Pre-training for ECG Arrhythmia Classification' },
  { year: 'May 2026 – August 2026', title: 'Project Intern', place: 'IDEAS-TIH Kolkata', note: 'Have built AI-Powered Career Guidance System' }
];
export const achievements = [
  { title: '5-Day AI Agents: Intensive Vibe Coding Course Badge', image: '/certs/ai-agents.png' },
  { title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 10', image: '/certs/redhat.png' },
  { title: 'Database Management System Part-1, Infosys Springboard', image: '/certs/dbms.png' },
  { title: 'Kaggle - Machine Learning Course Certification', image: '/certs/kaggle.png' },
  { title: 'Honorable mention in weekly coding contest (2nd and 4th semester)', image: '/certs/coding-contest.png' },
  { title: 'Kaggle - Data Visualization Cetification', image: '/certs/data.png' },
  { title: 'McKinsey.org Forward Program Certification', image: '/certs/mckinsey.png' },
];

export const internships = [
  { company: 'Sri Satya Sai Institute of Actuaries', role: 'Developer intern', duration: 'Jun 2026 – Jul 2026', desc: 'Developed ClaimGuard, an AI-powered data quality assessment tool for insurance claims datasets that detects missing values, duplicates, outliers, invalid dates, and other data inconsistencies. Implemented a normalized quality scoring system, interactive dashboard, and Google Gemini-powered executive reports with downloadable summaries.', image: '/internships/intern1.png' },
  { company: 'JK Lakshmipat University', role: 'Research Intern', duration: 'May 2026 – Jul 2026', desc: 'Worked on research question, Does Masked Autoencoder (MAE) pre-training improve ECG arrhythmia classification compared to training from scratch?', image: '/internships/intern2.png' },
  { company: 'IDEAS-TIH', role: 'Artificial Intellegence intern', duration: 'Jun 2026 – Aug 2026', desc: 'Developed an AI-powered personalized career guidance system that recommends suitable careers based on student profile, skills, interests and academic background.', image: '/internships/intern3.png' },
];