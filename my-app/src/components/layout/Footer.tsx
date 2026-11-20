import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { CONTACT } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span>GG</span><span className="footer__slash">/</span>
            </Link>
            <p className="footer__tagline font-mono">Design. Develop. Create.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/projects" className="footer__link">Projects</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </nav>

          <div className="footer__socials">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="footer__social footer__social--email" aria-label="Email">
              <ArrowUpRight size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy font-mono">
            © {year} GOD GAMER — All rights reserved.
          </p>
          <p className="footer__location font-mono">
            Kanpur, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}

