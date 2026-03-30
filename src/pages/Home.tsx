import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  BookOpen,
  MapPin,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] md:min-h-[60vh] flex items-center overflow-hidden bg-[#0f0a1a]">
        {/* Background Image */}
        <img 
          src="https://files.catbox.moe/j2bjta.jpeg"
          alt="Hero Background"
          className="absolute opacity-90 object-contain md:object-cover w-full h-auto md:w-[150vw] md:h-[150vh] top-0 md:top-auto md:bottom-0 left-0 md:left-[-60px]"
          referrerPolicy="no-referrer"
        />
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a1a] via-[#0f0a1a]/10 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-4 md:pt-20 lg:pt-32 lg:pb-8 pointer-events-none mt-[40px] md:mt-[70px] mb-[40px] md:mb-[130px]" dir="ltr">
          <div className="max-w-3xl pointer-events-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <h1 className="text-[2.4rem] md:text-7xl lg:text-[5.25rem] font-extrabold text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
              {language === 'ar' ? (
                <>
                  أتقن التعامل مع<br />
                  الحالات الطارئة بدقة<br />
                  <span className="text-[#b673f8] italic">سريرية</span>
                </>
              ) : (
                <>
                  Maîtrisez les<br />
                  urgences avec<br />
                  une précision<br />
                  <span className="text-[#b673f8] italic">Clinique</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              {language === 'ar' 
                ? 'كن مستعداً للتصرف بفعالية في قسم الطوارئ منذ يومك الأول. طور ثقتك السريرية من خلال دورات تدريبية مكيفة مع واقع الميدان في الجزائر.'
                : 'Soyez prêt(e) à agir efficacement aux urgences dès votre premier jour. Développez votre confiance clinique avec des formations adaptées à la réalité du terrain en Algérie.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/formations"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#4c2882] hover:bg-[#3a1e63] text-white rounded-md font-bold text-lg transition-colors gap-2"
              >
                {language === 'ar' ? 'اكتشف الدورات' : 'Découvrir les formations'}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 text-[#4c2882] rounded-md font-bold text-lg transition-colors shadow-sm"
              >
                {language === 'ar' ? 'سجل الآن' : 'Accéder maintenant'}
              </a>
            </div>
          </div>

          {/* Floating Widget */}
          <motion.div 
            className={`hidden md:flex absolute top-[335px] ml-[20px] ${language === 'ar' ? 'left-10 lg:left-1/4' : 'right-10 lg:right-1/4'} bg-[#1e1b2e]/90 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 items-center gap-4 pointer-events-auto`}
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 flex-shrink-0 bg-purple-900/50 flex items-center justify-center">
              <img src="https://files.catbox.moe/wo8ltz.jpg" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {language === 'ar' ? 'محاكاة الواقع' : 'Mise en situation'}
              </div>
              <div className="font-bold text-white text-sm">
                {language === 'ar' ? 'حالات سريرية حقيقية' : 'Cas Cliniques Réels'}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="pt-[28px] pb-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            {language === 'ar' ? 'ما الذي يجعل نهجنا ' : 'Ce qui rend notre approche '}
            <span className="text-orange-500">{language === 'ar' ? 'مختلفاً' : 'différente'}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'تطبيقي' : 'Pratique'}</h3>
              <p className="text-slate-400 leading-relaxed">
                {language === 'ar' 
                  ? 'لا مزيد من النظريات التي لا تنتهي. نذهب مباشرة إلى صلب الموضوع مع خطوات واضحة ومحددة.'
                  : 'Fini la théorie interminable. Nous allons droit au but avec des conduites à tenir claires, étape par étape.'}
              </p>
            </div>

            <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800 hover:border-orange-500 transition-colors">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'مكيف للجزائر' : 'Adapté à l\'Algérie'}</h3>
              <p className="text-slate-400 leading-relaxed">
                {language === 'ar'
                  ? 'تستخدم بروتوكولاتنا حصريًا العلاجات والفحوصات المتوفرة فعليًا في مستشفياتنا.'
                  : 'Nos protocoles utilisent exclusivement les traitements et bilans réellement disponibles dans nos structures.'}
              </p>
            </div>

            <div className="bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 dark:border-slate-800 hover:border-purple-500 transition-colors">
              <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'وصفات طبية نموذجية' : 'Ordonnances Types'}</h3>
              <p className="text-slate-400 leading-relaxed">
                {language === 'ar'
                  ? 'وصفات طبية جاهزة للاستخدام مع الجرعات الدقيقة حتى لا تتردد أبدًا أمام دفتر الوصفات الخاص بك.'
                  : 'Des prescriptions prêtes à l\'emploi avec les posologies exactes pour ne plus jamais hésiter devant votre ordonnancier.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors font-sans" dir="ltr">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Nos programmes phares
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Choisissez la formation qui correspond à vos besoins actuels pour exceller aux urgences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Course 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col transition-transform hover:-translate-y-1 duration-300">
              <div className="h-48 bg-purple-900 relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metabolic/800/400?blur=2')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full w-fit mb-3 uppercase tracking-wider">
                    Nouveau
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Formation des Urgences Métaboliques
                  </h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Maîtrisez les déséquilibres métaboliques les plus complexes avec des algorithmes simplifiés.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Dysnatrémie & Dyskaliémie",
                    "Acidocétose diabétique",
                    "Syndrome hyperosmolaire",
                    "Insuffisance Rénale Aiguë",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/formations"
                  className="w-full block text-center py-4 bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-300 font-bold rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                >
                  Voir le programme détaillé
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border-2 border-orange-500 flex flex-col transition-transform hover:-translate-y-1 duration-300 relative">
              <div className="absolute top-0 right-0 rounded-bl-xl bg-orange-500 text-white px-4 py-1 font-bold text-sm z-10">
                Le plus populaire
              </div>
              <div className="h-48 bg-slate-900 relative">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/emergency/800/400?blur=2')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Les 30 Conduites Pratiques en Médecine d'Urgence
                  </h3>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  30 conduites pratiques que l'on rencontre quotidiennement aux urgences.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "OAP & Poussée hypertensive",
                    "Crise d'asthme & EP",
                    "Intoxications & Envenimations",
                    "Ordonnances types incluses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/formations"
                  className="w-full block text-center py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                >
                  Voir le programme détaillé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-5 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {language === 'ar' ? 'هل أنت مستعد لتغيير مناوباتك في الطوارئ؟' : 'Prêt(e) à transformer vos gardes aux urgences ?'}
          </h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'انضم إلى مئات الأطباء الذين اختاروا الوضوح والثقة.'
              : 'Rejoignez des centaines de médecins qui ont choisi la clarté et la confiance.'}
          </p>
          <Link
            to="/formations"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/40 gap-2"
          >
            {language === 'ar' ? 'الوصول إلى الدورات' : 'Accéder aux formations'}
            <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'ar' ? 'لأي استفسار، تواصلوا معنا هنا:' : 'Pour toute question, contactez-nous ici :'}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            {language === 'ar' ? 'انضم إلى مجتمعنا' : 'Rejoignez notre communauté'}
          </p>
          <div className="flex justify-center items-center gap-10">
            <a
              href="https://t.me/+KQBmTIBRpMBhMjQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0088cc] dark:hover:bg-[#0088cc] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Send className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/reflexes.urgences?igsh=MWF1ZTI5eW11MTgy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#E1306C] dark:hover:bg-[#E1306C] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/share/1D9J8Zei4K/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1877F2] dark:hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
