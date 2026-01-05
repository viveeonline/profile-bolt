import { ExternalLink, Trophy, Mic, Newspaper, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { useRef } from 'react';

// ==========================================
// 🏆 UPDATE YOUR RECOGNITION ITEMS HERE
// ==========================================
const RECOGNITION_DATA = [
  {
    id: '1',
    category: 'Award',
    icon: Trophy,
    title: 'Leadership Development Excellence',
    organization: 'ISTD (Indian Society for Training & Development)',
    description: 'Honored with the prestigious national award for designing impactful leadership frameworks.',
    // Replace with: import awardImg from './award.jpg'
    imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800', 
    link: '#', // Link to LinkedIn post or photo
    date: '2023'
  },
  {
    id: '2',
    category: 'Speaker',
    icon: Mic,
    title: 'HRAI Webinar Series',
    organization: 'Human Resources Association India',
    description: 'Coordinated and moderated expert panels on "The Future of Remote Work" and "Hybrid Teams."',
    // Replace with: YouTube Thumbnail or Webinar Poster
    imageUrl: 'https://images.unsplash.com/photo-1544531696-297af82eb1ea?auto=format&fit=crop&q=80&w=800',
    link: '#', // Link to YouTube video
    date: '2024'
  },
  {
    id: '3',
    category: 'Feature',
    icon: Newspaper,
    title: 'Coursera Global Skills Report',
    organization: 'Coursera',
    description: 'Featured thought leader: "Building a culture of continuous learning in the age of AI."',
    // Replace with: Screenshot of the report cover or your quote
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800',
    link: '#', // Link to the report
    date: '2023'
  },
  // Add more items here following the same pattern...
];

export default function Recognition() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth; // Scroll one full screen width
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
          
          {/* LEFT ARROW */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}
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
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                    <item.icon className="w-3 h-3 text-blue-600" />
                    {item.category}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-2 text-blue-600 text-sm font-semibold tracking-wide uppercase">
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
