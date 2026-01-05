import { Award, CheckCircle2, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  
  // TIER 1: The "Crown Jewels" (Featured Certifications)
  // Displayed as Large Cards (2 per row)
  const featuredCerts = [
    {
      title: "Prosci® Certified Change Practitioner",
      issuer: "Prosci",
      category: "Change Management",
      logoUrl: null // Placeholder for now. Replace with: import prosciLogo from './prosci.png'
    },
    {
      title: "Insights Discovery Practitioner",
      issuer: "Insights",
      category: "Psychometric Assessment",
      logoUrl: null
    },
    {
      title: "PI (Predictive Index) Practitioner",
      issuer: "The Predictive Index",
      category: "Psychometric Assessment",
      logoUrl: null
    },
    {
      title: "MBTI® Certified Practitioner",
      issuer: "The Myers-Briggs Company",
      category: "Psychometric Assessment",
      logoUrl: null
    }
  ];

  // TIER 2: Specialist Skills
  // Displayed as Compact Cards (4 per row)
  const otherCerts = [
    { title: "SAP SuccessFactors Learning Expert (SFX)", issuer: "SAP" },
    { title: "Certified PPA Practitioner", issuer: "Thomas Assessments" },
    { title: "Leading L&D", issuer: "Josh Bersin Academy" },
    { title: "The Agile Learning Organization", issuer: "Josh Bersin Academy" },
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

        {/* SECTION 1: FEATURED CERTIFICATIONS (2 Cols) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {featuredCerts.map((cert, index) => (
            <div 
              key={index}
              // MATCHING THE "POP" STYLE from Experience/Education
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex items-center gap-6"
            >
              {/* Logo Placeholder - Large */}
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
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: OTHER CREDENTIALS (4 Cols) */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">
            Additional Technical & Professional Credentials
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-center gap-3 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-500/70" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
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
