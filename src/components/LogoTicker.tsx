import pegaLogo from './pegalogo.png';
import prosciLogo from './proscilogo.png';
import insightsLogo from './insightslogo.jpg';
import piLogo from './pilogo.jpeg';

export default function LogoTicker() {
  
  const logos = [
    { name: "Pegasystems", src: pegaLogo },
    { name: "Coursera", src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" },
    { name: "ISB", src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Indian_School_of_Business_logo.svg/1200px-Indian_School_of_Business_logo.svg.png" },
    { name: "Prosci", src: prosciLogo },
    { name: "ISTD", src: "https://www.istd.co.in/images/logo.png" }, // Official ISTD Logo
    { name: "Insights", src: insightsLogo },
    { name: "Predictive Index", src: piLogo },
  ];

  return (
    <div className="py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          Trusted by & Featured In
        </p>
      </div>

      {/* GRADIENT MASKS (Fades the edges) */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>

        {/* LOGO TRACK (Duplicated for seamless loop) */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* SET 1 */}
          <div className="flex items-center gap-16 mx-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
          
          {/* SET 2 (Duplicate for loop) */}
          <div className="flex items-center gap-16 mx-8">
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
