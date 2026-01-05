import { Brain, Users, Rocket, LineChart, Lightbulb, Target } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Leadership Development",
      description: "Design and implementation of leadership academies and cohort-based programs at enterprise scale"
    },
    {
      icon: Sparkles,
      title: "AI-Enabled Learning",
      description: "Championing AI adoption through advanced technologies and data-driven learning methodologies"
    },
    {
      icon: Users,
      title: "Organizational Culture",
      description: "Building high-performing teams and fostering enterprise learning cultures"
    },
    {
      icon: Target,
      title: "Strategic L&D",
      description: "Multi-year L&D strategy design and implementation aligned with business objectives"
    },
    {
      icon: LineChart,
      title: "Change Management",
      description: "Prosci certified expertise in driving organizational transformation and change initiatives"
    },
    {
      icon: Lightbulb,
      title: "Psychometric Assessments",
      description: "Certified in MBTI, Insights Discovery, PPA, and Predictive Index for talent development"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Areas of Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100">
            Comprehensive capabilities driving organizational transformation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
            >
              <div className="w-16 h-16 bg-blue-500/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/50 transition-colors">
                <area.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-blue-100 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
