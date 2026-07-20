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
    name: 'Blood Bank Management System',
    type: 'Healthcare coordination platform',
    description:
      'A MERN-stack donor and recipient management platform designed to simplify blood requests, availability tracking, and donor matching.',
    impact: ['Donor–recipient matching', 'Validated request handling', 'Centralised blood records'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/suma01111/BloodBank',
    live: 'https://blood-bank-management-system-bbm.vercel.app/',
    color: 'violet',
  },
  {
    number: '02',
    name: 'Eco-Commerce',
    type: 'Sustainable shopping experience',
    description:
      'An e-commerce platform that makes environmental impact visible alongside the shopping experience, with catalog, cart, and order flows.',
    impact: ['Product impact tracking', 'RESTful backend services', 'End-to-end order flow'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/suma01111/Eco-Commerce',
    live: null,
    color: 'lime',
  },
  {
    number: '03',
    name: 'College Management System',
    type: 'Role-based academic platform',
    description:
      'A full-stack system that brings administrators, faculty, and students into one structured workflow—from course allocation to results.',
    impact: ['3 role-specific dashboards', 'Automated student enrollment', 'Relational data architecture'],
    stack: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/suma01111/College-Management-System-DBMS',
    live: null,
    color: 'coral',
  },
]

const skillGroups = [
  { label: 'Languages', items: [{ name: 'JavaScript', icon: 'javascript/javascript-original.svg' }, { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' }, { name: 'C', icon: 'c/c-original.svg' }, { name: 'SQL', icon: 'azuresqldatabase/azuresqldatabase-original.svg' }] },
  { label: 'Frontend', items: [{ name: 'React', icon: 'react/react-original.svg' }, { name: 'HTML5', icon: 'html5/html5-original.svg' }, { name: 'CSS3', icon: 'css3/css3-original.svg' }] },
  { label: 'Backend', items: [{ name: 'Node.js', icon: 'nodejs/nodejs-original.svg' }, { name: 'Express.js', icon: 'express/express-original.svg' }] },
  { label: 'Databases', items: [{ name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' }, { name: 'MySQL', icon: 'mysql/mysql-original.svg' }] },
  { label: 'Tools', items: [{ name: 'Git', icon: 'git/git-original.svg' }, { name: 'GitHub', icon: 'github/github-original.svg' }, { name: 'VS Code', icon: 'vscode/vscode-original.svg' }] },
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

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const revealItems = document.querySelectorAll(
      '.section-heading, .experience-card, .project, .certificate, .skills-intro, .skill-row, .journey-grid, .leadership-title, .leadership-list article, .contact-copy, .contact-form',
    )

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
    })

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )
    revealItems.forEach((item) => observer.observe(item))

    let frame
    const updateSpotlight = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }
    window.addEventListener('pointermove', updateSpotlight, { passive: true })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', updateSpotlight)
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

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
            <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a>
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
              <p className="eyebrow"><span className="status-dot" /> Software Developer · AI &amp; Full Stack</p>
              <h1>Hi, I’m<br /><em>Sunita Choudhary.</em></h1>
              <p className="hero-intro">
                I’m a Computer Science student at IIIT Vadodara and a Software Development Engineer Intern at Xelron AI. I build reliable full-stack applications and AI-powered developer tools.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View my projects <Arrow /></a>
                <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <Arrow /></a>
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
              <div><p className="eyebrow">Experience</p><h2>Professional experience</h2></div>
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
              <div><p className="eyebrow">Selected work</p><h2>Projects</h2></div>
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
                    <div className="project-actions">
                      {project.live ? (
                        <a className="project-action project-action-live" href={project.live} target="_blank" rel="noreferrer">Live Demo <Arrow /></a>
                      ) : (
                        <span className="project-action project-action-disabled">Live demo not published</span>
                      )}
                      <a className="project-action project-action-github" href={project.github} target="_blank" rel="noreferrer">
                        <img src="https://cdn.simpleicons.org/github/ffffff" alt="" aria-hidden="true" /> GitHub Repository
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Credentials</p><h2>Certifications</h2></div>
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
              <h2>Technical skills</h2>
              <p>I care about the whole product: an interface that feels intuitive, an API that stays understandable, and data that is designed deliberately.</p>
            </div>
            <div className="skill-board">
              {skillGroups.map((group, index) => (
                <div className="skill-row" key={group.label}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.label}</h3>
                  <div>{group.items.map((item) => (
                    <span className="tech-item" key={item.name}>
                      <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}`} alt="" aria-hidden="true" />
                      {item.name}
                    </span>
                  ))}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container">
            <div className="section-heading compact">
              <div><p className="eyebrow">Education</p><h2>Academic background</h2></div>
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
              <h2>Positions of responsibility</h2>
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
              <h2>Get in touch</h2>
              <p>I’m open to software engineering opportunities, technical collaborations, and conversations about full-stack development and applied AI.</p>
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
