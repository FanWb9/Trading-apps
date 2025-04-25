import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menus } from "../utils";
import Logo from "../assets/Logo.png";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import Footer from "../Pages/Footer/Footer";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";


export default function NavbarLayout() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleSignIn = () => {
    window.location.href = "https://thecoreaccounting.com/"; // Ganti dengan URL website tujuan kamu
  };
  
  const handleName = () => navigate("/dashboard")

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  
  
  const menus = Menus();
  if (!Array.isArray(menus)) {
    console.error("Menus bukan array!", menus);
    return null;
  }

  const dropdownAnimate = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  return (
    <>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-teal-400 z-50">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-8" />
            <h3 className="text-lg font-semibold cursor-pointer text-white" onClick={handleName}>{t('brandName')}</h3>
           
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex-center gap-x-5">
            <button
              onClick={handleSignIn}
              aria-label={t('signIn')}
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              {t('signIn')} 
            </button>

            {/* Dropdown Bahasa */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <motion.button
                className="bg-white/5 z-[999] relative px-3 py-1.5 rounded-xl flex-center gap-2"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownAnimate}
              >
                <Globe className="w-5 h-5" />
                <span>{dropdownOpen ? "▲" : "▼"}</span>
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md z-50"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dropdownAnimate}
                  >
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                     English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('id')}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      Indonesia
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <MobMenu Menus={menus} />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
