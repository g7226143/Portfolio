import { useRef, useEffect } from 'react';
import './Process.css';

const STEPS = [
  { num: '01', title: 'Discover', desc: 'Understand the client\'s business goals, target audience, technical requirements and project scope.' },
  { num: '02', title: 'Design', desc: 'Establish the layout, visual identity, component structure and responsive wireframes before writing a single line of code.' },
  { num: '03', title: 'Develop', desc: 'Build the frontend interface, backend architecture, APIs and integrations with clean, maintainable code.' },
  { num: '04', title: 'Launch', desc: 'Thorough testing, performance optimization, deployment to production and final handoff with documentation.' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const steps = sectionRef.current?.querySelectorAll('.proc-step');
    if (!steps) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('proc-step--visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    steps.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="proc-section" ref={sectionRef}>
      <div className="container">
        <div className="proc-header">
          <span className="proc-label font-mono">/ HOW I WORK</span>
          <h2 className="proc-heading font-heading">
            Development<br />
            Process<span className="proc-heading-lime">.</span>
          </h2>
        </div>

        <div className="proc-grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="proc-step"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="proc-step__connector" aria-hidden="true">
                <div className="proc-step__line" />
                <div className="proc-step__dot" />
              </div>
              <div className="proc-step__body">
                <span className="proc-step__num font-mono">{step.num}</span>
                <h3 className="proc-step__title font-heading">{step.title}</h3>
                <p className="proc-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

