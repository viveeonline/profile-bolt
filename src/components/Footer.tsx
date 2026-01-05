import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Books', href: '#books' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* LEFT: Copyright */}
          <div className="text-sm font-medium text-slate-400 order-2 md:order-1">
            © {currentYear} Vivekananda Kadukuntla. All rights reserved.
          </div>

          {/* RIGHT: Nav Links & Social */}
          <div className="flex flex-wrap justify-center items-center gap-6 order-1 md:order-2">
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Divider (visible on larger screens) */}
            <div className="hidden md:block w-px h-4 bg-slate-700"></div>

            {/* Social Icon */}
            <a 
              href="https://www.linkedin.com/in/vivekanandakadukuntla/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            
          </div>

        </div>
      </div>
    </footer>
  );
}
