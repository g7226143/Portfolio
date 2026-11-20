import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import './ProjectsPage.css';

type Category = 'All' | 'Website' | 'Full-Stack' | 'Web App' | 'E-commerce';
const CATEGORIES: Category[] = ['All', 'Website', 'Full-Stack', 'Web App', 'E-commerce'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Projects — GOD GAMER';
  }, []);

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="projects-page">
      {/* Page Header */}
      <section className="projects-header">
        <div className="container">
          <span className="projects-header__label font-mono">/ ALL PROJECTS</span>
          <h1 className="projects-header__heading font-heading">
            Selected<br />Work<span className="projects-header__dot">.</span>
          </h1>
          <p className="projects-header__desc">
            Websites, web applications and digital experiences I've designed and built.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="projects-filters">
        <div className="container">
          <div className="projects-filters__inner">
            <span className="projects-filters__label font-mono">
              <Filter size={14} /> Filter
            </span>
            <div className="projects-filters__tabs" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`projects-filter-btn font-mono ${activeCategory === cat ? 'projects-filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="projects-filters__count font-mono">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid" ref={gridRef}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="projects-empty">
              <p className="font-mono" style={{ color: 'var(--muted)' }}>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj-card">
      {/* Image */}
      <Link to={`/projects/${project.slug}`} className="proj-card__img-wrap" tabIndex={-1}>
        <img
          src={project.coverImage}
          alt={`${project.title} screenshot`}
          className="proj-card__img"
          loading="lazy"
        />
        <div className="proj-card__overlay">
          <span className="proj-card__overlay-text font-heading">View Case Study</span>
        </div>
      </Link>

      {/* Body */}
      <div className="proj-card__body">
        <div className="proj-card__meta">
          <span className="proj-card__cat font-mono">{project.category}</span>
          <span className="proj-card__status font-mono proj-card__status--${project.status}">
            {project.status === 'in-progress' ? '● In Progress' : '● Completed'}
          </span>
        </div>
        <h2 className="proj-card__title font-heading">
          <Link to={`/projects/${project.slug}`} className="proj-card__title-link">{project.title}</Link>
        </h2>
        <p className="proj-card__desc">{project.description}</p>
        <div className="proj-card__tags">
          {project.technologies.map((t) => (
            <span key={t} className="proj-tag font-mono">{t}</span>
          ))}
        </div>
        <div className="proj-card__actions">
          <Link to={`/projects/${project.slug}`} className="proj-card__cta">
            Case Study <ArrowRight size={14} />
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-card__icon-btn">
              <ExternalLink size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-card__icon-btn">
              <GithubIcon size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

