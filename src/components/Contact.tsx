import { Send, Sparkles, ArrowRight, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
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

  // Shared classes for consistent card look
  const cardClasses = "bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full";
  
  // Shared classes for buttons (Size & Shape)
  const buttonBaseClasses = "w-full h-14 inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-md";

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Choose the best channel for your specific needs.
          </p>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

          {/* -------------------------------------------------- */}
          {/* COLUMN 1: WORK WITH ME (Topmate Services)          */}
          {/* -------------------------------------------------- */}
          <div className={cardClasses}>
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-emerald-700" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Work With Me</h3>
            <p className="text-slate-500 text-sm mb-8">
              Book a guaranteed slot for consulting, coaching, or partnership discussions.
            </p>

            {/* Service List */}
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Partner & Vendor Presentation</h4>
                  <p className="text-xs text-slate-500">Priority product demos & pitches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">L&D Strategy Consulting</h4>
                  <p className="text-xs text-slate-500">For Organizations & Founders.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">1:1 Career Mentorship</h4>
                  <p className="text-xs text-slate-500">For Aspiring Leaders.</p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Resume & Brand Audit</h4>
                  <p className="text-xs text-slate-500">Feedback from Hiring VP.</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <a 
                href="https://topmate.io/vivekananda_kadukuntla" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${buttonBaseClasses} bg-slate-900 hover:bg-slate-800`}
              >
                Book on Topmate <ArrowRight className="w-5 h-5" />
              </a>
              {/* Spacer to match form result height */}
              <div className="h-6 mt-2"></div>
            </div>
          </div>


          {/* -------------------------------------------------- */}
          {/* COLUMN 2: SAY HELLO (Web3Forms)                    */}
          {/* -------------------------------------------------- */}
          <div className={cardClasses}>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-blue-700" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-slate-500 text-sm mb-6">
              For general inquiries, speaking requests, or just to say hello.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full flex-grow min-h-[100px] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm transition-all resize-none"
                placeholder="Your message..."
                required
              ></textarea>

              <div className="mt-auto pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${buttonBaseClasses} bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
                
                {/* Result Message Container (Prevents layout jump) */}
                <div className="h-6 mt-2 flex items-center justify-center">
                  {result && (
                    <p className={`text-xs font-bold ${result.includes('Success') ? 'text-emerald-600' : 'text-red-500'}`}>
                      {result}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>


          {/* -------------------------------------------------- */}
          {/* COLUMN 3: NETWORK (LinkedIn)                       */}
          {/* -------------------------------------------------- */}
          <div className={cardClasses}>
            <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-[#0A66C2]" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Connect</h3>
            <p className="text-slate-500 text-sm mb-8">
              Join my network for daily insights on AI, Leadership, and the future of work.
            </p>

            <div className="flex flex-col items-center mb-8 flex-grow justify-center">
                <div className="w-24 h-24 p-1 rounded-full border-2 border-dashed border-slate-300 mb-4 relative">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                        alt="LinkedIn" 
                        className="w-full h-full object-cover rounded-full"
                    />
                     <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2 justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#0A66C2]" /> 23,000+ Followers
                    </p>
                    <p className="text-sm font-bold text-slate-800 flex items-center gap-2 justify-center">
                        <MessageSquare className="w-4 h-4 text-[#0A66C2]" /> Daily Updates
                    </p>
                </div>
            </div>

            <div className="mt-auto">
              <a 
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=vivekanandakadukuntla" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseClasses} bg-[#0A66C2] hover:bg-[#004182]`}
              >
                Follow on LinkedIn
              </a>
              {/* Spacer to match form result height */}
              <div className="h-6 mt-2"></div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
