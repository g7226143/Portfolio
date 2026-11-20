// ============================================
// GOD GAMER — Project & Portfolio Data
// Edit this file to update projects & content
// ============================================

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Web App' | 'Website' | 'Full-Stack' | 'E-commerce';
  description: string;
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  technologies: string[];
  coverImage: string;         // Replace with actual image URL/import
  images: string[];           // Additional screenshot URLs
  liveUrl: string | null;     // Replace '#' with actual URL when available
  githubUrl: string | null;   // Replace '#' with actual URL when available
  featured: boolean;
  year: string;
  status: 'completed' | 'in-progress' | 'concept';
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'hotel-diplomat-website',
    title: 'Hotel Diplomat',
    subtitle: 'Premium Hospitality Website',
    category: 'Website',
    description: 'A cinematic, luxury hotel website built for Hotel Diplomat in Fatehpur, Uttar Pradesh. Features an immersive hero, gallery lightbox, enquiry system and embedded location mapping.',
    overview: 'A full-featured premium hospitality website designed to serve as a compelling pitch and eventual production site for Hotel Diplomat. The design system uses dark charcoals, champagne gold and ivory tones to create a sophisticated visual language.',
    problem: 'The hotel lacked a professional online presence that could attract travellers and business guests looking for quality accommodation along State Highway 13 in Fatehpur.',
    approach: 'I designed and developed the entire site from scratch inside a Vite + React + TypeScript project. The design language draws from luxury editorial and cinematic hospitality brands while remaining practical for a mid-tier property.',
    features: [
      'Cinematic full-screen hero with parallax and Ken-Burns zoom',
      'Interactive gallery with full-screen lightbox',
      'Animated room showcase with enquiry integration',
      'Google Maps embed with directions CTA',
      'Fully validated guest enquiry form',
      'Luxury footer with legal disclaimer',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'CSS3', 'Google Maps API'],
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    ],
    liveUrl: null, // Add URL when hosted
    githubUrl: null, // Add GitHub URL
    featured: true,
    year: '2024',
    status: 'completed',
  },
  {
    id: '2',
    slug: 'food-delivery-platform',
    title: 'QuickBite',
    subtitle: 'Food Delivery Web App',
    category: 'Full-Stack',
    description: 'A full-stack food delivery platform with real-time order tracking, restaurant menus, cart management and user authentication.',
    overview: 'QuickBite is a modern food delivery web application that connects customers with local restaurants. It features a responsive UI, real-time updates, and a secure checkout flow.',
    problem: 'Local restaurants needed an affordable, modern platform to reach online customers without relying on expensive third-party aggregators.',
    approach: 'Built with React on the frontend and Node.js/Express with MongoDB on the backend. JWT authentication, REST APIs and real-time order status updates using polling.',
    features: [
      'Restaurant discovery and menu browsing',
      'Shopping cart with persistent state',
      'JWT-based user authentication',
      'Order placement and status tracking',
      'Admin panel for restaurant owners',
      'Mobile-responsive layout',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs'],
    coverImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    year: '2024',
    status: 'completed',
  },
  {
    id: '3',
    slug: 'dev-portfolio',
    title: 'GOD GAMER Portfolio',
    subtitle: 'Personal Developer Portfolio',
    category: 'Website',
    description: 'This very portfolio — a cinematic full-stack developer portfolio with Three.js 3D visuals, Framer Motion animations, project showcases and a contact system.',
    overview: 'A personal portfolio designed from the ground up to reflect a cinematic, editorial aesthetic while showcasing technical depth. Built with performance, accessibility and creative design as equal priorities.',
    problem: 'Standard portfolio templates fail to communicate a developer\'s creative vision and technical identity in a memorable way.',
    approach: 'Designed entirely custom — no templates. The design system uses charcoal, paper and lime-green as a distinctive palette. Three.js provides the 3D hero object; Framer Motion drives all animations.',
    features: [
      'Cinematic intro loader with brand reveal',
      'Three.js abstract 3D hero object',
      'Mouse-responsive 3D parallax',
      'GSAP scroll-triggered animations',
      'Full project gallery with filtering',
      'Individual project detail pages',
      'Animated skills grid',
      'Validated contact form (ready for API)',
    ],
    technologies: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'GSAP', 'Vite'],
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    ],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    year: '2024',
    status: 'in-progress',
  },
];

// ============================================
// SKILLS / TECHNOLOGIES
// ============================================

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & Design';
  icon: string; // SVG path / emoji / devicons class
  color: string;
  starred?: boolean;
}

export const SKILLS: Skill[] = [
  // Frontend
  { id: 'react', name: 'React.js', category: 'Frontend', icon: '⚛', color: '#61DAFB', starred: true },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', icon: '▲', color: '#F5F2EA' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', icon: 'JS', color: '#F7DF1E', starred: true },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', icon: 'TS', color: '#3178C6' },
  { id: 'html5', name: 'HTML5', category: 'Frontend', icon: '◈', color: '#E34F26' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', icon: '◉', color: '#1572B6' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', icon: '~', color: '#06B6D4' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', icon: 'B', color: '#7952B3' },
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: '⬡', color: '#339933', starred: true },
  { id: 'express', name: 'Express.js', category: 'Backend', icon: '—', color: '#F5F2EA' },
  { id: 'python', name: 'Python', category: 'Backend', icon: '🐍', color: '#3776AB' },
  { id: 'flask', name: 'Flask', category: 'Backend', icon: '🌶', color: '#F5F2EA' },
  // Database
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: '🍃', color: '#47A248' },
  { id: 'firebase', name: 'Firebase', category: 'Database', icon: '🔥', color: '#FFCA28' },
  // Tools
  { id: 'git', name: 'Git / GitHub', category: 'Tools & Design', icon: '⌥', color: '#F05032' },
  { id: 'restapi', name: 'REST APIs', category: 'Tools & Design', icon: '⇄', color: '#C9F36B' },
  { id: 'threejs', name: 'Three.js', category: 'Tools & Design', icon: '△', color: '#F5F2EA' },
  { id: 'motion', name: 'Motion', category: 'Tools & Design', icon: '◎', color: '#C9F36B' },
  { id: 'gsap', name: 'GSAP', category: 'Tools & Design', icon: '▶', color: '#88CE02' },
  { id: 'figma', name: 'Figma', category: 'Tools & Design', icon: '◑', color: '#F24E1E', starred: true },
];

// ============================================
// SERVICES
// ============================================

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Website Development',
    description: 'Custom-designed, performant websites built with modern technologies. From landing pages to multi-page editorial sites — optimized for speed, SEO and conversions.',
    tags: ['React', 'Next.js', 'TypeScript', 'Responsive'],
  },
  {
    number: '02',
    title: 'Full-Stack Applications',
    description: 'End-to-end web applications with robust backend architecture, RESTful APIs, authentication systems and database design. Scalable, secure and maintainable.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    number: '03',
    title: 'E-commerce Development',
    description: 'High-converting e-commerce experiences with product catalogues, cart systems, payment integrations and admin dashboards. Built for growth.',
    tags: ['Product Listings', 'Cart', 'Checkout', 'Dashboard'],
  },
  {
    number: '04',
    title: 'Website Maintenance',
    description: 'Ongoing technical support, performance audits, feature additions and content updates. Keep your digital presence current, fast and secure.',
    tags: ['Updates', 'Performance', 'Security', 'Support'],
  },
];

// ============================================
// DEVELOPER CONTACT & SOCIAL LINKS
// ============================================

export const CONTACT = {
  email: 'your@email.com',              // ← Replace with your real email
  github: 'https://github.com/yourusername',   // ← Replace
  linkedin: 'https://linkedin.com/in/yourusername', // ← Replace
  whatsapp: 'https://wa.me/91XXXXXXXXXX',  // ← Replace with your number
  location: 'Kanpur, Uttar Pradesh, India',
};

