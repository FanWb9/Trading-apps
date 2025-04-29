import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import pic9 from "../assets/Pic 11.png";
import pic10 from "../assets/Pic 3.png";
// import pic1 from "../assets/pic 1.jpg";
// import pic2 from "../assets/pic 2.jpg";
import pic3 from "../assets/Akuntasi.jpeg";
import Pic4 from "../assets/Product.png";
import Pic5 from "../assets/Ner.png";
import Pic6 from "../assets/Payment.png";
import { ShieldCheck, Cloud, Users, LayoutDashboard, LifeBuoy, Layers3,Globe2,  Database } from "lucide-react";
export default function Home() {
  const { t } = useTranslation();
  // const [current, setCurrent] = useState(0);
  const images = [pic9,pic10];
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  // Import otomatis semua file gambar dari assets yang sesuai pola nama
  const logos = Object.values(
    import.meta.glob('../assets/scroll/logos*.jpg', { eager: true })
  ).map((mod) => mod.default);

  const features1 = [
    {
      title: "Desain Sederhana & Intuitif",
      desc: "Antarmuka bersih, mudah digunakan, cocok untuk semua kalangan.",
      icon: <LayoutDashboard className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: "Akses dari Mana Saja",
      desc: "Kelola pembukuan kapan saja lewat cloud yang aman dan cepat.",
      icon: <Cloud className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: "Kolaborasi Tim Lebih Mudah",
      desc: "Tim bisa bekerja bersama dalam satu platform tanpa ribet.",
      icon: <Users className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: "Support Langsung & Cepat",
      desc: "Tim kami siap bantu kamu lewat chat atau call tanpa ribet.",
      icon: <LifeBuoy className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: "Data Terlindungi",
      desc: "Keamanan data terjamin dengan enkripsi dan standar global.",
      icon: <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: "Integrasi Fleksibel",
      desc: "Bisa dihubungkan ke aplikasi lain untuk alur kerja yang efisien.",
      icon: <Layers3 className="w-12 h-12 text-blue-600 mx-auto" />,
    },
  ];
  

  // const slides = [
  //   {
  //     image: pic1,
  //     title: t("home.slide1.title"),
  //     desc: t("home.slide1.desc"),
  //   },
  //   {
  //     image: pic2,
  //     title: t("home.slide2.title"),
  //     desc: t("home.slide2.desc"),
  //   },
  // ];

  const features = [
    {
      title: t("home.features.feature1.title"),
      desc: t("home.features.feature1.desc"),
      icon: <Globe2 className="w-12 h-12 text-green-600 mx-auto" />, 
      // Globe2: Global system, luas, modern
    },
    {
      title: t("home.features.feature2.title"),
      desc: t("home.features.feature2.desc"),
      icon: <ShieldCheck className="w-12 h-12 text-green-600 mx-auto" />, 
      // ShieldCheck: Security/Trust
    },
    {
      title: t("home.features.feature3.title"),
      desc: t("home.features.feature3.desc"),
      icon: <Layers3 className="w-12 h-12 text-green-600 mx-auto" />, 
      // Layers3: Organisasi produk, kategori, manajemen varian
    },
    {
      title: t("home.features.feature4.title"),
      desc: t("home.features.feature4.desc"),
      icon: <Database className="w-12 h-12 text-green-600 mx-auto" />, 
      // Database: Data produk, inventaris, backend kuat
    },
  ];

  const navLeft = [
    {
      title: t("home.navbar.section1.title"),
      desc: t("home.navbar.section1.desc"),
      image: pic3,
      path: "/Financial-Report",
    },
    {
      title: t("home.navbar.section2.title"),
      desc: t("home.navbar.section2.desc"),
      image: Pic4,
      path: "/Product",
    },
    {
      title: t("home.navbar.section3.title"),
      desc: t("home.navbar.section2.desc"),
      image: Pic5,
      path: "/Costs-expenses",
    },
    {
      title:t("home.navbar.section4.title"),
      desc: t("home.navbar.section4.desc"),
      image: Pic6,
      path: "/Costs-expenses",
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div >
      <div className="min-h-screen md:min-h-[60vh] lg:min-h-[80vh] bg-white text-gray-900 px-6 md:px-[60px] py-[50px] md:py-[40px] lg:py-[80px] flex flex-col-reverse md:flex-row items-center justify-between gap-8 ">
          
          {/* Kiri: Konten */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl text-indigo-600 font-semibold mb-2">{t("home.Page.Judul")}</h2>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            {t("home.Page.title")}
            </h1>
            <p className="text-base md:text-lg mb-8">
            {t("home.Page.desc")}
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
              className="rounded-xl  max-h-[300px]  md:max-h-[500px] w-full object-contain transition-all duration-700 ease-in-out "
            />
          </div>
        </div>
        <h2 className=" text-2xl lg:text-3xl font-semibold text-center mb-[15px]">
            {t("home.items.title")}
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll will-change-transform gap-6 min-w-max">
          {[...logos, ...logos, ...logos].map((img,idx) => (
  
           <img
           key={idx}
           src={img}
           alt={`Logo ${idx + 1}`}
           className="h-[130px] w-auto object-contain hover:scale-110 transition-transform duration-700"
         />
          ))}
          </div>
        </div>
      {/* HERO SLIDESHOW */}
      {/* <div className="relative h-[75vh] sm:h-[40vh] md:h-[70vh] lg:h-screen overflow-hidden bg-black/90 text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-30 max-w-4xl mx-auto pt-[45%] md:pt-[40%] lg:pt-[25%] px-6 text-left">
              <div className="flex flex-col items-start max-w-md md:max-w-lg lg:max-w-xl ml-0 md:ml-6 lg:ml-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg mb-6 md:mb-8">{slide.desc}</p>
                <div className="flex gap-3 md:gap-4">
                <button
                      onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
                      className="bg-white text-sky-700 px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:bg-sky-100"
                    >
                      {t("home.buttons.whatsapp")}
                    </button>

                  <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="bg-blue-600 px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:bg-blue-700">
                    {t("home.buttons.freeTrial")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
       {/* WHY CHOOSE THECOUNT SECTION */}
       <section className="bg-white py-[50px] px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t("home.why")} <span className="text-blue-600">thecore</span>
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
      {/* ITEMS SECTION */}
      <section className="bg-white py-20 px-6 md:px-20 sm:h-[100vh] md:h-[100vh] lg:h-[90vh]">
        <h2 className="text-center pt-[50px] font-bold text-2xl lg:text-3xl">{t("home.items1.title")}</h2>
       {/* NAVBAR SECTION IN LEFT */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          {/* Tabs on Mobile, Vertical Navbar on Desktop */}
          <div className="overflow-x-auto lg:overflow-visible">
            <div className="flex lg:flex-col gap-2 lg:gap-4 min-w-max">
              {navLeft.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTab(idx)}
                  className={`whitespace-nowrap px-4 py-2 rounded-md shadow font-semibold transition-colors duration-700 ${
                    selectedTab === idx
                      ? "bg-blue-100 text-blue-700"
                      : "bg-white text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

         {/* Content Area */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-md flex flex-col lg:flex-row gap-6 items-start">
            {navLeft[selectedTab].image && (
              <img
                src={navLeft[selectedTab].image}
                alt={navLeft[selectedTab].title}
                className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md lg:max-w-[600px]"
              />
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {navLeft[selectedTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{navLeft[selectedTab].desc}</p>
                  {navLeft[selectedTab].path && (
                <Link
                  to={navLeft[selectedTab].path}
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  {t("home.buttons.learnMore")}
                </Link>
              )}

            </div>
          </div>
        </div>
      </section>

     
      {/* Keunggulan */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kenapa Harus Pakai Sistem Akutansi Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Dapatkan pengalaman pembukuan modern yang efisien, aman, dan bisa kamu akses kapan pun.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features1.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
