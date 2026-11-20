import { useState, useEffect } from 'react';
import { MessageCircle, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { CONTACT } from '../data/portfolioData';
import './ContactPage.css';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const PROJECT_TYPES = [
  'Website Development',
  'Full-Stack Application',
  'E-commerce Site',
  'Website Maintenance',
  'Other / General Enquiry',
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    document.title = 'Contact — GOD GAMER';
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Please describe your project in at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // ⚠️ Demo only — no email API connected yet.
    // To connect: integrate EmailJS, Resend, or a custom backend endpoint here.
    setTimeout(() => setStatus('success'), 1200);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', projectType: PROJECT_TYPES[0], message: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <main className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <span className="contact-label font-mono">/ GET IN TOUCH</span>
          <h1 className="contact-heading font-heading">
            Let's Build Something<br />
            <span className="contact-heading-lime">Extraordinary.</span>
          </h1>
          <p className="contact-desc">
            Have a project in mind? I'd love to hear about it. Fill in the form or reach out directly — I typically respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-form-col">
            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <CheckCircle size={40} color="var(--lime)" />
                </div>
                <h2 className="contact-success__title font-heading">Message received!</h2>
                <p className="contact-success__text">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <div className="contact-demo-notice">
                  <AlertCircle size={15} color="var(--muted)" />
                  <p>
                    <strong>Demo notice:</strong> This form is not yet connected to an email service. To wire up real sending, integrate EmailJS, Resend or a backend endpoint. Contact me directly at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> in the meantime.
                  </p>
                </div>
                <button onClick={handleReset} className="contact-reset-btn font-heading">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                {/* Name */}
                <div className="form-field">
                  <label htmlFor="cf-name" className="form-label font-mono">Your Name *</label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }); }}
                    placeholder="e.g. Arjit Kumar"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'cf-name-err' : undefined}
                  />
                  {errors.name && <span id="cf-name-err" className="form-error font-mono">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-field">
                  <label htmlFor="cf-email" className="form-label font-mono">Email Address *</label>
                  <input
                    id="cf-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'cf-email-err' : undefined}
                  />
                  {errors.email && <span id="cf-email-err" className="form-error font-mono">{errors.email}</span>}
                </div>

                {/* Project type */}
                <div className="form-field">
                  <label htmlFor="cf-type" className="form-label font-mono">Project Type</label>
                  <select
                    id="cf-type"
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="form-input form-select"
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="cf-msg" className="form-label font-mono">Your Message *</label>
                  <textarea
                    id="cf-msg"
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: undefined }); }}
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={6}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'cf-msg-err' : undefined}
                  />
                  {errors.message && <span id="cf-msg-err" className="form-error font-mono">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="form-submit"
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="form-disclaimer font-mono">
                  ⚠ Demo build — form is not yet connected to an email service. See project notes for integration steps.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact info */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="contact-info-title font-heading">Other Ways to Reach Me</h3>

              <a href={`mailto:${CONTACT.email}`} className="contact-method">
                <div className="contact-method__icon"><Mail size={20} /></div>
                <div>
                  <span className="contact-method__label font-mono">Email</span>
                  <span className="contact-method__val">{CONTACT.email}</span>
                </div>
              </a>

              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon"><MessageCircle size={20} /></div>
                <div>
                  <span className="contact-method__label font-mono">WhatsApp</span>
                  <span className="contact-method__val">Send a message</span>
                </div>
              </a>

              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon"><GithubIcon size={20} /></div>
                <div>
                  <span className="contact-method__label font-mono">GitHub</span>
                  <span className="contact-method__val">View my repositories</span>
                </div>
              </a>

              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon"><LinkedinIcon size={20} /></div>
                <div>
                  <span className="contact-method__label font-mono">LinkedIn</span>
                  <span className="contact-method__val">Connect with me</span>
                </div>
              </a>
            </div>

            <div className="contact-location-card">
              <span className="contact-location-label font-mono">Based in</span>
              <p className="contact-location-name font-heading">{CONTACT.location}</p>
              <p className="contact-location-note font-mono">Available for remote work worldwide</p>
            </div>

            <div className="contact-availability-card">
              <div className="contact-avail-dot" />
              <div>
                <span className="contact-avail-label font-mono">Currently available</span>
                <p className="contact-avail-text">Open to freelance projects and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

