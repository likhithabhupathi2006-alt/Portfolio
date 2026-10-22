import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { API, links, roles, skills, projects, timeline, achievements, internships } from './data.js';

const Reveal = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
);

function Typewriter() {
  const [i, setI] = useState(0), [txt, setTxt] = useState(''), [del, setDel] = useState(false);
  useEffect(() => {
    const full = roles[i];
    const t = setTimeout(() => {
      if (!del) { setTxt(full.slice(0, txt.length + 1)); if (txt.length + 1 === full.length) setTimeout(() => setDel(true), 1200); }
      else { setTxt(full.slice(0, txt.length - 1)); if (txt.length <= 1) { setDel(false); setI((i + 1) % roles.length); } }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [txt, del, i]);
  return <span className="type">{txt}<b>|</b></span>;
}

function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' }), [st, setSt] = useState('');
  const submit = async (e) => {
    e.preventDefault(); setSt('Sending...');
    try {
      const r = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const d = await r.json();
      if (r.ok) { setSt('Message sent. Thank you!'); setF({ name: '', email: '', message: '' }); } else setSt(d.error || 'Failed');
    } catch { setSt('Could not reach server.'); }
  };
  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Name" required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input type="email" placeholder="Email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <textarea rows="5" placeholder="Message" required value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
      <button className="btn" type="submit">Send Message</button>
      {st && <p>{st}</p>}
    </form>
  );
}

function Achievements() {
  const [sel, setSel] = useState(null);
  return (
    <>
      <div className="grid">
        {achievements.map((a) => (
          <motion.div whileHover={{ y: -6 }} className="card cert" key={a.title} onClick={() => setSel(a)}>
            <img src={a.image} alt={a.title} loading="lazy" onError={(e) => (e.target.style.display = 'none')} />
            <p>{a.title}</p>
          </motion.div>
        ))}
      </div>
      {sel && (
        <div className="modal" onClick={() => setSel(null)}>
          <img src={sel.image} alt={sel.title} />
          <p>{sel.title} · click anywhere to close</p>
        </div>
      )}
    </>
  );
}

function Internships() {
  const [sel, setSel] = useState(null);
  return (
    <>
      <div className="grid">
        {internships.map((i) => (
          <motion.div whileHover={{ y: -6 }} className="card cert" key={i.company} onClick={() => setSel(i)}>
            <img src={i.image} alt={i.company} loading="lazy" onError={(e) => (e.target.style.display = 'none')} />
            <h3>{i.company}</h3>
            <p className="muted">{i.role} · {i.duration}</p>
          </motion.div>
        ))}
      </div>
      {sel && (
        <div className="modal" onClick={() => setSel(null)}>
          <div className="detail" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setSel(null)}>✕</button>
            <img src={sel.image} alt={sel.company} />
            <h3>{sel.company}</h3>
            <p className="muted">{sel.role} · {sel.duration}</p>
            <p>{sel.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

function Home() {
  const [tag, setTag] = useState('All');
  const tags = ['All', ...new Set(projects.flatMap((p) => p.tech))];
  const shown = tag === 'All' ? projects : projects.filter((p) => p.tech.includes(tag));
  return (
    <>
      <section id="home" className="hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p>Hi, I'm</p><h1>Likhitha Bhupathi</h1>
          <h2><Typewriter /></h2>
          <div className="row">
            <a className="btn" href={`${API}/api/resume/pdf`}>Download Resume (PDF)</a>
            <a className="btn alt" href={`${API}/api/resume/docx`}>Download Resume (Word)</a>
          </div>
        </motion.div>
      </section>

      <section id="about"><Reveal><h2 className="title">About Me</h2>
        <div className="about">
          <img className="photo" src="/profile.png" alt="Bhupathi Likhitha" />
        <div></div>
          <div><p>I'm a Computer Science undergraduate at JK Lakshmipat University with a strong academic foundation and a growing focus on Data Science, Artificial Intelligence, and Machine Learning. I enjoy turning ideas into practical solutions through technical projects, data-driven problem-solving, and collaborative learning.

Beyond academics, I value student leadership, academic coordination, and exploring opportunities that challenge me to learn and build. I'm particularly interested in applying technology to real-world problems and continuously expanding my technical skills.</p>
            <p><b>Location:</b> India &nbsp;|&nbsp; <b>Status:</b> Student (B.Tech CSE, JKLU) &nbsp;|&nbsp; <b>Also:</b> B.Sc Data Science, IIT Madras</p></div></div></Reveal></section>

      <section id="skills"><h2 className="title">Skills</h2>
        {Object.entries(skills).map(([cat, list]) => (
          <Reveal key={cat}><h3>{cat}</h3>
            {list.map(([n, v]) => (
              <div className="bar" key={n} title={`${n}: ${v}% proficiency`}>
                <span>{n} <small>{v}%</small></span>
                <div className="track"><motion.div className="fill" initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
              </div>))}
          </Reveal>))}
      </section>

      <section id="projects"><h2 className="title">Projects</h2>
        <div className="row center">{tags.map((t) => <button key={t} className={`chip ${t === tag ? 'on' : ''}`} onClick={() => setTag(t)}>{t}</button>)}</div>
        <div className="grid">
          {shown.map((p) => (
            <motion.div layout whileHover={{ y: -8 }} className="card" key={p.name}>
              <h3>{p.name}</h3><p>{p.desc}</p>
              <div className="row">{p.tech.map((t) => <span className="badge" key={t}>{t}</span>)}</div>
              <div className="row"><a href={p.github} target="_blank" rel="noreferrer">GitHub</a><a href={p.live} target="_blank" rel="noreferrer">Live Demo</a></div>
            </motion.div>))}
        </div>
      </section>

      <section id="timeline"><h2 className="title">Education & Experience</h2>
        <div className="tl">{timeline.map((t, i) => (
          <motion.div className="tl-item" key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <small>{t.year}</small><h3>{t.title}</h3><p>{t.place}</p><p className="muted">{t.note}</p>
          </motion.div>))}</div>
      </section>

      <section id="internships"><Reveal><h2 className="title">Internships</h2>
        <Internships />
      </Reveal></section>

      <section id="achievements"><Reveal><h2 className="title">Certifications & Achievements</h2>
        <Achievements />
      </Reveal></section>

      <section id="contact"><Reveal><h2 className="title">Contact</h2><Contact /></Reveal></section>
    </>
  );
}

const NotFound = () => <section className="hero"><div><h1>404</h1><Link className="btn" to="/">Go Home</Link></div></section>;

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [open, setOpen] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);
  const nav = ['home', 'about', 'skills', 'projects', 'timeline','internships','achievements', 'contact'];
  return (
    <>
      <header className="nav">
        <Link to="/" className="logo">Likhitha</Link>
        <button className="burger" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'open' : ''}>
          {nav.map((n) => <a key={n} href={`/#${n}`} onClick={() => setOpen(false)}>{n}</a>)}
          <button className="chip" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀ Light' : '🌙 Dark'}</button>
        </nav>
      </header>
      <Routes><Route path="/" element={<Home />} /><Route path="*" element={<NotFound />} /></Routes>
      <footer>© 2026 Bhupathi Likhitha · <a href={links.github}>GitHub</a> · <a href={links.linkedin}>LinkedIn</a></footer>
    </>
  );
}
