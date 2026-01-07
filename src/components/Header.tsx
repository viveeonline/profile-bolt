import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    // Added 'Hero' as top section to allow resetting
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Recognition', href: '#recognition' }, // Added Recognition
    { name: 'Books', href: '#books' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // SCROLL SPY LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Loop through sections to find which one is currently in view
      for (const link of navLinks) {
        const sectionId = link.href.substring(1); // remove '#'
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-slate-950 shadow-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          {/* The Boxed Logo */}
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
              <span className="text-white font-bold text-xl tracking-tight">VK</span>
            </div>
        </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href
                    ? 'text-blue-500' // ACTIVE COLOR
                    : 'text-slate-400 hover:text-white' // INACTIVE COLOR
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="xl:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-slate-800 bg-slate-950 absolute left-0 right-0 px-6 shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-blue-500' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
