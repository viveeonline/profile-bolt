import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <a
                href="https://www.linkedin.com/in/vivekanandakadukuntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <div className="text-center">
                  <p className="text-slate-900 font-semibold">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="mailto:vivekananda.kadukuntla@gmail.com"
                className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                <div className="text-center">
                  <p className="text-slate-900 font-semibold">Send a Message</p>
                </div>
              </a>

              <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-slate-900 font-semibold">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-600">
                Available for consulting, speaking engagements, and strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
