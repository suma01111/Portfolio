const data = {
  name: 'Sunita Choudhary',
  headline: 'Aspiring Full Stack Developer & Software Engineer',
  objective:
    '',
  email: 'sunita.chxx@gmail.com',
  phone: '+91-830-295-4808',
  links: {
    linkedIn: 'https://www.linkedin.com/in/sunita-choudhary-12941028a/',
    github: 'https://github.com/suma01111',
    leetCode: 'https://leetcode.com/u/Shree9826/',
  },
  education: [
    {
      period: 'Sept 2023 – May 2027',
      title: 'Indian Institute of Information Technology Vadodara',
      degree: 'BTech in Computer Science and Engineering',
      note: 'Building strong foundations in algorithms, systems, and web development.',
    },
  ],
  certificates: [
    {
      title: 'Oracle Dev Gym - Databases for Developers – Foundations',
      description:
        'Completed hands-on training in relational databases, SQL querying, and performance-focused schema design.',
      
    },
    {
      title: 'Git & GitHub Full Stack Development – Masterclass',
      issuer: 'Online Masterclass',
      description:
        'Gained hands-on experience with Git workflows, branching strategies, and collaborative development on full-stack projects.',
      
    },
    {
      title: 'GSSoC 2024 Contributor',
      issuer: 'GirlScript Summer of Code 2024',
      description:
        'Contributed to real-world open-source projects, collaborating with maintainers and learning production-ready workflows.',
      
    },
  ],
  skills: {
    languages: ['JavaScript', 'SQL', 'C++', 'C'],
    technologies: ['React', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Git', 'GitHub', 'VS Code'],
    databases: ['MongoDB', 'MySQL'],
    areas: [
      'Full Stack Development',
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
    ],
  },
  projects: [
    {
      name: 'College Management System',
      tag: 'Full Stack · System',
      tech: 'React · Node.js · Express.js · MySQL',
      points: [
        'Developed a full-stack College Management System with role-based dashboards for Admin, Faculty, and Students.',
        'Implemented course CRUD operations, faculty assignment, automated student enrollment, profile management, and result submission using a structured relational database.',
      ],
      github: 'https://github.com/suma01111/College-Management-System-DBMS',
      status: 'Academic project',
    },
    {
      name: 'Eco-Commerce (HACK-JMI)',
      tag: 'E-commerce · Sustainability',
      tech: 'React.js · Node.js · Express.js · MongoDB · REST API',
      points: [
        'Built an e-commerce platform for environmentally sustainable products with a product catalog and cart system.',
        'Added emission tracking and order management to highlight eco-impact and ensure smooth purchasing.',
      ],
      github: 'https://github.com/suma01111/Eco-Commerce',
      status: 'Hackathon project',
    },
    {
      name: 'Blood Bank Management System',
      tag: 'Database · Management',
      tech: 'JavaScript · MySQL · HTML · CSS',
      points: [
        'Developed a donor–recipient management system with MySQL integration to coordinate blood donation and request handling.',
        'Implemented validation and donor–recipient matching for faster responses during emergencies.',
      ],
      github: 'https://github.com/suma01111/BloodBank',
      status: 'Academic project',
    },
  ],
  positions: [
    'Core Member, Cultural Committee – IIIT Vadodara',
    'Secretary, MOD5 Dance Club – IIIT Vadodara',
  ],
}

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container header-content">
          <button
            className="logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            SUNITA CHOUDHARY
          </button>
          <nav>
            <ul className="nav-list">
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="#positions">
                  Responsibility
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-greeting">HELLO</div>
                <h1 className="hero-name">
                  I&apos;m <span>{data.name}</span>
                </h1>
                <p className="hero-role">{data.headline}</p>
                <p className="hero-summary">{data.objective}</p>
                <div className="hero-actions">
                  <a href="#contact" className="btn">
                    Hire Me
                  </a>
                  <a href="#projects" className="btn btn-outline">
                    View Projects
                  </a>
                </div>
                <div className="hero-social">
                  <div className="hero-social-label">Let&apos;s connect</div>
                  <div className="social-links">
                    <a
                      href={data.links.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="social-link"
                    >
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.25h4.52V24H.24V8.25zM8.48 8.25h4.33v2.14h.06c.6-1.13 2.08-2.32 4.28-2.32 4.58 0 5.42 3.02 5.42 6.94V24h-4.52v-7.7c0-1.84-.03-4.21-2.57-4.21-2.58 0-2.97 2.01-2.97 4.08V24H8.48V8.25z" />
                      </svg>
                    </a>
                    <a
                      href={data.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="social-link"
                    >
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.74 3.44 22.11 8.21 23.65C8.81 23.76 9.03 23.39 9.03 23.07C9.03 22.78 9.02 22.04 9.02 21.19C6 21.79 5.22 19.74 5.22 19.74C4.68 18.37 3.88 18 3.88 18C2.76 17.26 3.97 17.28 3.97 17.28C5.21 17.37 5.86 18.56 5.86 18.56C6.95 20.43 8.71 19.89 9.38 19.58C9.49 18.79 9.8 18.25 10.14 17.95C7.39 17.65 4.49 16.59 4.49 11.94C4.49 10.62 4.96 9.55 5.76 8.72C5.63 8.42 5.21 7.12 5.87 5.34C5.87 5.34 6.88 5.01 9.01 6.42C9.97 6.15 11.01 6.01 12.05 6.01C13.09 6.01 14.13 6.15 15.09 6.42C17.21 5.01 18.22 5.34 18.22 5.34C18.88 7.12 18.46 8.42 18.33 8.72C19.13 9.55 19.6 10.62 19.6 11.94C19.6 16.6 16.69 17.64 13.93 17.94C14.36 18.31 14.74 19.05 14.74 20.17C14.74 21.74 14.73 22.66 14.73 23.07C14.73 23.39 14.95 23.77 15.56 23.65C20.33 22.11 23.77 17.74 23.77 12.5C23.77 5.87 18.4 0.5 11.77 0.5H12Z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${data.email}`}
                      aria-label="Email"
                      className="social-link"
                    >
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M2 4.5C2 3.67 2.67 3 3.5 3H20.5C21.33 3 22 3.67 22 4.5V19.5C22 20.33 21.33 21 20.5 21H3.5C2.67 21 2 20.33 2 19.5V4.5ZM4 5V6.12L12 11.12L20 6.12V5H4ZM20 8.38L12.47 13.13C12.18 13.32 11.82 13.32 11.53 13.13L4 8.38V19H20V8.38Z" />
                      </svg>
                    </a>
                    <a
                      href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
                      aria-label="Phone"
                      className="social-link"
                    >
                      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M6.62 3.02C6.26 2.14 5.26 1.74 4.39 2.11L3.03 2.7C2.23 3.04 1.8 3.92 2.06 4.75C3.37 8.93 6.17 12.63 9.9 15.16C13.63 17.7 18.06 19 21.94 19C22.78 19 23.5 18.32 23.5 17.48V15.96C23.5 15.06 22.93 14.25 22.07 13.96L19.39 13.07C18.63 12.81 17.8 13.09 17.34 13.74L16.23 15.27C13.98 14.09 12.05 12.17 10.86 9.92L12.39 8.82C13.04 8.35 13.31 7.53 13.06 6.77L12.17 4.09C11.88 3.23 11.06 2.66 10.16 2.66H8.64C7.8 2.66 7.03 3.19 6.62 3.98V3.02Z" />
                      </svg>
                    </a>
                    <a
                      href={data.links.leetCode}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LeetCode"
                      className="social-link"
                    >
                      <span className="social-icon-text">{'</>'}</span>
                    </a>
                  </div>
                </div>
              </div>

              <aside className="hero-side">
                <div className="hero-profile">
                  <div className="hero-photo-wrap">
                    <img
                      src="/profilePic.png"
                      alt="Portrait of Sunita Choudhary"
                      className="hero-photo"
                    />
                  </div>
                  <div className="hero-card">
                    <p className="hero-meta">IIIT Vadodara · India</p>
                    <div className="hero-tags">
                      <span className="tag tag-strong">Full Stack · MERN</span>
                      <span className="tag">SQL &amp; Databases</span>
                      <span className="tag">React &amp; JavaScript</span>
                      <span className="tag">DSA · OOPS</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h3 className="section-title">Education</h3>
            <p className="section-subtitle">
              A strong academic foundation in Information Technology with focus on algorithms, databases, and modern
              web development.
            </p>
            <div className="education-timeline">
              {data.education.map((edu) => (
                <div key={edu.title} className="edu-item">
                  <div className="edu-year">{edu.period}</div>
                  <div className="edu-card">
                    <h4 className="edu-title">{edu.title}</h4>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-meta">{edu.meta}</p>
                    <p className="edu-note">{edu.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h3 className="section-title">Technical Skills</h3>
            <p className="section-subtitle">
              A balanced skill set across frontend, backend, databases, and core computer science fundamentals used to
              ship full-stack features end-to-end.
            </p>
            <div className="skills-grid">
              <div className="skill-card">
                <h4 className="skill-title">Core Languages</h4>
                <p className="skill-subtitle">Daily drivers for problem-solving and building features.</p>
                <div className="skill-chips">
                  {data.skills.languages.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="skill-card">
                <h4 className="skill-title">Frontend Stack</h4>
                <p className="skill-subtitle">Technologies I use to build modern, responsive UIs.</p>
                <div className="skill-chips">
                  {['React', 'JavaScript', 'HTML', 'CSS'].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="skill-card">
                <h4 className="skill-title">Backend &amp; Databases</h4>
                <p className="skill-subtitle">APIs, servers, and data layers behind my projects.</p>
                <div className="skill-chips">
                  {['Node.js', 'Express.js', 'MongoDB', 'MySQL'].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="skill-card">
                <h4 className="skill-title">CS &amp; Engineering Practices</h4>
                <p className="skill-subtitle">Foundations and workflows that keep projects maintainable.</p>
                <div className="skill-chips">
                  {data.skills.areas.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {['Git', 'GitHub', 'Operating Systems','Computer Networks','Database Management System(DBMS)','Software Engineering', 'Problem Solving'].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h3 className="section-title">Projects</h3>
            <p className="section-subtitle projects-intro">
              A few highlights of what I&apos;ve built recently — from full-stack systems to database-focused
              applications.
            </p>
            <div className="card-grid projects-grid">
              {data.projects.map((project) => (
                <article key={project.name} className="card project-card">
                  <div className="project-header">
                    <span className="project-pill">{project.tag}</span>
                    <h4>{project.name}</h4>
                  </div>
                  <p className="project-tech">{project.tech}</p>
                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <span>{project.status}</span>
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <svg
                        className="github-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.74 3.44 22.11 8.21 23.65C8.81 23.76 9.03 23.39 9.03 23.07C9.03 22.78 9.02 22.04 9.02 21.19C6 21.79 5.22 19.74 5.22 19.74C4.68 18.37 3.88 18 3.88 18C2.76 17.26 3.97 17.28 3.97 17.28C5.21 17.37 5.86 18.56 5.86 18.56C6.95 20.43 8.71 19.89 9.38 19.58C9.49 18.79 9.8 18.25 10.14 17.95C7.39 17.65 4.49 16.59 4.49 11.94C4.49 10.62 4.96 9.55 5.76 8.72C5.63 8.42 5.21 7.12 5.87 5.34C5.87 5.34 6.88 5.01 9.01 6.42C9.97 6.15 11.01 6.01 12.05 6.01C13.09 6.01 14.13 6.15 15.09 6.42C17.21 5.01 18.22 5.34 18.22 5.34C18.88 7.12 18.46 8.42 18.33 8.72C19.13 9.55 19.6 10.62 19.6 11.94C19.6 16.6 16.69 17.64 13.93 17.94C14.36 18.31 14.74 19.05 14.74 20.17C14.74 21.74 14.73 22.66 14.73 23.07C14.73 23.39 14.95 23.77 15.56 23.65C20.33 22.11 23.77 17.74 23.77 12.5C23.77 5.87 18.4 0.5 11.77 0.5H12Z" />
                      </svg>
                      View code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="container">
            <h3 className="section-title">Certifications</h3>
            <p className="section-subtitle">
              Programs and courses that strengthened my understanding of open-source collaboration, version control, and
              database design.
            </p>
            <div className="card-grid">
              {data.certificates.map((cert) => (
                <article key={cert.title} className="card certificate-card">
                  <h4>{cert.title}</h4>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-description">{cert.description}</p>
                  
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="positions" className="section">
          <div className="container">
            <h3 className="section-title">Positions of Responsibility</h3>
            <p className="section-subtitle">
              Leadership roles on campus that helped me grow as an organiser, communicator, and dependable teammate.
            </p>
            <div className="card-grid">
              <div className="card position-card">
                <h4>Core Member – Cultural Committee, IIIT Vadodara</h4>
                <p>
                  Helped plan and run institute-wide cultural fests and events, coordinating logistics, schedules, and
                  cross-team communication to keep everything on track.
                </p>
              </div>
              <div className="card position-card">
                <h4>Secretary – MOD5 Dance Club, IIIT Vadodara</h4>
                <p>
                  Led the dance club in organising performances and workshops, guiding the team from idea to final
                  execution while ensuring smooth collaboration and participation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h3 className="section-title">Contact</h3>
            <p className="section-subtitle">
              If you&apos;d like to collaborate, discuss an opportunity, or just say hi, feel free to reach out.
            </p>
            <div className="contact-grid">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('This is a static demo form. Wire it to a backend or email service when you deploy.')
                }}
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input id="name" className="form-input" type="text" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input id="email" className="form-input" type="email" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" className="form-textarea" required />
                </div>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>

              <aside className="contact-details">
                <ul className="contact-list">
                  <li className="contact-item">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </li>
                  <li className="contact-item">
                    <span className="contact-label">Phone</span>
                    <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}>{data.phone}</a>
                  </li>
                  <li className="contact-item">
                    <span className="contact-label">LinkedIn</span>
                    <a href={data.links.linkedIn} target="_blank" rel="noreferrer">
                      {data.links.linkedIn}
                    </a>
                  </li>
                  <li className="contact-item">
                    <span className="contact-label">GitHub</span>
                    <a href={data.links.github} target="_blank" rel="noreferrer">
                      {data.links.github}
                    </a>
                  </li>
                  <li className="contact-item">
                    <span className="contact-label">LeetCode</span>
                    <a href={data.links.leetCode} target="_blank" rel="noreferrer">
                      {data.links.leetCode}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
      </footer>
    </div>
  )
}

export default App
