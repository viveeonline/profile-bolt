import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "The Future CHRO",
      institution: "Indian School of Business (ISB)",
      period: "2024-2025",
      description: "Executive education program preparing HR leaders for strategic CHRO roles"
    },
    {
      degree: "Post Graduate Diploma in Business Administration (PGDBA)",
      institution: "Pondicherry University",
      period: "2003 – 2004",
      description: "Advanced business administration with focus on organizational management"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Osmania University",
      period: "1999 – 2002",
      description: "Foundation in computer applications and technology"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Strong academic foundation combined with continuous executive education
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              // CARD STYLE: Matches Experience & Expertise (White, Border, Shadow-md)
              // POP-UP EFFECT: hover:-translate-y-2 hover:shadow-2xl
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                
                {/* ICON: Kept the Graduation Cap as requested */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* CONTENT: Stacked Layout to match Experience */}
                <div className="flex flex-col items-start gap-3 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-600 font-medium text-lg mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* DATE PILL: Slate-100, Rounded-Full, Bottom Left */}
                  <div className="flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium w-fit mt-1">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
