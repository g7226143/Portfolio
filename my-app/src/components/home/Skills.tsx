import { useRef, useEffect } from 'react';
import { SKILLS } from '../../data/portfolioData';
import './Skills.css';

// Deterministic static particle layout
const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  left: `${((i * 17 + 7) % 95) + 2}%`,
  top: `${((i * 29 + 13) % 92) + 4}%`,
  animationDelay: `${(i * 0.35) % 5}s`,
  animationDuration: `${3.5 + ((i * 0.4) % 3)}s`,
  width: `${1.5 + ((i % 3) * 0.75)}px`,
  height: `${1.5 + ((i % 3) * 0.75)}px`,
}));

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('skill-card--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Animated background particles */}
      <div className="skills-bg" aria-hidden="true">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="skills-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              width: p.width,
              height: p.height,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div className="skills-header">
          <span className="skills-label font-mono">/ EXPERTISE</span>
          <h2 className="skills-heading font-heading">
            Skills<span className="skills-heading-lime">.</span>
          </h2>
          <p className="skills-desc">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills grid — 4 columns on desktop */}
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.id}
              className="skill-card"
              style={{ transitionDelay: `${i * 40}ms` }}
              title={skill.category}
            >
              {/* Starred indicator */}
              {skill.starred && (
                <span className="skill-card__star font-mono" aria-label="Starred skill">★</span>
              )}

              {/* Icon */}
              <div
                className="skill-card__icon"
                style={{ color: skill.color }}
              >
                <span className="skill-card__icon-text">{skill.icon}</span>
              </div>

              {/* Name */}
              <span className="skill-card__name font-heading">{skill.name}</span>

              {/* Category tag */}
              <span className="skill-card__cat font-mono">{skill.category}</span>

              {/* Hover glow overlay */}
              <div className="skill-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

