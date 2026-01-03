import { Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Pegasystems",
      logo: "https://via.placeholder.com/64?text=Pega",
      role: "Learning Lead & Senior Learning Partner",
      period: "Aug 2019 – Present"
    },
    {
      company: "NGA Human Resources (an Alight company)",
      logo: "https://via.placeholder.com/64?text=NGA",
      role: "Manager – Learning and Development",
      period: "Jan 2017 – Aug 2019"
    },
    {
      company: "Prolifics",
      logo: "https://via.placeholder.com/64?text=Prolifics",
      role: "Learning and Development Manager",
      period: "Aug 2014 – Jan 2017"
    },
    {
      company: "Netcracker Technology",
      logo: "https://via.placeholder.com/64?text=Netcracker",
      role: "Learning & Development Consultant",
      period: "Jul 2010 – Aug 2014"
    },
    {
      company: "CA Technologies",
      logo: "https://via.placeholder.com/64?text=CA",
      role: "Adjunct Faculty & Customer Experience Analyst",
      period: "May 2006 – Jul 2010"
    },
    {
      company: "Knoah Solutions",
      logo: "https://via.placeholder.com/64?text=Knoah",
      role: "Sr. Business Process Trainer",
      period: "May 2002 – May 2006"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Over two decades of transformative leadership in Learning & Development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-blue-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-200 mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 pt-2 pb-4">
                    <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-blue-700 font-semibold text-lg">
                        {exp.role}
                      </p>
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
