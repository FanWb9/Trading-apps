import { useEffect, useState } from 'react';
import Pic1 from '../../assets/Pic1.jpg';
import { useTranslation } from "react-i18next";
import Pic2 from '../../assets/Pic2.jpg';

export default function LaporanKeuangan() {
  const { t } = useTranslation();
  const images = [Pic1, Pic2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-10 py-[80px] md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      
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
          className="rounded-lg shadow-xl max-h-[300px] md:max-h-[400px] w-full object-contain transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
}
