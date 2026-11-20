import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import './About.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.about-reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('about-reveal--visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Image placeholder */}
          <div className="about-visual about-reveal">
            <div className="about-portrait">
              {/* Replace src with your actual portrait image */}
              <div className="about-portrait__placeholder">
                <Code2 size={48} color="var(--lime)" />
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.75rem' }}>
                  Add your portrait here
                </span>
              </div>
              <div className="about-portrait__border" />
            </div>
            {/* Floating stat cards */}
            <div className="about-stat about-stat--1">
              <span className="about-stat__num font-heading">∞</span>
              <span className="about-stat__label font-mono">Projects</span>
            </div>
            <div className="about-stat about-stat--2">
              <span className="about-stat__num font-heading">20+</span>
              <span className="about-stat__label font-mono">Technologies</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <div className="about-reveal">
              <span className="about-label font-mono">/ ABOUT ME</span>
              <h2 className="about-heading font-heading">
                The Developer<br />
                Behind the <span className="about-heading-lime">Code.</span>
              </h2>
            </div>

            <p className="about-text about-reveal">
              I'm an independent full-stack developer based in Kanpur, India. I combine a passion for creative design with engineering depth to build digital products that are both visually compelling and technically robust.
            </p>

            <p className="about-text about-reveal">
              {/* Keep this editable — replace with your genuine background */}
              My work spans across the entire development stack — from crafting responsive, animated user interfaces to architecting backend systems and APIs. I approach every project as a craft, paying close attention to performance, accessibility and the small details that elevate an ordinary website into a memorable experience.
            </p>

            <div className="about-philosophy about-reveal">
              <div className="about-philosophy__icon">
                <Code2 size={20} color="var(--lime)" />
              </div>
              <p className="about-philosophy__text font-mono">
                "Good code is invisible. Great design is unforgettable. The best work is both."
              </p>
            </div>

            <div className="about-tags about-reveal">
              {['Creative Problem Solver', 'Full-Stack Thinker', 'Design Enthusiast', 'Kanpur, India'].map((t) => (
                <span key={t} className="about-tag font-mono">{t}</span>
              ))}
            </div>

            <Link to="/contact" className="about-cta about-reveal">
              Let's Work Together
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

