import { useEffect, useRef, useState } from 'react';
import './IntroLoader.css';

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = useState(0);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => {
    // Phase 0 → show logo (immediate)
    // Phase 1 → animate in (300ms)
    // Phase 2 → begin exit (1200ms)
    // Phase 3 → unmount (1800ms)
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => { setPhase(3); onComplete(); }, 2200);
    timeoutRefs.current = [t1, t2, t3];
    return () => timeoutRefs.current.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 3) return null;

  return (
    <div className={`intro-loader ${phase >= 2 ? 'intro-loader--exit' : ''}`}>
      <div className={`intro-loader__content ${phase >= 1 ? 'intro-loader__content--visible' : ''}`}>
        <div className="intro-loader__brand font-heading">
          <span className="intro-loader__gg">GG</span>
          <span className="intro-loader__slash font-mono">/</span>
        </div>
        <div className="intro-loader__tag font-mono">
          Full‑Stack Developer · Kanpur, India
        </div>
        <div className="intro-loader__bar">
          <div className="intro-loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}

