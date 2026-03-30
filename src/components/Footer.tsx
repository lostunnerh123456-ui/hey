import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-purple-800/50 flex-shrink-0">
                <img src="https://files.catbox.moe/wo8ltz.jpg" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Urgences<span className="text-orange-500">Simplifiées</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'المنصة المرجعية لإتقان طب الطوارئ في الجزائر. عملية، واضحة ومكيفة مع واقع الميدان.'
                : 'La plateforme de référence pour maîtriser la médecine d\'urgence en Algérie. Pratique, claire et adaptée à la réalité du terrain.'}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {language === 'ar' ? 'تصفح' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'الرئيسية' : 'Accueil'}
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'دوراتنا' : 'Nos Formations'}
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'من نحن' : 'À Propos'}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {language === 'ar' ? 'البرامج' : 'Programmes'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'الحالات الطارئة الأيضية' : 'Urgences Métaboliques'}
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? '30 إجراء عملي' : '30 Conduites Pratiques'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {language === 'ar' ? 'اتصل' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="https://t.me/+KQBmTIBRpMBhMjQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'الانضمام إلى مجتمع تليجرام' : 'Rejoindre la communauté Telegram'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/reflexes.urgences?igsh=MWF1ZTI5eW11MTgy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'تابعنا على إنستغرام' : 'Suivez-nous sur Instagram'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/share/1D9J8Zei4K/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {language === 'ar' ? 'تابعنا على فيسبوك' : 'Suivez-nous sur Facebook'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Urgences Simplifiées. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
