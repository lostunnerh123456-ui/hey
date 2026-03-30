import { Send, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 lg:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            {language === 'ar' ? 'اتصل ' : 'Contactez-'}
            <span className="text-purple-900 dark:text-purple-400">{language === 'ar' ? 'بنا' : 'Nous'}</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'إذا كنت بحاجة إلى مساعدة أو لديك سؤال، يمكنك مراسلتنا هنا'
              : 'Si vous avez besoin d\'aide ou avez une question, vous pouvez nous écrire ici'}
          </p>
        </div>

        <div className="flex justify-center items-center gap-10">
          <a
            href="https://t.me/+KQBmTIBRpMBhMjQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0088cc] dark:hover:bg-[#0088cc] hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-100 dark:border-slate-800"
          >
            <Send className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/reflexes.urgences?igsh=MWF1ZTI5eW11MTgy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#E1306C] dark:hover:bg-[#E1306C] hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-100 dark:border-slate-800"
          >
            <Instagram className="w-10 h-10" />
          </a>
          <a
            href="https://www.facebook.com/share/1D9J8Zei4K/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1877F2] dark:hover:bg-[#1877F2] hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-100 dark:border-slate-800"
          >
            <Facebook className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
