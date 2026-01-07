import { Send, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');

    const object = {
      ...formData,
      access_key: '491c3693-521a-4549-98c5-2249396edc89'
    };

    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      });

      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        setResult('Success! Message sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResult('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log(error);
      setResult('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Choose the best way to reach me based on your needs.
          </p>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">

          {/* -------------------------------------------------- */}
          {/* COLUMN 1: WORK WITH ME (Topmate Services)          */}
          {/* -------------------------------------------------- */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Work With Me</h3>
            </div>
            
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Book a guaranteed slot for consulting, coaching, or partnership discussions.
            </p>

            {/* CARD 1: VENDOR PITCH (Highlighted) */}
            <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm mb-4 relative overflow-hidden group hover:border-emerald-400 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500"></div>
              <h4 className="font-bold text-slate-900 mb-1">Partner & Vendor Presentation</h4>
              <p className="text-xs text-slate-500 mb-3">Priority 30-min slot for product demos & pitches.</p>
              <a 
                href="https://topmate.io/vivekananda_kadukuntla/1878784" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Book Now <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* CARD 2: Resume Audit */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-4 hover:border-blue-400 transition-colors">
              <h4 className="font-bold text-slate-900 mb-1">Resume & Brand Audit</h4>
              <p className="text-xs text-slate-500 mb-3">Feedback from a Hiring VP perspective.</p>
              <a 
                href="https://topmate.io/vivekananda_kadukuntla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Book Review <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* CARD 3: Mentorship */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-purple-400 transition-colors">
              <h4 className="font-bold text-slate-900 mb-1">1:1 Mentorship</h4>
              <p className="text-xs text-slate-500 mb-3">Career roadmap for aspiring leaders.</p>
              <a 
                href="https://topmate.io/vivekananda_kadukuntla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors"
              >
                View Options <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>


          {/* -------------------------------------------------- */}
          {/* COLUMN 2: SAY HELLO (Web3Forms)                    */}
          {/* -------------------------------------------------- */}
          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl h-full flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm">
                For general inquiries, speaking requests, or just to say hello.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 flex-grow">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="flex-grow">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
              
              {result && (
                <p className={`text-center text-xs font-medium mt-2 ${result.includes('Success') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {result}
                </p>
              )}
            </form>
          </div>


          {/* -------------------------------------------------- */}
          {/* COLUMN 3: NETWORK (LinkedIn)                       */}
          {/* -------------------------------------------------- */}
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm h-full flex flex-col justify-center items-center text-center">
            
            <div className="w-20 h-20 bg-white p-1 rounded-full shadow-md mb-6 relative">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                 alt="LinkedIn" 
                 className="w-full h-full object-cover rounded-full"
               />
               <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">Let's Connect</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm max-w-xs">
              I share daily insights on AI, Leadership, and the future of work. Join the conversation with my network.
            </p>

            <ul className="text-left text-sm text-slate-600 space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> 23k+ Followers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Daily AI Updates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Community Events
              </li>
            </ul>

            {/* LINKEDIN BUTTON CODE */}
            <a 
              className="libutton transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-200" 
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vivekanandakadukuntla" 
              target="_blank"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '7px',
                textAlign: 'center',
                outline: 'none',
                textDecoration: 'none',
                color: '#ffffff',
                width: '200px',
                height: '40px', // Slightly taller for better touch target
                borderRadius: '16px',
                backgroundColor: '#0A66C2',
                fontFamily: '"SF Pro Text", Helvetica, sans-serif',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
            >
              Follow on LinkedIn
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
}
