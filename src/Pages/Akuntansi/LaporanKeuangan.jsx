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
      <section className="bg-white px-6  sm:h-[450px] md:h-[250px] lg:h-[250px] py-7">
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
      {/* SECTION: Fitur Unggulan */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.features.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "📊", title: t("home.features.realtime"), desc: t("home.features.realtimeDesc") },
            { icon: "🔒", title: t("home.features.security"), desc: t("home.features.securityDesc") },
            { icon: "⚙️", title: t("home.features.integration"), desc: t("home.features.integrationDesc") },
            { icon: "📥", title: t("home.features.export"), desc: t("home.features.exportDesc") },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Testimoni */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.testimonial.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "CV Karya Abadi", message: t("home.testimonial.msg1") },
            { name: "PT Sukses Bersama", message: t("home.testimonial.msg2") },
            { name: "UMKM Kopi Barokah", message: t("home.testimonial.msg3") },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4">“{item.message}”</p>
              <p className="font-semibold text-blue-600">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

  
    </div>
  );
}
