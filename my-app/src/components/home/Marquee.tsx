import './Marquee.css';

const ITEMS = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript',
  'Node.js', 'Flask', 'Python', 'MongoDB', 'Three.js', 'GSAP', 'Figma',
];

const REPEAT = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <section className="marquee-section" aria-label="Technologies" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-inner">
          {REPEAT.map((item, i) => (
            <span key={i} className="marquee-item font-mono">
              {item}
              <span className="marquee-dot" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

