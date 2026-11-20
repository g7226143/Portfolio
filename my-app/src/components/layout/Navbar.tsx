import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleHashLink = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.slice(2);
      if (location.pathname !== '/') {
        navigate(`/${href.slice(1)}`);
        return;
      }
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return false;
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      >
        <div className="navbar__inner container">
          {/* Brand */}
          <Link to="/" className="navbar__brand" aria-label="GOD GAMER Home">
            <span className="navbar__brand-gg">GG</span>
            <span className="navbar__brand-slash">/</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  className={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
                  onClick={() => handleHashLink(link.href)}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <Link to="/contact" className="navbar__cta">
              Let's Talk
              <ArrowUpRight size={14} />
            </Link>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                className="mobile-menu__link"
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                onClick={() => handleHashLink(link.href)}
              >
                <span className="mobile-menu__num font-mono">0{i + 1}</span>
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="mobile-menu__link"
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu__num font-mono">0{i + 1}</span>
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <Link to="/contact" className="mobile-menu__cta" onClick={() => setMenuOpen(false)}>
            Let's Talk <ArrowUpRight size={18} />
          </Link>
          <p className="mobile-menu__loc font-mono">Kanpur, India</p>
        </div>
      </div>
    </>
  );
}

