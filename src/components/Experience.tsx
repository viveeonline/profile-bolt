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
              // Added 'group' to handle hover effects if needed, 'mb-12' creates the gap
              <div key={index} className="mb-12 last:mb-0 relative">
                
                {/* ITEMS-CENTER: This ensures the logo stays vertically centered with the card */}
                <div className="flex gap-8 items-center">
                  
                  {/* LEFT COLUMN: Timeline & Logo */}
                  <div className="flex flex-col items-center relative shrink-0 w-24">
                    
                    {/* CONNECTING LINE LOGIC */}
                    {/* The line extends up and down to connect centered logos across the margins */}
                    <div 
                      className={`absolute w-0.5 bg-slate-200 left-1/2 -translate-x-1/2 
                        ${index === 0 ? 'top-1/2 bottom-[-3rem]' : ''} 
                        ${index === experiences.length - 1 ? 'top-[-3rem] h-[calc(50%+3rem)]' : ''}
                        ${index > 0 && index < experiences.length - 1 ? 'top-[-3rem] bottom-[-3rem]' : ''}
                      `}
                    ></div>

                    {/* LOGO CIRCLE:
                        - rounded-full: Perfect circle
                        - z-10: Sits on top of the line
                        - bg-white & border: Clean separation
                    */}
                    <div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center p-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Content Card */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-4">
                        
                        {/* Header: Company & Date */}
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            {exp.company}
                          </h3>
                          
                          {/* DATE PILL: Neutral colors (Slate) instead of Blue */}
                          <div className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium w-fit">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Role: Dark Grey (Slate-600) instead of "Link Blue" */}
                        <p className="text-slate-600 font-medium text-lg">
                          {exp.role}
                        </p>
                      
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
