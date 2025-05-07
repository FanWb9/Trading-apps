import { Link } from "react-router-dom";
import React from 'react';
import pic1 from "../../assets/Pic help1.png";
import pic2 from "../../assets/Pic help2.png";
import pic3 from "../../assets/Pic help3.png";
import pic4 from "../../assets/Pic help4.png";

export default function Help() {
  const features = [
    {
      title: "24/7 Support",
      description: "Tim kami siap membantu Anda kapan saja melalui WhatsApp.",
      path: "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore",
      image: pic1,
      external: true
    },
    {
      title: "Pelayanan Training",
      description: "Kami menyediakan layanan training untuk memaksimalkan penggunaan platform.",
      path: "/training",
      image: pic2
    },
    {
      title: "Video Tutorial",
      description: "Pelajari langkah-langkah penggunaan melalui video tutorial yang telah kami sediakan.",
      path: "/Tutorial",
      image: pic3
    },
    {
      title: "Frequently Asked Questions",
      description: "Temukan jawaban dari pertanyaan yang sering diajukan.",
      path: "/faq",
      image: pic4
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white text-center px-4 sm:px-8 md:px-16 rounded-b-[40px] md:rounded-b-[80px] shadow-lg">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Welcome to our Help Center</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Kami siap membantu Anda dengan semua pertanyaan atau kendala yang Anda miliki.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-8 px-4">
        {features.map((item, index) => {
          const CardContent = ( 
            <div className="bg-blue-50 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center max-w-sm w-full mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 mx-auto object-contain mb-3"
              />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          );

          return item.external ? (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <Link key={index} to={item.path}>
              {CardContent}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
