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
                <div className="flex gap-8 items-stretch">
                  
                  {/* LEFT COLUMN: Logo & Timeline */}
                  <div className="flex flex-col items-center relative min-h-full">
                    
                    {/* LOGO BOX: Soft rounded corners, shadow for depth */}
                    <div className="w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center z-10 p-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* TIMELINE LINE: Thinner, cleaner line connecting the logos */}
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 bg-slate-300 absolute top-24 bottom-[-48px] lg:bottom-[-48px] z-0"></div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Content Card */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                            {exp.company}
                          </h3>
                          <p className="text-blue-700 font-semibold text-lg mt-1">
                            {exp.role}
                          </p>
                        </div>
                        
                        {/* DATE BADGE: Styled like a tag */}
                        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full whitespace-nowrap self-start lg:self-center">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
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
