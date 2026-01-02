import { Award, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "23+ Years",
      description: "Global L&D Experience"
    },
    {
      icon: Users,
      title: "5000+",
      description: "Employees Enabled"
    },
    {
      icon: TrendingUp,
      title: "ISB Alumni",
      description: "Future CHRO Program"
    },
    {
      icon: Sparkles,
      title: "AI Champion",
      description: "AI-Enabled Learning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Overview
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Accomplished Learning & Leadership Development executive with <strong className="text-blue-700">23+ years of global experience</strong> and <strong className="text-blue-700">ISB Alumnus</strong> fostering enterprise learning cultures and building high-performing teams. I have led the design and implementation of multi-year L&D strategies, established leadership academies, and built learning functions from the ground up.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At <strong className="text-blue-700">Pegasystems</strong>, I collaborate with senior leaders to align learning initiatives with business strategy, drive leadership capability at scale, and champion AI adoption through targeted enablement. I have spearheaded the design and launch of leadership academies and cohort-based programs, enabling <strong className="text-blue-700">5000+ employees</strong> across regions and business units.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Certified in various psychometric assessments and Change Management, I am committed to evidence-based, innovative learning. By leveraging AI to enhance learning experiences and embed a culture of continuous improvement, I strive to deliver meaningful, transformative programs that empower people and organizations to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
