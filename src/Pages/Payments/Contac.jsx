import { MessageCircle,Phone,CalendarDays } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Contac() {
  const { t } = useTranslation();
   const [isOpen, setIsopen] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
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
  return (
    <section className="py-20 bg-white text-center px-4 sm:px-8 md:px-16 min-h-screen md:mt-[110px]">
       {showSuccess && (
              <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-7 text-lg font-semibold rounded shadow-lg z-50 transition-all duration-300">
                Jadwal berhasil dikirim!
              </div>
            )}
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
  );
}
