import { Linkedin, Send } from 'lucide-react';
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

    // 1. Prepare the data for Web3Forms
    const object = {
      ...formData,
      // 🔴 IMPORTANT: Replace with the Access Key you receive via email
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
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
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
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </div>

        {/* Grid with items-stretch to ensure equal height boxes */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT COLUMN: Text & LinkedIn Card */}
          {/* Added consistent styling: bg-slate-50, rounded-3xl, border, shadow */}
          <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I am always interested in discussing new opportunities in Learning & Development, 
                leadership coaching, and organizational transformation. Whether you have a question 
                or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="https://www.linkedin.com/in/vivekanandakadukuntla/"
                target="_blank"
                rel="noopener noreferrer"
                // w-full: Makes button stretch full width to match the form button
                // justify-center: Centers the text and icon
                className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="w-5 h-5 fill-current" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="flex-grow">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full h-full min-h-[120px] px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {result && (
                <p className={`text-center font-medium ${result.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
