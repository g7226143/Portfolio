import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PROJECTS } from '../../data/portfolioData';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-triggered reveal using IntersectionObserver
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.fp-card');
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('fp-card--visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="fp-section" ref={sectionRef}>
      <div className="container">
        <div className="fp-header">
          <div className="fp-header__left">
            <span className="fp-label font-mono">/ SELECTED WORK</span>
            <h2 className="fp-heading font-heading">
              Things I've
              <span className="fp-heading-lime"> Built.</span>
            </h2>
          </div>
          <p className="fp-desc">
            A collection of projects I've designed, developed and brought to life — combining creative vision with engineering depth.
          </p>
        </div>

        <div className="fp-grid">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className={`fp-card ${i === 0 ? 'fp-card--featured' : ''}`}
            >
              {/* Cover image */}
              <Link to={`/projects/${project.slug}`} className="fp-card__img-wrap" tabIndex={-1}>
                <img
                  src={project.coverImage}
                  alt={`${project.title} preview`}
                  className="fp-card__img"
                  loading="lazy"
                />
                <div className="fp-card__img-overlay" />
                <div className="fp-card__img-num font-mono">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </Link>

              {/* Card body */}
              <div className="fp-card__body">
                <div className="fp-card__meta">
                  <span className="fp-card__cat font-mono">{project.category}</span>
                  <span className="fp-card__year font-mono">{project.year}</span>
                </div>
                <h3 className="fp-card__title font-heading">
                  <Link to={`/projects/${project.slug}`} className="fp-card__title-link">
                    {project.title}
                  </Link>
                </h3>
                <p className="fp-card__desc">{project.description}</p>

                {/* Tech tags */}
                <div className="fp-card__tags">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="fp-tag font-mono">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="fp-card__actions">
                  <Link to={`/projects/${project.slug}`} className="fp-card__cta">
                    View Case Study
                    <ArrowRight size={15} className="fp-card__cta-arrow" />
                  </Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="fp-card__icon-btn" aria-label="Live demo">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="fp-card__icon-btn" aria-label="GitHub">
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="fp-footer">
          <Link to="/projects" className="fp-all-btn">
            View All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

