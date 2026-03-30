import { useEffect } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  Activity,
  Zap,
  CreditCard,
  Lock,
  Send,
  Instagram,
  Facebook
} from "lucide-react";

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dir="ltr" className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10 md:py-16 lg:py-24 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 md:mb-6">
            Nos Programmes de <span className="text-purple-900 dark:text-purple-400">Formation</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Des protocoles clairs, des posologies exactes et des conduites à
            tenir adaptées à la réalité des urgences en Algérie.
          </p>
        </div>

        {/* Course 1: Urgences Métaboliques */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-12 md:mb-24 transition-colors">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 lg:p-14 bg-purple-900 text-white relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/metabolic/800/800?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-sm font-bold rounded-full mb-6 uppercase tracking-wider shadow-md">
                  Nouveau Programme
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Formation des Urgences Métaboliques
                </h2>
                <p className="text-purple-200 text-lg mb-10 leading-relaxed">
                  Démystifiez les déséquilibres hydro-électrolytiques et
                  acido-basiques. Fini les calculs complexes, place à l'action
                  clinique.
                </p>

                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  Ce que vous allez maîtriser :
                </h3>
                <ul className="space-y-4 mb-10">
                  {[
                    "Dysnatrémie (Hyper et Hyponatrémie)",
                    "Dyskaliémie (Hyper et Hypokaliémie)",
                    "Dyscalcémie",
                    "Acidocétose diabétique (DKA)",
                    "Syndrome d'hyperglycémie hyperosmolaire",
                    "Hypoglycémie sévère",
                    "Insuffisance Rénale Aiguë (IRA)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                      <span className="text-purple-50 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                  Inclus dans ce programme :
                </h3>
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-purple-900 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Physiopathologie simplifiée
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Comprendre le "pourquoi" pour mieux appliquer le
                        "comment".
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-900 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Algorithmes de traitement
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Des arbres décisionnels clairs avec les posologies
                        exactes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-purple-900 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Cas cliniques réels
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Mise en situation pour valider vos acquis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-end gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                    3 000 DA
                  </span>
                  <span className="text-lg text-slate-500 dark:text-slate-400 line-through mb-1">
                    5 000 DA
                  </span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-purple-900 hover:bg-purple-800 text-white font-bold rounded-xl text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Accéder à la formation
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CreditCard className="w-4 h-4" />
                  Paiement sécurisé (CCP, BaridiMob)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course 2: 30 Conduites Pratiques */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border-2 border-orange-500 relative transition-colors mb-12 md:mb-24">
          <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-bl-2xl font-bold text-xs md:text-sm z-20 shadow-md">
            Le plus populaire
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 lg:p-14 bg-slate-900 text-white relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/emergency/800/800?blur=4')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Les 30 Conduites Pratiques en Médecine d'Urgence
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  30 conduites pratiques que l'on rencontre quotidiennement
                  aux urgences. Le guide de survie ultime pour vos gardes.
                </p>

                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  Parmi les thèmes abordés :
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "OAP",
                    "Accident aux AVK",
                    "Poussée hypertensive",
                    "Embolie pulmonaire",
                    "Crise d'asthme",
                    "Angine (enfant/adulte)",
                    "Rhinosinusite aiguë",
                    "Intoxications (CO, paracétamol...)",
                    "Envenimation scorpionique",
                    "Anaphylaxie",
                    "AVC ischémique/hémorragique",
                    "HNF et HBPM (posologie)",
                    "Migraine",
                    "Électrisation",
                    "Constat de décès",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                  Inclus dans ce programme :
                </h3>
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Ordonnances types prêtes à l'emploi
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Ne cherchez plus les posologies, tout est rédigé pour
                        vous.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Traitements disponibles en Algérie
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Des protocoles réalistes basés sur les moyens de nos
                        hôpitaux.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Astuces pour jeunes médecins
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Les pièges à éviter et les réflexes à acquérir
                        d'urgence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/30 p-6 md:p-8 rounded-2xl border border-orange-200 dark:border-orange-900/50">
                <div className="flex items-end gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                    3 000 DA
                  </span>
                  <span className="text-lg text-slate-500 dark:text-slate-400 line-through mb-1">
                    5 000 DA
                  </span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Accéder à la formation
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CreditCard className="w-4 h-4" />
                  Paiement sécurisé (CCP, BaridiMob)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Course */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-[#4c2882] relative mt-12 md:mt-24 transition-colors">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#4c2882] text-white px-6 md:px-8 py-1 md:py-2 rounded-b-2xl font-bold text-xs md:text-sm z-20 shadow-md uppercase tracking-wider">
            Offre Spéciale
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10 lg:p-14 bg-gradient-to-br from-[#4c2882] to-purple-900 text-white relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bundle/800/800?blur=4')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 mt-4">
                  Pack Complet : Les 2 Formations
                </h2>
                <p className="text-purple-200 text-lg mb-10 leading-relaxed">
                  Obtenez l'accès complet à nos deux programmes phares et devenez incollable sur toutes les urgences médicales et métaboliques.
                </p>

                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-orange-400" />
                  Ce pack inclut :
                </h3>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium">Formation des Urgences Métaboliques (Valeur: 3 000 DA)</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium">Les 30 Conduites Pratiques en Médecine d'Urgence (Valeur: 3 000 DA)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                  Pourquoi choisir le pack ?
                </h3>
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#4c2882] dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Économie immédiate
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Économisez 1 000 DA en prenant les deux formations ensemble.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#4c2882] dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Préparation totale
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Soyez prêt(e) à affronter n'importe quelle situation aux urgences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 p-6 md:p-8 rounded-2xl border border-purple-200 dark:border-purple-900/50">
                <div className="flex items-end gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#4c2882] dark:text-purple-400">
                    5 000 DA
                  </span>
                  <span className="text-xl text-slate-500 dark:text-slate-400 line-through mb-1">
                    6 000 DA
                  </span>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScXXMHbWD_OyxpOMTInOGAUI2m-HaX5wZxWcnNyE5DQ-9QyRg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-[#4c2882] hover:bg-[#3a1e63] text-white font-bold rounded-xl text-xl transition-colors shadow-xl flex items-center justify-center gap-2"
                >
                  <Lock className="w-6 h-6" />
                  Accéder au Pack Complet
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CreditCard className="w-4 h-4" />
                  Paiement sécurisé (CCP, BaridiMob)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Si vous avez besoin d'aide ou si vous avez une question, vous pouvez nous contacter ici :
          </h2>
          <div className="flex justify-center items-center gap-10 mt-8">
            <a
              href="https://t.me/+KQBmTIBRpMBhMjQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0088cc] dark:hover:bg-[#0088cc] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Send className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/reflexes.urgences?igsh=MWF1ZTI5eW11MTgy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#E1306C] dark:hover:bg-[#E1306C] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/share/1D9J8Zei4K/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1877F2] dark:hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
