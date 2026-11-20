import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/animations/ScrollProgress';
import IntroLoader from './components/animations/IntroLoader';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="portfolio-app">
      {/* Intro cinematic loader on initial entrance */}
      {!introFinished && <IntroLoader onComplete={() => setIntroFinished(true)} />}

      {/* Top reading/scroll progress line */}
      <ScrollProgress />

      {/* Persistent cinematic navigation */}
      <Navbar />

      {/* Main page viewports */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Universal footer */}
      <Footer />
    </div>
  );
}
