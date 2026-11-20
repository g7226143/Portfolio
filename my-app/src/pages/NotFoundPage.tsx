import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Page Not Found · GOD GAMER';
  }, []);

  return (
    <main className="notfound-page">
      <div className="container notfound-inner">
        <div className="notfound-glitch font-heading" data-text="404">
          404
        </div>
        <div className="notfound-badge font-mono">
          <Compass size={14} color="var(--lime)" />
          <span>DESTINATION OUT OF BOUNDS</span>
        </div>
        <h1 className="notfound-title font-heading">
          Lost in Digital Space<span className="notfound-dot">.</span>
        </h1>
        <p className="notfound-desc">
          The requested coordinate does not exist or has been restructured in the system matrix.
        </p>
        <Link to="/" className="notfound-btn">
          <ArrowLeft size={16} />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </main>
  );
}
