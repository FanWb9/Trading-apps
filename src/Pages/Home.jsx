import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import pic1 from "../assets/pic 1.jpg";
import pic2 from "../assets/pic 2.jpg";

export default function Home() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: pic1,
      title: t("home.slide1.title"),
      desc: t("home.slide1.desc"),
    },
    {
      image: pic2,
      title: t("home.slide2.title"),
      desc: t("home.slide2.desc"),
    },
  ];

  const features = [
    {
      title: t("home.features.feature1.title"),
      desc: t("home.features.feature1.desc"),
      icon: "🧭",
    },
    {
      title: t("home.features.feature2.title"),
      desc: t("home.features.feature2.desc"),
      icon: "🔗",
    },
    {
      title: t("home.features.feature3.title"),
      desc: t("home.features.feature3.desc"),
      icon: "👥",
    },
    {
      title: t("home.features.feature4.title"),
      desc: t("home.features.feature4.desc"),
      icon: "🔐",
    },
  ];

  const logos = [
    pic1, pic2, pic1, pic2, pic1,
    pic2, pic1, pic2, pic1, pic2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO SLIDESHOW */}
      <div className="relative h-[75vh] sm:h-[70vh] md:h-[30vh] lg:h-screen overflow-hidden bg-black/90 text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-30 max-w-4xl mx-auto pt-[45%] md:pt-[40%] lg:pt-[30%] px-6 text-left">
              <div className="flex flex-col items-start max-w-md md:max-w-lg lg:max-w-xl ml-0 md:ml-6 lg:ml-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg mb-6 md:mb-8">{slide.desc}</p>
                <div className="flex gap-3 md:gap-4">
                  <button className="bg-white text-sky-700 px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:bg-sky-100">
                    {t("home.buttons.whatsapp")}
                  </button>
                  <button className="bg-blue-600 px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:bg-blue-700">
                    {t("home.buttons.freeTrial")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ITEMS SECTION (Single Row - 20 Items Looping) */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <h2 className="text-center font-semibold text-xl mb-8">
          {t("home.items.title")}
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll w-max">
            {[...logos, ...logos].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Logo ${idx}`}
                className="h-[130px] w-auto object-contain hover:scale-110 transition-transform duration-700"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY THECOUNT SECTION */}
      <section className="bg-gray-200 py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {t("home.why")} <span className="text-blue-600">Thecount</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
