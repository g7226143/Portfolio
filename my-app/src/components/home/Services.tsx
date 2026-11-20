import { useRef, useEffect } from 'react';
import { SERVICES } from '../../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import './Services.css';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.svc-item');
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('svc-item--visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="svc-section" ref={sectionRef}>
      <div className="container">
        <div className="svc-header">
          <div>
            <span className="svc-label font-mono">/ WHAT I DO</span>
            <h2 className="svc-heading font-heading">
              Services<span className="svc-heading-lime">.</span>
            </h2>
          </div>
          <p className="svc-desc">
            End-to-end development services for businesses, startups and individuals who care about quality.
          </p>
        </div>

        <div className="svc-list">
          {SERVICES.map((svc, i) => (
            <div key={svc.number} className="svc-item" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="svc-item__num font-mono">{svc.number}</span>
              <div className="svc-item__content">
                <div className="svc-item__top">
                  <h3 className="svc-item__title font-heading">{svc.title}</h3>
                  <div className="svc-item__arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <p className="svc-item__desc">{svc.description}</p>
                <div className="svc-item__tags">
                  {svc.tags.map((t) => (
                    <span key={t} className="svc-tag font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

