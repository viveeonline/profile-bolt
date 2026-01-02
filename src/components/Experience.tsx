import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Pegasystems",
      role: "Learning Lead & Senior Learning Partner",
      period: "Aug 2019 – Present",
      achievements: [
        "Leading global Learning & Development and Leadership Development strategy, driving transformative initiatives that align learning with business objectives",
        "Spearheading the design and launch of leadership academies and cohort-based programs, scaling impact across regions and business units, enabling 5000+ employees",
        "Championing AI adoption through AI-enabled learning, integrating advanced technologies and data-driven methodologies",
        "Built and optimized learning infrastructure, including implementation of SuccessFactors Learning Management System (LMS)",
        "Recognized for delivering innovative, immersive learning experiences that drive measurable business results"
      ]
    },
    {
      company: "NGA Human Resources (an Alight company)",
      role: "Manager – Learning and Development",
      period: "Jan 2017 – Aug 2019",
      achievements: [
        "Directed the design and delivery of tailored learning programs for all organizational levels",
        "Managed complex L&D projects, ensuring timely execution and measurable impact",
        "Drove innovation and best practices, empowering employees for professional growth",
        "Fostered a culture of continuous learning, strengthening organizational resilience"
      ]
    },
    {
      company: "Prolifics",
      role: "Learning and Development Manager",
      period: "Aug 2014 – Jan 2017",
      achievements: [
        "Oversaw comprehensive training functions including needs analysis, project management, and instructional design",
        "Implemented and administered Learning Management System (LMS)",
        "Developed soft skills, management, and technical training aligned with business goals",
        "Infused industry trends and innovation into learning solutions"
      ]
    },
    {
      company: "Netcracker Technology",
      role: "Learning & Development Consultant",
      period: "Jul 2010 – Aug 2014",
      achievements: [
        "Designed and facilitated training across organizational development, behavioral, and management domains",
        "Crafted engaging content and instructional strategies for optimal learning impact",
        "Drove talent growth and organizational success through innovative programs"
      ]
    },
    {
      company: "CA Technologies",
      role: "Adjunct Faculty & Customer Experience Analyst",
      period: "May 2006 – Jul 2010",
      achievements: [
        "Delivered dynamic learning experiences and personalized guidance",
        "Led customer feedback analysis and implemented satisfaction enhancement initiatives",
        "Collaborated cross-functionally to drive service improvements"
      ]
    },
    {
      company: "Knoah Solutions",
      role: "Sr. Business Process Trainer",
      period: "May 2002 – May 2006",
      achievements: [
        "Developed and delivered technical training programs to enhance workforce capability",
        "Designed tailored materials and interactive sessions for effective knowledge transfer",
        "Fostered culture of continuous learning and operational excellence"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
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

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 last:mb-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      {exp.company}
                    </h3>
                    <p className="text-xl text-blue-700 font-semibold">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700 leading-relaxed"
                    >
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
