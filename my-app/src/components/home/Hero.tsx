import { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';
import './Hero.css';

// Lazy-load 3D scene only on capable devices
const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Staggered mount animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef} aria-label="Hero section">
      {/* Atmospheric background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-glow hero__bg-glow--1" />
        <div className="hero__bg-glow hero__bg-glow--2" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__inner container">
        {/* Left column */}
        <div className="hero__content">
          {/* Badge */}
          <div className={`hero__badge font-mono ${mounted ? 'hero__badge--visible' : ''}`}>
            <span className="hero__badge-dot" aria-hidden="true" />
            <MapPin size={12} />
            <span>Available for new projects · Kanpur, India</span>
          </div>

          {/* Main Headline */}
          <h1 className={`hero__headline font-heading ${mounted ? 'hero__headline--visible' : ''}`}>
            <span className="hero__hl-line">BUILDING</span>
            <span className="hero__hl-line hero__hl-line--2">DIGITAL</span>
            <span className="hero__hl-line hero__hl-line--3">
              EXPERIENCES<span className="hero__hl-lime">.</span>
            </span>
          </h1>

          {/* Subline */}
          <p className={`hero__subline ${mounted ? 'hero__subline--visible' : ''}`}>
            I design and develop modern websites and powerful web applications,
            combining creativity with technology. Based in Kanpur — available worldwide.
          </p>

          {/* CTAs */}
          <div className={`hero__ctas ${mounted ? 'hero__ctas--visible' : ''}`}>
            <button className="hero__btn-primary" onClick={scrollToWork}>
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
            <Link to="/contact" className="hero__btn-secondary">
              Let's Talk
            </Link>
          </div>

          {/* Developer meta */}
          <div className={`hero__meta font-mono ${mounted ? 'hero__meta--visible' : ''}`}>
            <span className="hero__meta-item">React · Node.js · TypeScript</span>
            <span className="hero__meta-sep" aria-hidden="true">·</span>
            <span className="hero__meta-item">Full-Stack Developer</span>
          </div>
        </div>

        {/* Right column — 3D Object */}
        <div
          className={`hero__visual ${mounted ? 'hero__visual--visible' : ''}`}
          style={{
            transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          aria-hidden="true"
        >
          <Suspense fallback={<HeroFallback />}>
            <HeroScene mouseX={mouse.x} mouseY={mouse.y} />
          </Suspense>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={`hero__scroll ${mounted ? 'hero__scroll--visible' : ''}`}
        onClick={scrollToWork}
        aria-label="Scroll to projects"
      >
        <span className="hero__scroll-label font-mono">scroll</span>
        <div className="hero__scroll-icon">
          <ArrowDown size={16} />
        </div>
      </button>
    </section>
  );
}

function HeroFallback() {
  return (
    <div className="hero-fallback" aria-hidden="true">
      <div className="hero-fallback__ring hero-fallback__ring--1" />
      <div className="hero-fallback__ring hero-fallback__ring--2" />
      <div className="hero-fallback__ring hero-fallback__ring--3" />
      <div className="hero-fallback__core" />
    </div>
  );
}

