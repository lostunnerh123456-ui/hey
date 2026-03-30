import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: language === 'ar' ? "الدورات" : "Formations", path: "/formations" },
    { name: language === 'ar' ? "اتصل بنا" : "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md border-b border-white/20 dark:border-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="https://files.catbox.moe/wo8ltz.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-xl tracking-tight text-[#4c2882] dark:text-white">
              Urgences Simplifiées
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors h-full flex items-center border-b-2 ${
                  isActive(link.path)
                    ? "text-[#4c2882] dark:text-purple-400 border-[#4c2882] dark:border-purple-400"
                    : "text-slate-600 dark:text-slate-300 border-transparent hover:text-[#4c2882] dark:hover:text-purple-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-[#4c2882] dark:hover:text-purple-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
              className="text-sm font-bold text-[#4c2882] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
            >
              {language === 'fr' ? 'العربية' : 'Français'}
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-[#4c2882] px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm"
            >
              {language === 'ar' ? 'سجل الآن' : 'Accéder maintenant'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-[#4c2882] dark:hover:text-purple-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner dark:shadow-none">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-purple-50 dark:bg-purple-900/30 text-[#4c2882] dark:text-purple-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-[#4c2882] dark:hover:text-purple-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4 px-3 mb-4">
              <button
                onClick={toggleTheme}
                className="text-slate-600 dark:text-slate-300 hover:text-[#4c2882] dark:hover:text-purple-400 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
                className="text-sm font-bold text-[#4c2882] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
              >
                {language === 'fr' ? 'العربية' : 'Français'}
              </button>
            </div>
            <div className="px-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-[#4c2882] px-5 py-3 rounded-md text-base font-semibold transition-colors shadow-sm"
              >
                {language === 'ar' ? 'سجل الآن' : 'Accéder maintenant'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
