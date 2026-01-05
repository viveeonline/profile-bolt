import { Award, Users, TrendingUp, Sparkles, Target, Brain, Globe } from 'lucide-react';

export default function About() {
  
  // THE 4 STATS CARDS (Top Row)
  const stats = [
    { 
      icon: Award, 
      value: "23+ Years", 
      label: "Global L&D Experience",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      icon: Users, 
      value: "5000+", 
      label: "Employees Enabled",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    { 
      icon: TrendingUp, 
      value: "ISB Alumni", 
      label: "Future CHRO Program",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    { 
      icon: Sparkles, 
      value: "AI Champion", 
      label: "AI-Enabled Learning",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  // THE 3 STRATEGIC PILLARS (Replaces the "Wall of Text")
  const pillars = [
    {
      icon: Target,
      title: "Strategic Leadership",
      description: "Designing scalable academies and cohort-based programs that align learning with business goals at enterprise scale."
    },
    {
      icon: Sparkles,
      title: "AI Champion",
      description: "Championing AI adoption through data-driven learning methodologies and personalized development pathways."
    },
    {
      icon: Globe,
      title: "Talent Ecosystems",
      description: "Building high-performing teams and fostering continuous learning cultures across global organizations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Overview
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          
          {/* THE HOOK (Short Executive Summary) */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Accomplished Learning & Leadership Development Executive with <span className="font-bold text-blue-700">23+ years of global experience</span> transforming organizations through strategic initiatives and AI-enabled development.
          </p>
        </div>

        {/* TOP ROW: STATS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: STRATEGIC PILLARS */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 border border-slate-100">
                <pillar.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
