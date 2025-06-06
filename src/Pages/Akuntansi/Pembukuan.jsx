import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Buku from '../../assets/Buku_besar.png';
import Jurnal from '../../assets/Jurnal.png';
import Dashboard from '../../assets/Dashboard.png';
import Akun from '../../assets/Akun.png';
import pic1 from '../../assets/Pic 12.png';
import Neraca from '../../assets/Neraca.png';
import { NotebookPen, ListOrdered, ReceiptText, CalendarDays, Banknote, ClipboardCheck,FilePlus,Tag,Clipboard,Clock,Phone,MessageCircle  } from "lucide-react";
import { title } from 'framer-motion/client';

export default function Pembukuan() {
 const { t } = useTranslation();
  const images = [pic1];
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [formData , setFormData] = useState({
    'name': '',
    'Email':'',
    'Company': '',
    'Industri':'',
    'phoneNumber': '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://thecoreaccounting.com/inc/simpan_jadwal_demo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          namalengkap: formData.name,
          namaperusahaan: formData.Company,
          email: formData.Email,
          jenisindustri: formData.Industri,
          notelpon: formData.phoneNumber,
        }),
      });
  
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setIsopen(false);
        setFormData({
          name: '',
          Email: '',
          Company: '',
          Industri: '',
          phoneNumber: '',
        });
      } else {
        alert("Gagal mengirim jadwal!");
      }
    } catch (error) {
      console.error("Error saat kirim:", error);
      alert("Terjadi kesalahan!");
    }
  };
  const Logos = Object.values(
    import.meta.glob('../../assets/scroll/logos*.jpg', {eager: true})
  ).map((mod) => mod.default);

  const featuresBookkeeping = [
    {
      title: t("Pembukuan1.grid.section1.title"),
      desc: t("Pembukuan1.grid.section1.desc"),
      icon: <NotebookPen className="w-12 h-12 text-purple-600 mx-auto" />,
    },
    {
      title: t("Pembukuan1.grid.section2.title"),
      desc: t("Pembukuan1.grid.section2.desc"),
      icon: <ListOrdered className="w-12 h-12 text-purple-600 mx-auto" />,
    },
    {
      title: t("Pembukuan1.grid.section3.title"),
      desc:t("Pembukuan1.grid.section3.desc"),
      icon: <ReceiptText className="w-12 h-12 text-purple-600 mx-auto" />,
    },
    {
      title: t("Pembukuan1.grid.section4.title"),
      desc: t("Pembukuan1.grid.section4.desc"),
      icon: <CalendarDays className="w-12 h-12 text-purple-600 mx-auto" />,
    },
    {
      title:t("Pembukuan1.grid.section5.title"),
      desc: t("Pembukuan1.grid.section5.desc"),
      icon: <Banknote className="w-12 h-12 text-purple-600 mx-auto" />,
    },
    {
      title: t("Pembukuan1.grid.section6.title"),
      desc: t("Pembukuan1.grid.section6.desc"),
      icon: <ClipboardCheck className="w-12 h-12 text-purple-600 mx-auto" />,
    },
  ];
 
   const navLeft = [
      {
        title: t("Laporan-Keuangan.navbar.section1.title"),
        desc: t("Laporan-Keuangan.navbar.section1.desc"),
        image: Dashboard,
      },
      {
        title: t("Pembukuan1.Navbar.section1.title"),
        desc: t("Pembukuan1.Navbar.section1.desc"),
        image: Buku,
      },
      {
        title: t("Pembukuan1.Navbar.section2.title"),
        desc: t("Pembukuan1.Navbar.section2.desc"),
        image: Akun,
      },
      {
        title: t("Pembukuan1.Navbar.section3.title"),
        desc: t("Pembukuan1.Navbar.section3.desc"),
        image: Jurnal,
      }
     
    ]

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="lg:px-[50px]">
       {showSuccess && (
              <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-7 text-lg font-semibold rounded shadow-lg z-50 transition-all duration-300">
                Jadwal berhasil dikirim!
              </div>
            )}
      <div className="min-h-screen md:min-h-[60vh] lg:min-h-[100vh] bg-white text-gray-900 px-6 md:px-10 py-[90px] md:py-[40px] lg:py-[80px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
        
        {/* Kiri: Konten */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-lg text-teal-600 font-semibold mb-2">{t("Pembukuan1.Items.title")}</h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          {t("Pembukuan1.Items.desc")}
          </h1>
          <p className="text-base md:text-lg mb-8">
          {t("Pembukuan1.Items.desc1")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
            className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow">
              {t("home.buttons.whatsapp")}
            </button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-teal-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
            {t("home.buttons.freeTrial")}
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={images}
            alt="Ilustrasi Keuangan"
            className="rounded-lg  max-h-[300px]  md:max-h-[500px] w-full object-contain transition-all duration-700 ease-in-out "
          />
        </div>
      </div>

      <section className="bg-white px-6  sm:h-[450px] md:h-[250px] lg:h-[250px] py-7">
        <h2 className="text-2xl text-center font-bold">{t("home.items.title")}</h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll will-change-transform gap-6 min-w-max">
          {[...Logos, ...Logos, ...Logos].map((img,idx) => (
  
           <img
           key={idx}
           src={img}
           alt={`Logo ${idx + 1}`}
           className="h-[130px] w-auto object-contain hover:scale-110 transition-transform duration-700"
         />
          ))}
          </div>
        </div>
      </section>
      
       {/* Section why choose */}
       {/* Keunggulan */}
       <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kenapa Harus Pakai Sistem Pembukuan Kami?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Dapatkan kemudahan dalam mencatat dan mengelola keuangan bisnismu dengan sistem pembukuan yang cepat, aman, dan mudah diakses kapan saja.
        </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresBookkeeping.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
      {/* SECTION: FITUR SLIDE CONTOH/EXAMPL */}
      <section className="px-5">
      <h2 className="text-center pt-[50px] font-bold text-2xl lg:text-3xl">{t("Pembukuan1.items1.title")}</h2>
      <div className="mt-16 flex flex-col lg:flex-row gap-6">
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
                className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md lg:max-w-[500px]"
              />
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {navLeft[selectedTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{navLeft[selectedTab].desc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-[30px]">
                    <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
                    className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow">
                      {t("home.buttons.whatsapp")}
                    </button>
                    <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-teal-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
                    {t("home.buttons.freeTrial")}
                    </button>
                </div>

            </div>
          </div>
        </div>
      </section>
            
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.features.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FilePlus className="w-12 h-12 text-purple-600 mx-auto" />, title: t("Pembukuan1.features.feature1.title"), desc: t("Pembukuan1.features.feature1.desc") },
            { icon: <Tag className="w-12 h-12 text-purple-600 mx-auto" />, title: t("Pembukuan1.features.feature2.title"), desc: t("Pembukuan1.features.feature2.desc") },
            { icon: <Clipboard className="w-12 h-12 text-purple-600 mx-auto" />, title: t("Pembukuan1.features.feature3.title"), desc: t("Pembukuan1.features.feature3.desc") },
            { icon: <Clock className="w-12 h-12 text-purple-600 mx-auto" />, title: t("Pembukuan1.features.feature4.title"), desc: t("Pembukuan1.features.feature4.desc") },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded-xl text-center hover:shadow-lg transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    

      {/* SECTION: Testimoni */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">{t("home.testimonial.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { name: t("home.testimonial.client1.title"), message: t("home.testimonial.client1.desc") },
            { name: t("home.testimonial.client2.title"), message: t("home.testimonial.client2.desc") },
            { name: t("home.testimonial.client3.title"), message: t("home.testimonial.client3.desc") },
            { name: t("home.testimonial.client4.title"), message: t("home.testimonial.client4.desc") },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4">“{item.message}”</p>
              <p className="font-semibold text-blue-600">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-white text-center px-4 sm:px-8 md:px-16 min-h-screen md:h-min-[50vh] lg:min-h-[50vh]">
      <h2 className="text-gray-700 font-semibold mb-2">{t("conctac.title")}</h2>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10">
       {t("conctac.desc")}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
        {/* Live Chat */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("conctac.live")}</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            {t("conctac.desc1")}
          </p>
          <button
            onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
            className="bg-blue-600 text-white px-4 py-2  rounded-full font-semibold md:mt-[20px] hover:bg-blue-700 w-full"
          >
            Chat WhatsApp
          </button>
        </div>

        {/* Call Center */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("conctac.call")}</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
           {t("conctac.desc2")} <br />
           {t("conctac.time")}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full font-semibold">
           085215319526
          </button>
        </div>

        {/* Jadwal Meeting */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <CalendarDays className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{t("conctac.meeting")}</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          {t("conctac.choose")}
          </p>
          <button
            onClick={() => setIsopen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 w-full md:mt-[25px]"
          >
            Jadwalkan Meeting
          </button>
          {isOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
              <div className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Jadwal Meeting</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none transition"
                    required
                  />
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company Name"
                    value={formData.Company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none transition"
                    required
                  />
                  <select
                    name="Industri"
                    value={formData.Industri}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none transition"
                    required
                  >
                    <option value="">Pilih Industri</option>
                    <option value="Trading">Trading</option>
                    <option value="Food">Food & Beverages</option>
                    <option value="Professional">Professional Services</option>
                    <option value="Hospital">Hospital Education</option>
                    <option value="Consumer">Consumer Services</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg outline-none transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                  />

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsopen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}


        </div>
      </div>
    </section>
  
    </div>
  );
}