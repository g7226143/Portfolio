import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-content">
            <span className="cta-label font-mono">/ AVAILABLE FOR WORK</span>
            <h2 className="cta-heading font-heading">
              Have an Idea?<br />
              Let's Build Something <span className="cta-heading-lime">Extraordinary.</span>
            </h2>
            <p className="cta-desc">
              Whether you need a modern website, a full-stack application or a creative digital experience — I'm here to make it happen. Let's talk.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="cta-btn-primary">
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/projects" className="cta-btn-secondary">
              See My Work
            </Link>
          </div>
        </div>

        {/* Decorative background text */}
        <div className="cta-bg-text font-heading" aria-hidden="true">LET'S TALK</div>
      </div>
    </section>
  );
}

