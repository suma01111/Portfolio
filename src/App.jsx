import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const profile = {
  name: 'Sunita Choudhary',
  email: 'sunita.chxx@gmail.com',
  phone: '+91 83029 54808',
  links: {
    linkedin: 'https://www.linkedin.com/in/sunita-choudhary-12941028a/',
    github: 'https://github.com/suma01111',
    leetcode: 'https://leetcode.com/u/Shree9826/',
  },
}

const projects = [
  {
    number: '01',
    name: 'College Management System',
    type: 'Role-based academic platform',
    description:
      'A full-stack system that brings administrators, faculty, and students into one structured workflow—from course allocation to results.',
    impact: ['3 role-specific dashboards', 'Automated student enrollment', 'Relational data architecture'],
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/suma01111/College-Management-System-DBMS',
    color: 'violet',
  },
  {
    number: '02',
    name: 'Eco-Commerce',
    type: 'Sustainable shopping experience',
    description:
      'An e-commerce platform that makes environmental impact visible alongside the shopping experience, with catalog, cart, and order flows.',
    impact: ['Product impact tracking', 'RESTful backend services', 'End-to-end order flow'],
    stack: ['React', 'Node.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/suma01111/Eco-Commerce',
    color: 'lime',
  },
  {
    number: '03',
    name: 'Blood Bank System',
    type: 'Emergency response coordination',
    description:
      'A database-driven donor and recipient management tool designed to reduce friction in urgent blood requests and matching.',
    impact: ['Donor–recipient matching', 'Validated request handling', 'Structured MySQL records'],
    stack: ['JavaScript', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/suma01111/BloodBank',
    color: 'coral',
  },
]

const skillGroups = [
  { label: 'Languages', items: ['JavaScript', 'C++', 'C', 'SQL'] },
  { label: 'Build', items: ['React', 'Node.js', 'Express', 'HTML', 'CSS'] },
  { label: 'Data', items: ['MongoDB', 'MySQL', 'DBMS'] },
  { label: 'Foundations', items: ['DSA', 'OOP', 'Operating Systems', 'Computer Networks'] },
]

const certifications = [
  {
    code: 'DB / 01',
    title: 'Databases for Developers — Foundations',
    issuer: 'Oracle Dev Gym',
    focus: 'Relational design · SQL · Query fundamentals',
    description: 'Completed hands-on database training focused on writing reliable SQL, modelling relational data, and building a strong foundation for data-driven applications.',
  },
  {
    code: 'VC / 02',
    title: 'Git & GitHub Full Stack Development',
    issuer: 'Professional Masterclass',
    focus: 'Version control · Branching · Collaboration',
    description: 'Developed practical command of modern Git workflows, repository management, branching strategies, and collaborative full-stack development.',
  },
  {
    code: 'OS / 03',
    title: 'GirlScript Summer of Code 2024',
    issuer: 'Open-source Contributor',
    focus: 'Contribution workflows · Code review · Community',
    description: 'Contributed to real-world open-source projects while working with maintainers, navigating review cycles, and learning production-ready collaboration.',
  },
]

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState({ loading: false, message: '', error: false })
  const formRef = useRef(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_y5n4xsn'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zg1hm0n'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'OjZKyN7RJs1i6v0lT'

  useEffect(() => emailjs.init(publicKey), [publicKey])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState({ loading: false, message: 'Please complete all three fields.', error: true })
      return
    }
    setFormState({ loading: true, message: '', error: false })
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current)
      setFormData({ name: '', email: '', message: '' })
      setFormState({ loading: false, message: 'Message sent — I’ll be in touch soon.', error: false })
    } catch {
      setFormState({ loading: false, message: 'Something went wrong. Please email me directly.', error: true })
    }
  }

  const navItems = [['Experience', '#experience'], ['Work', '#projects'], ['Capabilities', '#skills'], ['Journey', '#journey'], ['Contact', '#contact']]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <button className="wordmark" onClick={scrollHome} aria-label="Back to top">
            <span>SC</span><strong>Sunita Choudhary</strong>
          </button>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Available for internships · 2026</p>
              <h1>I turn complex<br />ideas into <em>clear,</em><br />useful products.</h1>
              <p className="hero-intro">
                I’m Sunita, a full-stack developer and computer science student at IIIT Vadodara. I build thoughtful web experiences backed by solid engineering.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
                <a className="text-link" href={`mailto:${profile.email}`}>Let’s work together <Arrow /></a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Sunita Choudhary, full-stack developer">
              <div className="portrait-frame">
                <span className="portrait-index">01 / 03</span>
                <img src="/ProfilePic.png" alt="Sunita Choudhary" />
                <div className="portrait-caption">
                  <span>Based in India</span><span>23.1751° N</span>
                </div>
              </div>
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="code-note" aria-hidden="true"><span>build()</span><br />design + logic</div>
            </div>
          </div>
          <div className="container hero-foot">
            <span>Scroll to discover</span>
            <div className="hero-stack">React · Node.js · Databases · DSA</div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-heading experience-heading">
              <div><p className="eyebrow">Professional experience</p><h2>Engineering with<br />AI at the core.</h2></div>
              <p>Applying full-stack engineering and generative AI to improve how software teams understand repositories, define work, and produce technical documentation.</p>
            </div>
            <article className="experience-card">
              <div className="experience-meta">
                <div className="company-mark">XA</div>
                <div><p className="eyebrow">May 2026 — Present</p><h3>Xelron AI</h3><p>Remote internship</p></div>
              </div>
              <div className="experience-role">
                <p>Software Development Engineer Intern</p>
                <h3>AI / Full Stack</h3>
                <div className="experience-tags"><span>LLMs</span><span>Prompt Engineering</span><span>React.js</span><span>Node.js</span><span>Generative AI</span></div>
              </div>
              <ol className="experience-impact">
                <li><span>01</span><p>Building AI-powered applications that automate software engineering workflows and improve developer productivity.</p></li>
                <li><span>02</span><p>Developing solutions that analyse GitHub repositories and pull requests to produce summaries, acceptance criteria, edge-case analysis, and implementation prompts.</p></li>
                <li><span>03</span><p>Automating technical documentation and engineering processes with LLM-based systems, improving consistency while reducing manual effort.</p></li>
                <li><span>04</span><p>Collaborating in an Agile team to design, develop, and deploy scalable full-stack AI solutions using modern web technologies.</p></li>
              </ol>
            </article>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Selected work</p><h2>Projects with<br />a purpose.</h2></div>
              <p>From campus operations to sustainable commerce—each project starts with a real problem and ends with a working system.</p>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article className={`project project-${project.color}`} key={project.name}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-body">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="impact-list">
                      {project.impact.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <a className="project-open" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Credentials</p><h2>Learning backed<br />by practice.</h2></div>
              <p>Focused programs that strengthened my database, collaboration, and open-source engineering skills.</p>
            </div>
            <div className="certification-grid">
              {certifications.map((certificate) => (
                <article className="certificate" key={certificate.title}>
                  <div className="certificate-top"><span>{certificate.code}</span><span>Verified learning</span></div>
                  <p className="certificate-issuer">{certificate.issuer}</p>
                  <h3>{certificate.title}</h3>
                  <p className="certificate-focus">{certificate.focus}</p>
                  <p className="certificate-description">{certificate.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-layout">
            <div className="skills-intro">
              <p className="eyebrow">Capabilities</p>
              <h2>Building across<br />the stack.</h2>
              <p>I care about the whole product: an interface that feels intuitive, an API that stays understandable, and data that is designed deliberately.</p>
            </div>
            <div className="skill-board">
              {skillGroups.map((group, index) => (
                <div className="skill-row" key={group.label}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.label}</h3>
                  <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container">
            <div className="section-heading compact">
              <div><p className="eyebrow">Journey</p><h2>Learning in public.<br />Leading in practice.</h2></div>
            </div>
            <div className="journey-grid">
              <article className="journey-feature">
                <span className="journey-year">2023—2027</span>
                <p className="journey-kicker">Education</p>
                <h3>B.Tech in Computer Science &amp; Engineering</h3>
                <p>Indian Institute of Information Technology Vadodara</p>
                <p className="muted">Building foundations in algorithms, software engineering, databases, systems, and modern web development.</p>
              </article>
              <div className="journey-stack">
                <article><span>Core curriculum</span><h3>Systems &amp; Software</h3><p>Algorithms, operating systems, computer networks, software engineering, and object-oriented programming.</p></article>
                <article><span>Applied engineering</span><h3>Full-Stack Development</h3><p>Turning product requirements into responsive interfaces, maintainable APIs, and structured data models.</p></article>
                <article><span>Current focus</span><h3>AI-assisted Products</h3><p>Exploring LLM applications, prompt design, repository intelligence, and developer-productivity workflows.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section leadership-section" id="leadership">
          <div className="container leadership-layout">
            <div className="leadership-title">
              <p className="eyebrow">Positions of responsibility</p>
              <h2>Leadership beyond<br />the codebase.</h2>
              <p>Campus roles that strengthened how I organise, communicate, and guide teams through high-energy, deadline-driven work.</p>
            </div>
            <div className="leadership-list">
              <article>
                <span className="leadership-number">01</span>
                <div><p className="leadership-org">MOD5 Dance Club · IIIT Vadodara</p><h3>Secretary</h3><p>Leading the planning and delivery of performances and workshops—from creative direction and rehearsal schedules to team coordination and final execution.</p><div className="leadership-skills"><span>Team leadership</span><span>Event execution</span><span>Communication</span></div></div>
              </article>
              <article>
                <span className="leadership-number">02</span>
                <div><p className="leadership-org">Cultural Committee · IIIT Vadodara</p><h3>Core Member</h3><p>Supporting institute-wide cultural events by coordinating logistics, schedules, and cross-functional teams to keep delivery organised and on time.</p><div className="leadership-skills"><span>Operations</span><span>Cross-team coordination</span><span>Ownership</span></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2>Have a challenge<br />worth solving?</h2>
              <p>I’m looking for internship opportunities, meaningful collaborations, and teams that care about building well.</p>
              <a className="mail-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
              <div className="social-row">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode <Arrow /></a>
              </div>
            </div>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <label><span>Your name</span><input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" /></label>
              <label><span>Email address</span><input name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" /></label>
              <label><span>Tell me about the opportunity</span><textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="A little context goes a long way..." /></label>
              {formState.message && <p className={formState.error ? 'form-status error' : 'form-status'} role="status">{formState.message}</p>}
              <button className="button button-primary" type="submit" disabled={formState.loading}>{formState.loading ? 'Sending…' : 'Send message'} <Arrow /></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner"><span>© {new Date().getFullYear()} Sunita Choudhary</span><span>Designed with intent · Built with React</span><button onClick={scrollHome}>Back to top ↑</button></div>
      </footer>
    </div>
  )
}

export default App
