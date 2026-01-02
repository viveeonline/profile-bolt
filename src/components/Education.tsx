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
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Strong academic foundation combined with continuous executive education
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-700 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg whitespace-nowrap self-start">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{edu.period}</span>
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
