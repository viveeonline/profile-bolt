import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Vivekananda Kadukuntla</h3>
          <p className="text-slate-400 mb-6">
            Global Learning & Leadership Development Leader
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and passion for excellence</span>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vivekananda Kadukuntla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
