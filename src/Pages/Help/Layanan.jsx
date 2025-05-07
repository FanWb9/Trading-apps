import React from 'react';
import {
  Target,
  Globe,
  MessageCircle,
  Lightbulb,
  Wrench,
  GraduationCap,
  Zap,
  Users,
} from 'lucide-react';
import { useEffect, useState } from "react";
export default function Layanan() {
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
  const fitur = [
    {
      icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
      title: 'Apa yang Akan Dipelajari',
      items: [
        { icon: <Lightbulb className="w-4 h-4 text-indigo-400" />, text: 'Alur Kerja Akuntansi Digital' },
        { icon: <Wrench className="w-4 h-4 text-indigo-400" />, text: 'Pengoperasian Fitur Utama' },
        { icon: <GraduationCap className="w-4 h-4 text-indigo-400" />, text: 'Studi Kasus & Simulasi' },
        { icon: <Zap className="w-4 h-4 text-indigo-400" />, text: 'Tips Penggunaan Efisien' },
      ],
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      title: 'Metode Pelatihan',
      items: [
        { icon: <Target className="w-4 h-4 text-indigo-400" />, text: 'Disesuaikan dengan Skala Bisnis' },
        { icon: <Globe className="w-4 h-4 text-indigo-400" />, text: 'Online & Tatap Muka' },
        { icon: <MessageCircle className="w-4 h-4 text-indigo-400" />, text: 'Interaktif & Solutif' },
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: 'Tujuan Pelatihan',
      paragraph: `Membantu tim keuangan lebih percaya diri, produktif, dan akurat dalam menggunakan sistem. Karena software tanpa pemahaman yang tepat hanya akan menjadi beban.`,
    },
  ];

  return (
    <div>
    <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white text-center px-4 sm:px-8 md:px-16 rounded-b-[40px] md:rounded-b-[80px] shadow-lg">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Welcome to our Help Center</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Kami siap membantu Anda dengan semua pertanyaan atau kendala yang Anda miliki.
        </p>
    </section>
      <section className="bg-white py-20 px-6 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Layanan Pelatihan <span className="text-indigo-600">TheCore Accounting</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Pelatihan praktis dan profesional untuk maksimalkan sistem akuntansi kamu.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {fitur.map((fitur, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[22rem] text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  {fitur.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{fitur.title}</h3>
                </div>
                {fitur.items ? (
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {fitur.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {item.icon}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {fitur.paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center my-9">
        <h1 className='font-bold text-2xl'>Atur jadwal</h1>
        <button
            onClick={() => setIsopen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 w-[250px ] md:mt-[25px] mt-[10px]"
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
      </section>
    </div>
  );
}
