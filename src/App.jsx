import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  Eye,
  GitBranch,
  GraduationCap,
  Languages as LanguagesIcon,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
  X,
} from "lucide-react";
import {
  contact,
  education,
  experience,
  languages,
  navItems,
  projects,
  publication,
  skillGroups,
} from "./data.js";

const skillIcons = {
  code: Code2,
  brain: BrainCircuit,
  network: Network,
  vision: Eye,
  chart: BarChart3,
  compute: Cpu,
};

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionHeading({ eyebrow, title, intro, number }) {
  return (
    <div className="section-heading">
      <div className="section-label">
        {number && <span className="section-number">{number}</span>}
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function Header({ activeSection, menuOpen, setMenuOpen }) {
  const navigate = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="topbar-wrap">
      <div className="topbar">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="Vishwa Balasubramanian, home">
          <span>V</span>B
        </a>

        <nav id="primary-navigation" className={menuOpen ? "nav-menu is-open" : "nav-menu"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? "active" : ""}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="nav-contact" href={`mailto:${contact.email}`} onClick={() => setMenuOpen(false)}>
            Let’s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", ...navItems.map((item) => item.id)];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-24% 0px -62%", threshold: [0, 0.1, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
          <div className="hero-ambient hero-ambient-two" aria-hidden="true" />

          <div className="hero-layout page-width">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                <span>Open to AI & data opportunities</span>
                <span className="availability-separator">·</span>
                <span>Germany / relocation</span>
              </div>

              <p className="hero-kicker">Hello, I’m</p>
              <h1>Vishwa<span>Balasubramanian.</span></h1>

              <div className="hero-disciplines" aria-label="Specialisms">
                <span>Machine learning</span>
                <span>Computer vision</span>
                <span>Time series</span>
              </div>

              <p className="hero-profile">
                Master’s student in Data Science at FAU Erlangen–Nürnberg with 1.5+ years of industry and research
                experience applying machine learning, deep learning, and data analytics to real-world problems. Skilled in
                Python, SQL, and PyTorch, with hands-on experience in predictive modelling, neural networks, computer
                vision, and time-series analysis. Also interested in building practical AI solutions using LLMs, RAG,
                agentic AI, and multi-agent systems.
              </p>

              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={() => scrollToSection("projects")}>
                  Explore projects
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <a className="button button-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>

              <a className="hero-email" href={`mailto:${contact.email}`}>
                <Mail size={16} aria-hidden="true" />
                {contact.email}
              </a>
            </div>

            <div className="hero-showcase hero-portrait" aria-label="Portrait of Vishwa Balasubramanian">
              <div className="portrait-frame">
                <div className="portrait-corner portrait-corner-top" aria-hidden="true" />
                <div className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
                <div className="portrait-image-wrap">
                  <img
                    src={`${import.meta.env.BASE_URL}vishwa-ai-portrait.jpg`}
                    alt="Vishwa Balasubramanian in a blue shirt against a navy data-inspired background"
                  />
                </div>
                <div className="portrait-topline">
                  <span>Portrait / 01</span>
                  <span className="portrait-live"><i />Available</span>
                </div>
                <div className="portrait-caption">
                  <div>
                    <span>Data Science · Applied AI</span>
                    <strong>Research into reliable systems</strong>
                  </div>
                  <span className="portrait-mark">VB</span>
                </div>
              </div>
              <div className="portrait-note">
                <span>Based near Erlangen</span>
                <span>Open to relocation</span>
              </div>
            </div>
          </div>

          <button className="scroll-cue" type="button" onClick={() => scrollToSection("projects")}>
            Selected projects
            <ArrowDown size={16} aria-hidden="true" />
          </button>
        </section>

        <section className="section section-light" id="projects">
          <div className="page-width">
            <SectionHeading
              eyebrow="Selected projects"
              number="01"
              title="Building reliable machine-learning systems for healthcare, forecasting, and scientific research."
            />

            <div className="project-grid" id="project-showcase">
              {projects.map((project) => {
                const reportSubject = encodeURIComponent(`Request for project report: ${project.title}`);
                const actionHref = project.action === "gitlab" ? contact.gitlab : `mailto:${contact.email}?subject=${reportSubject}`;
                const actionLabel = project.action === "gitlab" ? "Explore GitLab" : "Request the report";
                const projectLinks = project.links ?? [
                  { label: actionLabel, href: actionHref, external: project.action === "gitlab" },
                ];

                return (
                  <article className={`project-card project-${project.accent}`} key={project.number}>
                    <div className="project-topline">
                      <span className="project-number">{project.number}</span>
                      <span>{project.area}</span>
                      <time>{project.period}</time>
                    </div>
                    <div className="project-visual">
                      <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <ul>
                        {project.methods.map((method) => <li key={method}>{method}</li>)}
                      </ul>
                    </div>
                    <div className="project-outcome">
                      <span>{project.resultLabel}</span>
                      <strong>{project.result}</strong>
                    </div>
                    <div className="project-footer">
                      <div className="tag-row">
                        {project.tech.map((item) => <Tag key={item}>{item}</Tag>)}
                      </div>
                      <div className="project-links">
                        {projectLinks.map((link) => (
                          <a
                            className="project-link"
                            href={link.href}
                            key={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                          >
                            {link.label}<ArrowUpRight size={17} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="page-width">
            <SectionHeading
              eyebrow="Experience"
              number="02"
              title="From research question to deployed system."
              intro="Industry and academic work spanning NLP, medical information, sensor modelling, computer vision, and applied ML research."
            />
            <div className="experience-list" id="experience-list">
              {experience.map((item, index) => (
                <article className="experience-row" key={`${item.company}-${item.period}`}>
                  <div className="experience-index">0{index + 1}</div>
                  <div className="experience-when">
                    <time>{item.period}</time>
                    <span><MapPin size={14} aria-hidden="true" />{item.location}</span>
                  </div>
                  <div className="experience-main">
                    <div className="experience-title">
                      <div><h3>{item.role}</h3><p>{item.company}</p></div>
                    </div>
                    <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    {item.certificate && (
                      <a className="experience-certificate" href={item.certificate} target="_blank" rel="noreferrer">
                        View work certificate <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                    <div className="tag-row tag-row-dark">
                      {item.tech.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="skills">
          <div className="page-width">
            <SectionHeading
              eyebrow="Capabilities"
              number="03"
              title="A technical toolkit built around real problems."
              intro="Strong foundations for experimentation, careful evaluation, and production-minded AI development."
            />
            <div className="skills-grid" id="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[group.icon];
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-head">
                      <span className="skill-icon"><Icon size={21} aria-hidden="true" /></span>
                      <span className="skill-index">0{index + 1}</span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.lead}</p>
                    <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <div className="emerging-ai">
              <div className="emerging-icon"><Sparkles size={22} aria-hidden="true" /></div>
              <div>
                <span>Exploring next</span>
                <h3>LLMs · Retrieval-Augmented Generation · Agentic AI · Multi-Agent Systems</h3>
              </div>
              <p>Extending a rigorous ML foundation into useful, reliable generative AI products.</p>
            </div>
          </div>
        </section>

        <section className="section background-section" id="background">
          <div className="page-width">
            <SectionHeading
              eyebrow="Background"
              number="04"
              title="Grounded in computer science and applied data research."
            />
            <div className="background-grid" id="background-grid">
              <div className="education-panel">
                <div className="subsection-title"><GraduationCap size={20} aria-hidden="true" /><h3>Education</h3></div>
                {education.map((item) => (
                  <article className="education-row" key={item.degree}>
                    <time>{item.period}</time>
                    <div>
                      <h4>{item.degree}</h4>
                      <p>{item.school}</p>
                      <span>{item.details}</span>
                      <small>{item.location} · {item.grade}</small>
                    </div>
                  </article>
                ))}
              </div>
              <div className="language-panel">
                <div className="subsection-title"><LanguagesIcon size={20} aria-hidden="true" /><h3>Languages</h3></div>
                {languages.map((language) => (
                  <div className="language-row" key={language.name}>
                    <div><strong>{language.name}</strong><span>{language.level}</span></div>
                    <div className="language-track" aria-hidden="true"><span style={{ width: language.fill }} /></div>
                  </div>
                ))}
              </div>
            </div>
            <article className="publication-card">
              <div className="publication-icon"><BookOpen size={24} aria-hidden="true" /></div>
              <div className="publication-copy">
                <div className="publication-meta"><span>Publication</span><time>{publication.date}</time><span>{publication.journal}</span></div>
                <h3>{publication.title}</h3>
                <p>{publication.description}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="page-width contact-layout">
            <div>
              <span className="contact-kicker">Have a challenging AI problem?</span>
              <h2>Let’s turn it into something useful.</h2>
              <p>I’m open to working-student, internship, and early-career opportunities across data science, machine learning, and applied AI.</p>
            </div>
            <div className="contact-card">
              <div className="contact-status"><span className="availability-dot" />Available for opportunities</div>
              <a className="contact-email" href={`mailto:${contact.email}`}>
                <span>Email me</span><strong>{contact.email}</strong><ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <div className="contact-location"><MapPin size={17} aria-hidden="true" />{contact.location} · Open to relocation</div>
              <div className="contact-socials">
                <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" />LinkedIn</a>
                <a href={contact.gitlab} target="_blank" rel="noreferrer"><GitBranch size={18} aria-hidden="true" />GitLab</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-width footer-layout">
          <a className="footer-brand" href="#top" aria-label="Back to top">VB<span>© 2026</span></a>
          <p>Data science · Applied AI · Research engineering</p>
          <button type="button" onClick={() => scrollToSection("top")}>Back to top<ArrowUpRight size={16} aria-hidden="true" /></button>
        </div>
      </footer>
    </div>
  );
}

export default App;
