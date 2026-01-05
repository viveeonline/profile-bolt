import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Books from './components/Books';
import Recognition from './components/Recognition';

function App() {
  useEffect(() => {
    document.title = 'Vivekananda Kadukuntla | Global Learning & Leadership Development Leader';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '23+ years experienced Learning & Leadership Development Leader specializing in AI-enabled learning, leadership academies, and organizational transformation. ISB Alumni & Certified Change Practitioner.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '23+ years experienced Learning & Leadership Development Leader specializing in AI-enabled learning, leadership academies, and organizational transformation. ISB Alumni & Certified Change Practitioner.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Learning and Development, Leadership Development, L&D Leader, HR Professional, Organizational Development, AI-enabled Learning, Change Management, Pegasystems, ISB Alumni, Learning Strategy, Leadership Academies, Talent Development';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Vivekananda Kadukuntla | Global Learning & Leadership Development Leader');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', '23+ years experienced Learning & Leadership Development Leader specializing in AI-enabled learning and organizational transformation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Certifications />
        <Books />
        <Recognition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
