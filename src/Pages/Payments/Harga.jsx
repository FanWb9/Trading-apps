import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";


export default function Harga()  {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[80px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Pilih Paket Sesuai Kebutuhanmu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* STARTER */}
          <div className="bg-blue-50 rounded-2xl border border-sky-500 hover:border-teal-700 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Standar</h3>
            <p className="text-gray-500 mb-4">Untuk bisnis kecil yang mulai digitalisasi</p>
            <div className="bg-white shadow-xl rounded p-4 text-sm text-blue-900 mb-4">
              <ul className="space-y-1 list-disc pl-5">
                <li>Pembukuan sederhana</li>
                <li>Auto invoice & pembayaran</li>
                <li>Manajemen stok dasar</li>
              </ul>
            </div>
            <p className="text-gray-400 line-through text-sm">Rp 306.000</p>
            <p className="text-2xl font-bold text-blue-600 mb-1">Rp 275.000<span className="text-sm font-normal">/bulan</span></p>
            <p className="text-green-600 text-xs mb-4">Diskon 10% bila dibayar tahunan</p>
            <div className="mt-6 text-sm text-gray-700 flex-1 mb-10">
              <strong className="block mb-2">✅ Fitur Utama</strong>
              <ul className="space-y-1">
                <li>✔ Pembukuan & laporan dasar</li>
                <li>✔ Sinkronisasi bank</li>
                <li>✔ 1 pengguna, 1 lokasi</li>
              </ul>
            </div>
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"} className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg mb-2 w-full ">💬 WhatsApp Sales</button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
                    {t("home.buttons.freeTrial")}
                    </button>
          </div>

          {/* BUSINESS */}
          <div className="bg-blue-50 rounded-2xl border border-sky-500 hover:border-teal-700 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Plus</h3>
            <p className="text-gray-500 mb-4">Untuk tim growing dengan operasional kompleks</p>
            <div className=" bg-white shadow-xl rounded p-4 text-sm text-blue-900 mb-4">
              <ul className="space-y-1 list-disc pl-5">
                <li>Multi lokasi & user</li>
                <li>Approval bertingkat</li>
                <li>Transaksi global</li>
              </ul>
            </div>
            <p className="text-gray-400 line-through text-sm">Rp 723.000</p>
            <p className="text-2xl font-bold text-blue-600 mb-1">Rp 650.700<span className="text-sm font-normal">/bulan</span></p>
            <p className="text-green-600 text-xs mb-4">Diskon 10% bila dibayar tahunan</p>
            <div className="mt-6 text-sm text-gray-700 flex-1">
              <strong className="block mb-2">✅ Fitur Utama</strong>
              <ul className="space-y-1">
                <li>✔ Semua fitur Starter</li>
                <li>✔ Konsolidasi laporan</li>
                <li>✔ 5 pengguna</li>
              </ul>
            </div>
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"} className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg mb-2 w-full mt-8">💬 WhatsApp Sales</button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
                    {t("home.buttons.freeTrial")}
                    </button>
          </div>

          {/* ENTERPRISE */}
          <div className="relative bg-blue-50 border border-sky-500 rounded-2xl shadow-lg p-6 flex flex-col hover:border-teal-700 hover:shadow-xl">
            <div className="absolute top-0 right-0 mt-2 mr-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Paling Populer</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium</h3>
            <p className="text-gray-600 mb-4">Solusi enterprise lengkap untuk manufaktur & distribusi</p>
            <div className="bg-white rounded p-4 text-sm text-blue-900 mb-4 shadow-xl">
              <ul className="space-y-1 list-disc pl-5">
                <li>Produksi kompleks</li>
                <li>Tracking batch & expiry</li>
                <li>Dashboard custom</li>
              </ul>
            </div>
            <p className="text-gray-600 text-base mb-4">Diskusikan harga dengan tim kami</p>
            <div className="mt-6 text-sm text-gray-800 flex-1 mb-10">
              <strong className="block mb-2">✅ Fitur Utama</strong>
              <ul className="space-y-1">
                <li>✔ Semua fitur Business</li>
                <li>✔ Multi gudang & multi user</li>
                <li>✔ Tidak terbatas pengguna </li>
              </ul>
            </div>
            <button onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"} className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg mb-2 w-full">💬 WhatsApp Sales</button>
            <button onClick={() => window.location.href = "https://thecoreaccounting.com/"} className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg">
                    {t("home.buttons.freeTrial")}
                    </button>  
          </div>

        </div>
      </div>
    </div>
  );
};

