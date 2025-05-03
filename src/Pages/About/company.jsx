import React from "react";
import { LayoutDashboard,Cloud,Users,LifeBuoy,ShieldCheck,Layers3 } from "lucide-react";
import pic1 from '../../assets/Pic about.png';
import { useTranslation } from "react-i18next";

export default function Company() {
 
  const { t } = useTranslation();
  const image = [pic1];
  const features1 = [
    {
      title: t("home.grid.section1.title"),
      desc: t("home.grid.section1.desc"),
      icon: <LayoutDashboard className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: t("home.grid.section2.title"),
      desc: t("home.grid.section2.desc"),
      icon: <Cloud className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title:  t("home.grid.section3.title"),
      desc:  t("home.grid.section3.desc"),
      icon: <Users className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title:  t("home.grid.section4.title"),
      desc: t("home.grid.section4.desc"),
      icon: <LifeBuoy className="w-12 h-12 text-blue-600 hover:text-teal-500 duration-700 mx-auto" />,
    },
    {
      title:  t("home.grid.section5.title"),
      desc:  t("home.grid.section5.desc"),
      icon: <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: t("home.grid.section6.title"),
      desc: t("home.grid.section6.desc"),
      icon: <Layers3 className="w-12 h-12 text-blue-600 mx-auto" />,
    },
  ];


  return (
    <div className="">
      {/* Kiri: Konten */}
      <div className="min-h-screen md:min-h-[60vh] lg:min-h-[100vh] bg-white text-gray-900 px-6 md:px-[80px] py-[50px] md:py-[40px] lg:py-[80px] flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl text-teal-600 font-semibold mb-2">{t("home.Page.Judul")}</h2>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mb-4">
            {t("about.desc")}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
              className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow">
              {t("home.buttons.whatsapp")}
            </button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-teal-600 text-blue-600 hover:bg-teal-50 px-6 py-3 rounded-lg">
              {t("home.buttons.freeTrial")}
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Ilustrasi Keuangan"
            className="rounded-xl max-h-[300px] md:max-h-[500px] w-full object-contain transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

     {/* Keunggulan */}
     <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
              {t("home.grid.title")}
          </h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features1.map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-gray-100 duration-300 p-6 rounded-2xl shadow-xl hover:shadow-md transition"
              >  
               <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kantor Kami</h2>
        <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
                title="Lokasi Kantor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0109485724447!2d106.79672087597986!3d-6.262287293726288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f19e8f2275db%3A0x6947313d0c5c5201!2sJl.%20Sawo%20III%2C%20RT.11%2FRW.5%2C%20Cipete%20Utara%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012150!5e0!3m2!1sid!2sid!4v1746289237408!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-[500px] border-0 "  
            ></iframe>

        </div>
      </div>
    </section>
    
    </div>
  );
}
