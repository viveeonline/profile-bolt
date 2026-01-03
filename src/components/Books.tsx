import { ExternalLink, BookOpen } from 'lucide-react';

export default function Books() {
  // EASY MAINTENANCE: Add your books here.
  // For images: Right-click the book cover on Amazon and select "Copy Image Address"
  const books = [
    {
      id: '1',
      title: 'Multipliers',
      author: 'Liz Wiseman',
      // I added a placeholder image. Replace this URL with the actual Amazon image URL
      cover_image_url: 'https://m.media-amazon.com/images/I/81xIe3qI+HL._SY466_.jpg', 
      affiliate_link: 'https://amazon.com/your-affiliate-link-1'
    },
    {
      id: '2',
      title: 'Atomic Habits',
      author: 'James Clear',
      cover_image_url: 'https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg',
      affiliate_link: 'https://amazon.com/your-affiliate-link-2'
    },
    {
      id: '3',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      cover_image_url: 'https://m.media-amazon.com/images/I/61fdrEuPJwL._SY466_.jpg',
      affiliate_link: 'https://amazon.com/your-affiliate-link-3'
    },
    {
      id: '4',
      title: 'Start with Why',
      author: 'Simon Sinek',
      cover_image_url: 'https://m.media-amazon.com/images/I/71PSoeC7oAI._SY466_.jpg',
      affiliate_link: 'https://amazon.com/your-affiliate-link-4'
    }
  ];

  return (
    <section id="books" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Books I've Read
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Books that shaped my thinking and leadership philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col"
            >
              {/* Book Cover Container */}
              <div className="relative h-64 bg-slate-200 overflow-hidden flex items-center justify-center p-4">
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
    </section>
  );
}
