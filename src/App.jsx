import CursorFX from './CursorFX.jsx'
import Magnetic from './Magnetic.jsx'
import Reveal from './Reveal.jsx'
import TiltPhoto from './TiltPhoto.jsx'

const projects = [
  {
    title: 'AttendX',
    date: 'Mar 2026 — Apr 2026',
    desc: 'A full-stack, role-based attendance management system for students, teachers, and admins — built to handle real institutional workflows, not a toy demo.',
    points: [
      'Role-based access control with JWT authentication and bcrypt password hashing for Students, Teachers, and Admins',
      'Real-time attendance tracking with automated 75% threshold alerts, visualized via custom HTML5 Canvas donut and bar charts',
      'Bulk attendance marking and a modification-request workflow with admin approval/rejection and live notifications',
      'Self-registration with admin approval, dark/light mode toggle, and persistent session state',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    link: 'https://github.com/sharmayash31/attendmngmtsys',
    demo: 'https://attendmngmtsys.vercel.app',
  },
  {
    title: 'Resume Analyzer',
    date: 'Jun 2025 — Jul 2025',
    desc: "An automated document screening tool that parses, indexes, and surfaces candidate data using Azure's AI services — built as the capstone for a Gen AI training program.",
    points: [
      'Parsed and indexed candidate resumes using Azure Document Intelligence and Azure AI Search',
      'Designed a UI for recruiters to upload, search, and filter resumes by skill, experience, and keyword match',
      'Architected a scalable cloud pipeline with Azure Blob Storage, App Service, and Azure Functions for document ingestion and processing',
    ],
    stack: ['Azure AI Search', 'Document Intelligence', 'Python', 'Azure Functions'],
    link: 'https://github.com/sharmayash31/Resume-analyzer',
  },
  {
    title: 'Interactive Calculator',
    date: 'Apr 2025 — Jun 2025',
    desc: 'A responsive calculator built to get keyboard input, layout, and real-time computation precisely right.',
    points: [
      'Full keyboard input mapping for faster, accessible interaction',
      'Rigorous front-end testing to ensure accurate, real-time calculation display across edge cases',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/sharmayash31/calculator',
  },
]

const timeline = [
  { date: '2025 — 2026', title: '2nd Place — PROMPTHATHON', sub: 'GLA University, Mathura' },
  { date: '2025', title: 'Certified — Microsoft Azure Gen AI', sub: 'Microsoft' },
  { date: '2025', title: 'Certified — Tally Prime', sub: 'ICIT Technologies' },
  { date: '2026 — 2027', title: 'President, Natraj Club', sub: 'GLA University' },
  { date: '2025 — 2026', title: 'HR/PR Head, Natraj Club', sub: 'GLA University' },
  { date: '2023 — 2025', title: 'Coordinator — SRIJAN, FUSION, SPANDAN', sub: 'Cultural Fest Committees, GLA University' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <CursorFX />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />

      <header>
        <div className="topbar">
          <div className="brand"><span className="mark">YS</span>YASH SHARMA</div>
          <nav>
            <div className="navlinks" style={{ display: 'flex', gap: 28 }}>
              <a className="navlink" href="#work">Work</a>
              <a className="navlink" href="#stack">Stack</a>
              <a className="navlink" href="#log">Log</a>
              <a className="navlink" href="#contact">Contact</a>
            </div>
            <Magnetic className="cv-btn" href="mailto:yash.sharma1_cs23@gla.ac.in">Get in Touch</Magnetic>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner" style={{ position: 'relative' }}>
            <div className="social-rail">
              <a href="https://github.com/sharmayash31" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/yash-sharma-435675307/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8h-4V9Z" /></svg>
              </a>
              <a href="mailto:yash.sharma1_cs23@gla.ac.in" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18v12H3z" /><path d="m3 7 9 6 9-6" /></svg>
              </a>
            </div>

            <div className="portrait-stage">
              <div className="eyebrow-center"><span className="ping" />Open to opportunities</div>
              <div style={{ position: 'relative' }}>
                <TiltPhoto>
                  <div className="portrait-frame flicker">
                    <span className="tape tl" aria-hidden="true"></span>
                    <span className="tape br" aria-hidden="true"></span>
                   <div className="portrait-inner">
  <img src="/photo.jpg" alt="Yash Sharma" />
  <div className="portrait-scan" />
</div>
                  </div>
                </TiltPhoto>
                <div className="orbit" aria-hidden="true">
                  <svg viewBox="0 0 160 160">
                    <defs>
                      <path id="orbitPath" d="M80,80 m-65,0 a65,65 0 1,1 130,0 a65,65 0 1,1 -130,0" />
                    </defs>
                    <text>
                      <textPath href="#orbitPath" startOffset="0%">FULL-STACK · CLOUD AI · MERN ·</textPath>
                    </text>
                  </svg>
                  <div className="orbit-core"><span className="dot" /></div>
                </div>
              </div>
            </div>

            <div className="name-block">
              <h1>
                <span>Yash</span> <span className="fade">Sharma</span>
              </h1>
              <div className="name-role">B.TECH CS, GLA UNIVERSITY <span className="sep">//</span> FULL-STACK &amp; CLOUD AI DEVELOPER</div>
              <p className="hero-sub-line">
                I design and build full-stack systems — from role-based attendance platforms to
                Azure-powered document intelligence — with clean architecture and real-world reliability.
              </p>
              <div className="hero-cta-row">
                <Magnetic className="pill primary" href="#work">View My Work</Magnetic>
                <Magnetic className="pill" href="#contact">Get in Touch</Magnetic>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>FULL-STACK DEVELOPMENT</span>
            )).concat(
              Array.from({ length: 2 }).map((_, i) => <span key={'a' + i}>GENERATIVE AI</span>),
              Array.from({ length: 2 }).map((_, i) => <span key={'b' + i}>MICROSOFT AZURE</span>),
              Array.from({ length: 2 }).map((_, i) => <span key={'c' + i}>REACT · NODE · MONGODB</span>)
            )}
          </div>
        </div>

        <section className="section wrap" id="about">
          <div className="label-row">
            <span className="label">01 — About</span>
            <h2>Grounded in fundamentals,<br />building toward production.</h2>
          </div>
          <Reveal>
            <div className="about-grid">
              <div>
                <p>I'm a Computer Science undergraduate at GLA University, Mathura, focused on full-stack engineering and applied Generative AI. My work spans building production-style systems with real auth, real data flows, and real cloud infrastructure — not just tutorials.</p>
                <p>Recent training in Generative AI on Microsoft Azure pushed me toward applying AI to practical problems: document parsing, semantic search, and automated screening. I pair that with hands-on full-stack development using the MERN stack.</p>
                <p>Currently solving algorithmic problems on LeetCode and looking for opportunities to apply this work to real engineering teams.</p>
              </div>
              <div className="stat-block">
                <div className="stat"><div className="num">80+</div><div className="desc">LeetCode problems solved</div></div>
                <div className="stat"><div className="num">3</div><div className="desc">Production-style full-stack projects</div></div>
                <div className="stat"><div className="num">2027</div><div className="desc">Expected graduation</div></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section wrap" id="work">
          <div className="label-row">
            <span className="label">02 — Selected Work</span>
            <h2>Projects, built end to end.</h2>
          </div>
          {projects.map((p) => (
            <Reveal key={p.title}>
              <div className="project">
                <div className="project-top">
                  <div className="project-title">{p.title}</div>
                  <div className="project-date">{p.date}</div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <ul>
                  {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
                <div className="stack">
                  {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
                {p.demo && (
                  <a className="project-link" href={p.demo} target="_blank" rel="noopener" style={{marginRight: 16}}>
    Live Demo <ArrowIcon />
                  </a>
                )}
                <a className="project-link" href={p.link} target="_blank" rel="noopener">
                  View on GitHub <ArrowIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="section wrap" id="stack">
          <div className="label-row">
            <span className="label">03 — Stack</span>
            <h2>Tools I build with.</h2>
          </div>
          <Reveal>
            <div className="skill-grid">
              <div className="skill-cell">
                <div className="cat">Programming</div>
                <div className="items">Python, Java, SQL, HTML, CSS</div>
              </div>
              <div className="skill-cell">
                <div className="cat">Web Development</div>
                <div className="items">React.js, Node.js, Express.js, MongoDB, REST APIs, JWT</div>
              </div>
              <div className="skill-cell">
                <div className="cat">Cloud &amp; AI</div>
                <div className="items">Microsoft Azure, Generative AI, Azure AI Search, Document Intelligence</div>
              </div>
              <div className="skill-cell">
                <div className="cat">Tools</div>
                <div className="items">Git, GitHub</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section wrap" id="log">
          <div className="label-row">
            <span className="label">04 — Log</span>
            <h2>Achievements &amp; activity.</h2>
          </div>
          <Reveal>
            <div className="timeline">
              {timeline.map((t, i) => (
                <div className="tl-row" key={i}>
                  <div className="tl-date">{t.date}</div>
                  <div className="tl-content">
                    <div className="tl-title">{t.title}</div>
                    <div className="tl-sub">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="wrap" id="contact">
        <Reveal>
          <div className="contact-title">Let's build <em>something real</em> together.</div>
          <div className="contact-links">
            <Magnetic className="pill primary" href="mailto:yash.sharma1_cs23@gla.ac.in">Email Me</Magnetic>
            <Magnetic className="pill" href="https://www.linkedin.com/in/yash-sharma-435675307/" target="_blank" rel="noopener">LinkedIn ↗</Magnetic>
            <Magnetic className="pill" href="https://github.com/sharmayash31" target="_blank" rel="noopener">GitHub ↗</Magnetic>
            <Magnetic className="pill" href="tel:+918604355226">+91 86043 55226</Magnetic>
          </div>
        </Reveal>
        <div className="foot-bottom">
          <span>Gonda, India</span>
          <span>© 2026 Yash Sharma</span>
        </div>
      </footer>
    </>
  )
}
