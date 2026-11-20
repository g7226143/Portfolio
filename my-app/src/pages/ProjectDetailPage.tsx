import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { PROJECTS } from '../data/portfolioData';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = PROJECTS.find((p) => p.slug === slug);
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — GOD GAMER`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) {
    return (
      <main className="detail-not-found">
        <div className="container">
          <h1 className="font-heading">Project not found</h1>
          <p>This project doesn't exist yet.</p>
          <Link to="/projects" className="detail-back-btn">← Back to Projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      {/* Hero */}
      <section className="detail-hero">
        <div className="container">
          <Link to="/projects" className="detail-back font-mono">
            <ArrowLeft size={16} /> All Projects
          </Link>

          <div className="detail-hero__meta">
            <span className="detail-cat font-mono">{project.category}</span>
            <span className="detail-year font-mono">{project.year}</span>
            <span className={`detail-status font-mono detail-status--${project.status}`}>
              {project.status === 'in-progress' ? '● In Progress' : '● Completed'}
            </span>
          </div>

          <h1 className="detail-title font-heading">
            {project.title}<span className="detail-title__dot">.</span>
          </h1>
          <p className="detail-subtitle">{project.subtitle}</p>

          {/* Action links */}
          <div className="detail-actions">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="detail-btn-primary">
                Live Demo <ExternalLink size={15} />
              </a>
            ) : (
              <span className="detail-btn-disabled">Live Demo — Coming Soon</span>
            )}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="detail-btn-secondary">
                GitHub <GithubIcon size={15} />
              </a>
            ) : (
              <span className="detail-btn-disabled detail-btn-disabled--ghost">GitHub — TBA</span>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="detail-cover">
        <div className="container">
          <div className="detail-cover__wrap">
            <img
              src={project.coverImage}
              alt={`${project.title} cover`}
              className="detail-cover__img"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content container">
        <div className="detail-grid">
          {/* Main column */}
          <div className="detail-main">
            <section className="detail-section">
              <h2 className="detail-section__title font-heading">Overview</h2>
              <p className="detail-section__text">{project.overview}</p>
            </section>

            <section className="detail-section">
              <h2 className="detail-section__title font-heading">The Problem</h2>
              <p className="detail-section__text">{project.problem}</p>
            </section>

            <section className="detail-section">
              <h2 className="detail-section__title font-heading">Design & Approach</h2>
              <p className="detail-section__text">{project.approach}</p>
            </section>

            <section className="detail-section">
              <h2 className="detail-section__title font-heading">Key Features</h2>
              <ul className="detail-features">
                {project.features.map((f, i) => (
                  <li key={i} className="detail-feature">
                    <span className="detail-feature__dot" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Screenshot gallery */}
            {project.images.length > 0 && (
              <section className="detail-section">
                <h2 className="detail-section__title font-heading">Screenshots</h2>
                <div className="detail-gallery">
                  {project.images.map((img, i) => (
                    <div key={i} className="detail-gallery__item">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="detail-gallery__img"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="detail-sidebar__card">
              <h3 className="detail-sidebar__label font-mono">Technologies</h3>
              <div className="detail-tech-tags">
                {project.technologies.map((t) => (
                  <span key={t} className="detail-tag font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="detail-sidebar__card">
              <h3 className="detail-sidebar__label font-mono">Project Info</h3>
              <div className="detail-info-list">
                <div className="detail-info-item">
                  <span className="detail-info-key font-mono">Type</span>
                  <span className="detail-info-val">{project.category}</span>
                </div>
                <div className="detail-info-item">
                  <span className="detail-info-key font-mono">Year</span>
                  <span className="detail-info-val">{project.year}</span>
                </div>
                <div className="detail-info-item">
                  <span className="detail-info-key font-mono">Status</span>
                  <span className="detail-info-val" style={{ color: project.status === 'completed' ? 'var(--lime)' : 'var(--muted)' }}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="detail-sidebar__cta">
                View Live Site <ArrowUpRight size={16} />
              </a>
            )}
          </aside>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <nav className="detail-nav" aria-label="Project navigation">
        <div className="container">
          <div className="detail-nav__inner">
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="detail-nav__btn detail-nav__btn--prev">
                <ArrowLeft size={18} />
                <div>
                  <span className="detail-nav__label font-mono">Previous</span>
                  <span className="detail-nav__title font-heading">{prevProject.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link to={`/projects/${nextProject.slug}`} className="detail-nav__btn detail-nav__btn--next">
                <div>
                  <span className="detail-nav__label font-mono">Next Project</span>
                  <span className="detail-nav__title font-heading">{nextProject.title}</span>
                </div>
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}

