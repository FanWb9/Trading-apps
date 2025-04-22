import { useEffect, useState } from 'react';
import Pic1 from '../../assets/Pic1.jpg';
import { useTranslation } from "react-i18next";
import Pic2 from '../../assets/Pic2.jpg';
import { object } from 'framer-motion/client';

export default function LaporanKeuangan() {
  const { t } = useTranslation();
  const images = [Pic1, Pic2];
  const [currentImage, setCurrentImage] = useState(0);

  const Logos = Object.values(
    import.meta.glob('../../assets/scroll/logos*.jpg', {eager: true})
  ).map((mod) => mod.default);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:px-[55px]">
      <div className="min-h-screen md:min-h-[60vh] lg:min-h-[80vh] bg-white text-gray-900 px-6 md:px-10 py-[80px] md:py-[40px] flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Kiri: Konten */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-lg text-indigo-600 font-semibold mb-2">{t("Laporan-Keuangan.Items.title")}</h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          {t("Laporan-Keuangan.Items.desc")}
          </h1>
          <p className="text-base md:text-lg mb-8">
          {t("Laporan-Keuangan.Items.desc1")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
              {t("home.buttons.whatsapp")}
            </button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
            {t("home.buttons.freeTrial")}
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={images[currentImage]}
            alt="Ilustrasi Keuangan"
            className="rounded-lg shadow-xl max-h-[300px]  md:max-h-[500px] w-full object-contain transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
      <section className="bg-white px-6  sm:h-[450px] md:h-[450px] lg:h-[450px] py-7">
        <h2 className="text-2xl text-center font-bold">{t("home.items.title")}</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll will-change-transform gap-6">
          {[...Logos,...Logos].map((img,idx) => (
  
           <img
           key={idx}
           src={img}
           alt={`Logo ${idx + 1}`}
           className="h-[130px] w-auto object-contain hover:scale-110 transition-transform duration-300"
         />
           
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}
