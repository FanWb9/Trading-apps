import { useEffect, useState } from "react";
import pic1 from "../assets/pic 1.jpg"; // ganti sesuai path
import pic2 from "../assets/pic 2.jpg"; // ganti sesuai path

const slides = [
  {
    image: pic1,
    title: "Sederhanakan proses untuk fokus kembangkan strategi",
    desc: "Dengan Mekari Jurnal, perusahaan dapat mengelola keuangan dan operasional secara efektif untuk buka peluang menuju inovasi dan perkembangan bisnis",
  },
  {
    image: pic2,
    title: "Kelola keuangan bisnis dengan lebih mudah dan cepat",
    desc: "Otomatisasi pencatatan dan laporan keuangan agar kamu bisa fokus ke hal strategis lainnya.",
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
            {/* Tambah flex & justify-start biar nempel kiri */}
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
  );
}
