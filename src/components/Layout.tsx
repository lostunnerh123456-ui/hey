import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function Layout() {
  const { language } = useLanguage();

  return (
    <div 
      className={`min-h-screen flex flex-col text-slate-900 bg-white ${language === 'ar' ? 'font-cairo' : 'font-sans'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
