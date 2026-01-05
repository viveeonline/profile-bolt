import { Linkedin, Mail, MapPin } from 'lucide-react';
import profileImg from './vkprofile.png';
// Import local logos
import pegaLogo from './pegalogo.png';
import prosciLogo from './proscilogo.png';
import insightsLogo from './insightslogo.jpg';
import piLogo from './pilogo.jpeg';
import mbtiLogo from './mbtilogo.gif';
import ngaLogo from './ngalogo.png';
import prolificsLogo from './prolificslogo.png';

export default function Hero() {

  // AGGREGATED LOGO LIST (Companies + Certs + Recognition)
  const logos = [
    { name: "Pegasystems", src: pegaLogo },
    { name: "Coursera", src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" },
    { name: "ISB", src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Indian_School_of_Business_logo.svg/1200px-Indian_School_of_Business_logo.svg.png" },
    { name: "Prosci", src: prosciLogo },
    { name: "ISTD", src: "https://www.istd.co.in/images/logo.png" },
    { name: "Insights", src: insightsLogo },
    { name: "Predictive Index", src: piLogo },
    { name: "MBTI", src: mbtiLogo },
    { name: "NGA HR", src: ngaLogo },
    { name: "Prolifics", src: prolificsLogo },
    { name: "SAP", src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" }, // Added SAP
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* MAIN HERO CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 lg:pt-40 flex-1 flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Vivekananda Kadukuntla
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-8 font-light">
              Global Learning & Leadership Development Leader
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming organizations through strategic learning initiatives and AI-enabled development. 
              23+ years of global experience building high-performing teams and leadership academies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://www.linkedin.com/in/vivekanandakadukuntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/50"
              >
                <Linkedin className="w-5 h-5 fill-current" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-700"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-slate-400 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-400/30 relative z-10">
              <img
                src={profileImg}
                alt="Vivekananda Kadukuntla"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-800/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 🚀 NEW: FLOATING LOGO SHELF (Inside Hero) */}
      {/* ========================================================= */}
      <div className="relative w-full py-10 mt-12 overflow-hidden border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        
        {/* GRADIENT FADE MASKS */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-slate-900 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-slate-900 to-transparent"></div>

        {/* INFINITE SCROLL TRACK */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Render the list TWICE to create the infinite loop effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              {/* WHITE CARD STYLE */}
              <div className="w-32 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
