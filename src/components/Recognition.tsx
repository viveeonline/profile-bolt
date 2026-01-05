import { ExternalLink, Trophy, Mic, Newspaper, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { useRef } from 'react';

// =========================================================================
// 📸 IMAGE IMPORTS
// Make sure these 3 files exist in your src/components/ folder!
// =========================================================================
import istdAwardImg from './istd-award.jpg';
import courseraFeatureImg from './coursera-feature.png';
import courseraCaseStudyImg from './coursera-casestudy.png';

// For YouTube, we grab the high-res thumbnail directly from the video ID
const hraiThumbnail = 'https://img.youtube.com/vi/Ei_dKy2taM8/maxresdefault.jpg'; 

const RECOGNITION_DATA = [
  {
    id: '1',
    category: 'Award',
    categoryColor: 'bg-amber-100 text-amber-800 border-amber-200', // 🏆 Gold for Awards
    icon: Trophy,
    title: 'National Award for Leadership Excellence',
    organization: 'ISTD Hyderabad Chapter',
    description: 'Honored with the prestigious award for "Innovative Training Practices," recognizing excellence in strategic L&D frameworks.',
    imageUrl: istdAwardImg,
    link: 'https://www.linkedin.com/posts/indian-society-for-training-and-development-istd-hyderabad-chapter-80a7331bb_we-are-delighted-to-announce-that-pegasystems-activity-7327877671919517696-L0EB/',
    date: '2024'
  },
  {
    id: '2',
    category: 'Feature',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200', // 📄 Blue for Reports
    icon: FileText,
    title: 'Industry Skills Brief 2025',
    organization: 'Coursera',
    description: 'Featured thought leader in the Global Industry Skills Brief, discussing the "Quality vs. Speed" dilemma in GenAI adoption.',
    imageUrl: courseraFeatureImg,
    link: 'https://www.coursera.org/enterprise/resources/pdf/industry-skills-brief-pdf',
    date: '2025'
  },
  {
    id: '3',
    category: 'Case Study',
    categoryColor: 'bg-indigo-100 text-indigo-800 border-indigo-200', // 📘 Indigo for Case Studies
    icon: Newspaper,
    title: 'Pegasystems Success Story',
    organization: 'Coursera for Enterprise',
    description: 'Official case study showcasing how we enhanced skills development and drove digital transformation at Pega.',
    imageUrl: courseraCaseStudyImg,
    link: 'https://www.coursera.org/enterprise/resources/casestudy/pegasystems',
    date: '2024'
  },
  {
    id: '4',
    category: 'Speaker',
    categoryColor: 'bg-red-100 text-red-800 border-red-200', // 🎙️ Red for Speaking
    icon: Mic,
    title: 'HRAI Thought Leadership Series',
    organization: 'Human Resources Association India',
    description: 'Curated and moderated a series of expert panels on "The Future of Remote Work" and "Hybrid Teams."',
    imageUrl: hraiThumbnail,
    link: 'https://youtube.com/playlist?list=PLIcHPHfV18lGU3LDqNXlGwsax5U_NMUlp&si=Rd8GbE_gi_byFS-3',
    date: '2023 - Present'
  }
];

export default function Recognition() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="recognition" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Recognition & Impact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Awards, speaking engagements, and industry features
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto group/container">
          
          {/* NAVIGATION BUTTONS */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* SCROLL CONTAINER */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin' }} 
          >
            {RECOGNITION_DATA.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] md:min-w-[380px] bg-white rounded-xl border border-slate-200 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden snap-start flex flex-col"
              >
                {/* IMAGE AREA */}
                <div className="relative h-56 bg-slate-200 group">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300"></div>
                  
                  {/* CATEGORY BADGE */}
                  <div className={`absolute top-4 left-4 ${item.categoryColor} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1 shadow-sm`}>
                    <item.icon className="w-3 h-3" />
                    {item.category}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-2 text-slate-500 text-xs font-bold tracking-wider uppercase">
                    {item.organization}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-medium text-slate-400">
                      {item.date}
                    </span>
                    
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
