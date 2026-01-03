import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import profileImg from './vkprofile.png';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl bg-slate-700">
              <img 
                src={profileImg}
                alt="Vivekananda Kadukuntla - Learning & Leadership Development Leader"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Vivekananda Kadukuntla
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-6 font-light">
              Global Learning & Leadership Development Leader
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Transforming organizations through strategic learning initiatives and AI-enabled development.
              23+ years of global experience building high-performing teams and leadership academies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://www.linkedin.com/in/vivekanandakadukuntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 fill-current" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:vivekananda.kadukuntla@gmail.com"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-300 justify-center lg:justify-start">
{/*              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 888-500-8000</span>
              </div>
 */}             <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
