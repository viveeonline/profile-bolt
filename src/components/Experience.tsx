import { Calendar } from 'lucide-react';
import pegaLogo from './pegalogo.png';
import ngaLogo from './ngalogo.png';
import prolificsLogo from './prolificslogo.png';
import netcrackerLogo from './netcrackerlogo.png';
import caLogo from './calogo.png';
import knoahLogo from './knoahlogo.jpg';

export default function Experience() {
  const experiences = [
    {
      company: "Pegasystems",
      logo: pegaLogo,
      role: "Learning Lead & Senior Learning Partner",
      period: "Aug 2019 - Present"
    },
    {
      company: "NGA Human Resources (an Alight company)",
      logo: ngaLogo,
      role: "Manager – Learning and Development",
      period: "Jan 2017 - Aug 2019"
    },
    {
      company: "Prolifics",
      logo: prolificsLogo,
      role: "Learning and Development Manager",
      period: "Aug 2014 - Jan 2017"
    },
    {
      company: "Netcracker Technology",
      logo: netcrackerLogo,
      role: "Learning & Development Consultant",
      period: "Jul 2010 - Aug 2014"
    },
    {
      company: "CA Technologies",
      logo: caLogo,
      role: "Adjunct Faculty & Customer Experience Analyst",
      period: "May 2006 - Jul 2010"
    },
    {
      company: "Knoah Solutions",
      logo: knoahLogo,
      role: "Sr. Business Process Trainer",
      period: "May 2002 - May 2006"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Over two decades of transformative leadership in Learning & Development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 last:mb-0 relative">
                
                <div className="flex gap-8 items-center">
                  
                  {/* LEFT COLUMN: Timeline & Logo */}
                  <div className="flex flex-col items-center relative shrink-0 w-32">
                    
                    {/* CONNECTING LINE */}
                    <div 
                      className={`absolute w-0.5 bg-slate-200 left-1/2 -translate-x-1/2 
                        ${index === 0 ? 'top-1/2 bottom-[-3rem]' : ''} 
                        ${index === experiences.length - 1 ? 'top-[-3rem] h-[calc(50%+3rem)]' : ''}
                        ${index > 0 && index < experiences.length - 1 ? 'top-[-3rem] bottom-[-3rem]' : ''}
                      `}
                    ></div>

                    {/* LOGO CIRCLE */}
                    {/* Added 'hover:scale-110' transition to logo too for extra polish */}
                    <div className="relative z-10 w-28 h-28 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center p-5 transition-transform duration-300 hover:scale-105">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Content Card */}
                  <div className="flex-1">
                    {/* 
                       UPDATED CARD STYLE TO MATCH EXPERTISE "POP" EFFECT:
                       1. bg-white: Clean background for light theme
                       2. rounded-xl: Matches Expertise border radius
                       3. shadow-md: Base shadow
                       4. border border-slate-200: Subtle definition
                       5. hover:shadow-2xl: The deep shadow on hover (Same as Expertise)
                       6. transform hover:-translate-y-2: The movement (Same as Expertise)
                       7. transition-all duration-300: Smooth animation
                    */}
                    <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                      <div className="flex flex-col items-start gap-2">
                        
                        <div className="w-full flex justify-between items-start">
                          <div>
                            {/* Company Name */}
                            <h3 className="text-xl font-bold text-slate-900">
                              {exp.company}
                            </h3>
                            {/* Role */}
                            <p className="text-slate-600 font-medium text-lg mt-1">
                              {exp.role}
                            </p>
                          </div>
                          
                          {/* Date Pill - Kept rounded-full (Pill shape) as requested */}
                          <div className="hidden md:flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Mobile Date (Shows below text on small screens) */}
                        <div className="md:hidden flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium w-fit mt-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
