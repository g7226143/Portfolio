import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import FeaturedProjects from '../components/home/FeaturedProjects';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import ContactCTA from '../components/home/ContactCTA';

export default function HomePage() {
  useEffect(() => {
    document.title = 'GOD GAMER — Full-Stack Developer · Kanpur, India';
  }, []);

  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <About />
      <Skills />
      <Services />
      <Process />
      <ContactCTA />
    </main>
  );
}

