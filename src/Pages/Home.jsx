import { useEffect, useState } from "react";
import pic1 from "../assets/pic 1.jpg"; 
import pic2 from "../assets/pic 2.jpg"; 

const slides = [
  {
    image: pic1,
    title: "Thecount: Satu Platform, Semua Kebutuhan Bisnis",
    desc: "Mulai dari penjualan, pembelian, stok barang, hingga penggajian—semua bisa dikelola dalam satu sistem berbasis web tanpa batasan jumlah pengguna. Lebih hemat waktu, lebih efisien.",
  },
  {
    image: pic2,
    title: "Catat keuangan otomatis, fokus kembangkan bisnis",
    desc: "Sistem pintar yang bantu kamu kelola laporan dan transaksi keuangan secara instan, kapan saja.",
  },
];

const features = [
  {
    title: "Mudah Digunakan",
    desc: "Dengan tampilan yang simpel dan user-friendly, kamu bisa kelola keuangan dan operasional tanpa perlu keahlian teknis.",
    icon: "🧭",
  },
  {
    title: "Terintegrasi & Fleksibel",
    desc: "Terhubung dengan berbagai sistem seperti POS, eCommerce, dan bank untuk memastikan akurasi data dan kemudahan sinkronisasi.",
    icon: "🔗",
  },
  {
    title: "Tanpa Batasan Pengguna",
    desc: "Satu sistem bisa digunakan oleh semua tim tanpa batas user — cocok untuk UMKM hingga perusahaan besar.",
    icon: "👥",
  },
  {
    title: "Keamanan Data Terjamin",
    desc: "Data keuangan kamu dijaga dengan standar keamanan tingkat tinggi dan sistem backup otomatis.",
    icon: "🔐",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO SLIDESHOW */}
      <div className="relative h-screen overflow-hidden bg-black/90 text-white">
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
            <div className="relative z-30 max-w-4xl mx-auto pt-[50%] sm:pt-[35%] md:pt-[20%] lg:pt-[30%] px-6 text-left">
              <div className="flex flex-col items-start max-w-xl ml-0 md:ml-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                <p className="text-lg mb-8">{slide.desc}</p>
                <div className="flex gap-4">
                  <button className="bg-white text-sky-700 px-5 py-2 rounded-md font-semibold hover:bg-sky-100">
                    WhatsApp Sales
                  </button>
                  <button className="bg-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-blue-700">
                    Coba Gratis
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WHY THECOUNT SECTION */}
      <section className="bg-gray-200 py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Mengapa Memilih <span className="text-blue-600">Thecount</span>
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
