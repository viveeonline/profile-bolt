import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      name: "Insights Discovery Practitioner",
      category: "Psychometric Assessment"
    },
    {
      name: "MBTI® Certified Practitioner",
      category: "Psychometric Assessment"
    },
    {
      name: "Certified PPA Practitioner - Thomas Assessments",
      category: "Psychometric Assessment"
    },
    {
      name: "PI (Predictive Index) Practitioner",
      category: "Psychometric Assessment"
    },
    {
      name: "SAP SuccessFactors Learning Expert (SFX)",
      category: "Technology"
    },
    {
      name: "Prosci® Certified Change Practitioner",
      category: "Change Management"
    },
    {
      name: "Leading L&D - Josh Bersin Academy",
      category: "Leadership"
    },
    {
      name: "The Agile Learning Organization - Josh Bersin Academy",
      category: "Leadership"
    },
    {
      name: "ITIL V3 Foundation – EXIN",
      category: "Technology"
    },
    {
      name: "Certified Trainer and Facilitator",
      category: "Training & Development"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Committed to continuous learning and professional excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-600 font-medium">{cert.category}</span>
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
