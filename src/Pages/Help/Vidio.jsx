import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const features = [
  // Laporan Keuangan
  { title: 'Laporan Laba Rugi', description: 'Laporan keuangan standar per tahun, export PDF/Excel', youtube: 'https://youtu.be/...' },
  { title: 'Export PDF & Excel', description: 'Export semua laporan keuangan dalam format PDF atau Excel', youtube: 'https://youtu.be/...' },
  // Pembukuan
  { title: 'Buku Besar', description: 'Pantau aktivitas transaksi dalam buku besar', youtube: 'https://youtu.be/...' },
  { title: 'Daftar Akun', description: 'Lihat dan kelola daftar akun pembukuan', youtube: 'https://youtu.be/...' },
  // Penjualan / Pemasok
  { title: 'Penjualan', description: 'Kelola transaksi penjualan dan pelanggan', youtube: 'https://youtu.be/...' },
  { title: 'Pemasok', description: 'Atur data pemasok dan transaksi pembelian', youtube: 'https://youtu.be/...' },
  // Manajemen Produk
  { title: 'Produk', description: 'Daftar produk dan manajemen stok', youtube: 'https://youtu.be/...' },
  { title: 'Transaksi Produk', description: 'Catatan semua transaksi produk', youtube: 'https://youtu.be/...' },
  // Manajemen Inventaris
  { title: 'Inventaris', description: 'Pantau dan atur aset dan barang', youtube: 'https://youtu.be/...' },
  // Pengguna & Izin
  { title: 'Manajemen Pengguna', description: 'Kelola pengguna sistem dan akses izin', youtube: 'https://youtu.be/...' },
  { title: 'Izin Akun', description: 'Atur peran dan akses pengguna', youtube: 'https://youtu.be/...' },
  // Gudang
  { title: 'Data Gudang', description: 'Lihat dan kelola data gudang', youtube: 'https://youtu.be/...' },
  { title: 'Tambah Data Gudang', description: 'Input data gudang baru ke sistem', youtube: 'https://youtu.be/...' },
  // Keuangan Masuk & Keluar
  { title: 'Biaya Masuk', description: 'Catatan semua pemasukan dana', youtube: 'https://youtu.be/...' },
  { title: 'Pengeluaran', description: 'Pantau semua biaya keluar', youtube: 'https://youtu.be/...' },
];

const categories = {
  'Laporan Keuangan': ['Laporan Laba Rugi', 'Export PDF & Excel'],
  'Pembukuan': ['Buku Besar', 'Daftar Akun'],
  'Penjualan & Pemasok': ['Penjualan', 'Pemasok'],
  'Manajemen Produk': ['Produk', 'Transaksi Produk'],
  'Inventaris': ['Inventaris'],
  'Pengguna & Izin': ['Manajemen Pengguna', 'Izin Akun'],
  'Manajemen Gudang': ['Data Gudang', 'Tambah Data Gudang'],
  'Manajemen Keuangan': ['Biaya Masuk', 'Pengeluaran'],
};

export default function Vidio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredFeatures = features.filter((feature) => {
    const matchCategory =
      selectedCategory === 'Semua' || categories[selectedCategory]?.includes(feature.title);
    const matchSearch =
      feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white text-center px-4 sm:px-8 md:px-16 rounded-b-[40px] md:rounded-b-[80px] shadow-lg">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Welcome to our Help Center</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Panduan video untuk semua fitur sistem Anda.
        </p>

        <div className="relative max-w-md mx-auto">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-3.5 left-3" />
          <input
            type="text"
            placeholder="Cari fitur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-black"
          />
        </div>
      </section>

      <div className="mt-8 px-4 overflow-x-auto">
            <div className="flex flex-nowrap gap-3 w-max lg:justify-center lg:w-full">
                {['Semua', ...Object.keys(categories)].map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 whitespace-nowrap rounded-full border ${
                    selectedCategory === category
                        ? 'bg-sky-600 text-white border-sky-600'
                        : 'bg-white text-sky-600 border-sky-300 hover:bg-sky-100'
                    } transition`}
                >
                    {category}
                </button>
                ))}
            </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-bold text-gray-800">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
            <a
              href={feature.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sky-600 font-semibold hover:underline"
            >
              Lihat Video
            </a>
          </div>
        ))}
        {filteredFeatures.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">Fitur tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
