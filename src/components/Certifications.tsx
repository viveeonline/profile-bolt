import { Award, CheckCircle2, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  
  // TIER 1: Big Cards
  const featuredCerts = [
    {
      title: "Prosci® Certified Change Practitioner",
      issuer: "Prosci",
      logoUrl: null 
    },
    {
      title: "Insights Discovery Practitioner",
      issuer: "Insights",
      logoUrl: null
    },
    {
      title: "PI (Predictive Index) Practitioner",
      issuer: "The Predictive Index",
      logoUrl: null
    },
    {
      title: "MBTI® Certified Practitioner",
      issuer: "The Myers-Briggs Company",
      logoUrl: null
    }
  ];

  // TIER 2: Small Cards
  const otherCerts = [
    { title: "Leading L&D", issuer: "Josh Bersin Academy" },
    { title: "The Agile Learning Organization", issuer: "Josh Bersin Academy" },
    { title: "Certified PPA Practitioner", issuer: "Thomas Assessments" },
    { title: "SAP SuccessFactors Learning Expert (SFX)", issuer: "SAP" },
    { title: "ITIL V3 Foundation", issuer: "EXIN" },
    { title: "Certified Trainer and Facilitator", issuer: "Internal" }
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Committed to continuous learning and professional excellence
          </p>
        </div>

        {/* UNIFIED CONTAINER: Both tiers live inside this single box now */}
        <div className="max-w-6xl mx-auto bg-slate-50/50 rounded-3xl p-8 lg:p-12 border border-slate-100">
          
          {/* TIER 1: BIG CARDS (2 Columns) */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                  {cert.logoUrl ? (
                    <img src={cert.logoUrl} alt={cert.issuer} className="w-10 h-10 object-contain" />
                  ) : (
                    <Award className="w-8 h-8 text-blue-600" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    {/* CHANGED TO GREEN CHECK to match the small cards */}
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DIVIDER LINE (Optional but helps separation) */}
          <div className="w-full h-px bg-slate-200 mb-8 opacity-50"></div>

          {/* TIER 2: SMALL CARDS (3 Columns) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 border border-slate-100 flex items-start gap-3 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
        </div>

      </div>
    </section>
  );
}
