import { ExternalLink, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

// ==========================================
// 📚 UPDATE YOUR BOOKS HERE
// ==========================================
const BOOKS_DATA = [
  {
    id: '1',
    title: 'Multipliers',
    author: 'Liz Wiseman',
    cover_image_url: 'https://m.media-amazon.com/images/I/81UgpHs1vrL._SY385_.jpg',
    affiliate_link: 'https://amzn.to/4bjv6xL'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover_image_url: 'https://m.media-amazon.com/images/I/817HaeblezL._SY385_.jpg',
    affiliate_link: 'https://amzn.to/4qCktL0'
  },
  {
    id: '3',
    title: 'The Thinking Machine',
    author: 'Stephen Witt',
    cover_image_url: 'https://m.media-amazon.com/images/I/41PSQ-FuQqL._SY445_SX342_PQ99_.jpg',
    affiliate_link: 'https://amzn.to/3Lj7JK8'
  },
  {
    id: '4',
    title: 'Start with Why',
    author: 'Simon Sinek',
    cover_image_url: 'https://m.media-amazon.com/images/I/71FPH6GnDgL._SY385_.jpg',
    affiliate_link: 'https://amzn.to/4989V0g'
  },
  {
    id: '5',
    title: 'The Chimp Paradox',
    author: 'Prof Steve Peters',
    cover_image_url: 'https://m.media-amazon.com/images/I/81C18yb1jHL._SY425_.jpg',
    affiliate_link: 'https://amzn.to/3Yojx0H'
  },
  {
    id: '6',
    title: 'Good to Great',
    author: 'Jim Collins',
    cover_image_url: 'https://m.media-amazon.com/images/I/71LhjimPd8L._SY385_.jpg',
    affiliate_link: 'https://amzn.to/4smMg3K'
  },
  {
    id: '7',
    title: 'The Gifts of Imperfection',
    author: 'Brené Brown',
    cover_image_url: 'https://m.media-amazon.com/images/I/71M1xmVuhnL._SY425_.jpg',
    affiliate_link: 'https://amzn.to/3YnFsoN'
  },
  {
    id: '8',
    title: 'Dare to Lead',
    author: 'Brené Brown',
    cover_image_url: 'https://m.media-amazon.com/images/I/71LuaXKsHAL._SY425_.jpg',
    affiliate_link: 'https://amzn.to/4jszX1Z'
  },
  {
    id: '9',
    title: 'The Almanack Of Naval Ravikant',
    author: 'Eric Jorgenson',
    cover_image_url: 'https://m.media-amazon.com/images/I/515M4WOE73L._SY466_.jpg',
    affiliate_link: 'https://amzn.to/4bor33c'
  },
{
    id: '10',
    title: 'Nudge',
    author: 'Richard H. Thaler Cass R Sunstein',
    cover_image_url: 'https://m.media-amazon.com/images/I/71FlmujR6vL._SY385_.jpg',
    affiliate_link: 'https://amzn.to/3YqEyrF'
  },
{
    id: '11',
    title: "Man's Search For Meaning",
    author: 'Viktor E Frankl',
    cover_image_url: 'https://m.media-amazon.com/images/I/81FDXdnrh7L._SY425_.jpg',
    affiliate_link: 'https://amzn.to/49hr1Yj'
  },
{
    id: '12',
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    cover_image_url: 'https://m.media-amazon.com/images/I/81fCvIBRpmL._SY385_.jpg',
    affiliate_link: 'https://amzn.to/4qb7HDq'
  }
];

export default function Books() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling "Page by Page"
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      
      // LOGIC CHANGE: Scroll by the width of the visible container (one "page")
      // This adapts automatically to any screen size (2 books, 3 books, or 4 books wide)
      const scrollAmount = current.clientWidth;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="books" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Books I've Read
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Books that shaped my thinking and leadership philosophy
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto group/container">
          
          {/* LEFT ARROW BUTTON */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW BUTTON */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* SCROLLABLE CONTAINER */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin' }} 
          >
            {BOOKS_DATA.map((book) => (
              <div
                key={book.id}
                // snap-start: Ensures the new page starts cleanly aligned to the left
                className="min-w-[280px] md:min-w-[300px] bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col snap-start"
              >
                {/* Book Cover Container */}
                <div className="relative h-64 bg-slate-200 overflow-hidden flex items-center justify-center p-6">
                  {book.cover_image_url ? (
                    <img
                      src={book.cover_image_url}
                      alt={book.title}
                      className="h-full w-auto object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <BookOpen className="w-16 h-16 text-slate-400" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4 flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-slate-600 font-medium text-sm">{book.author}</p>
                  </div>

                  {book.affiliate_link && (
                    <a
                      href={book.affiliate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Get Book
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
