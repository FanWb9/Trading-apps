import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const faqs = [
 
    { question: 'Apa itu sistem keuangan?', answer: 'Sistem keuangan adalah platform untuk mengelola laporan keuangan, pembukuan, dan transaksi perusahaan secara terintegrasi, termasuk pengelolaan aset dan kewajiban perusahaan.', category: 'Sistem Keuangan' },
    { question: 'Bagaimana cara mengekspor laporan keuangan?', answer: 'Anda dapat mengekspor laporan keuangan ke format PDF atau Excel dari menu laporan keuangan di dashboard untuk analisis lebih lanjut atau keperluan pelaporan.', category: 'Laporan Keuangan' },
    { question: 'Apa itu buku besar?', answer: 'Buku besar adalah catatan yang mencatat semua transaksi keuangan perusahaan berdasarkan akun-akun yang dikelompokkan dalam kategori tertentu, seperti aset, kewajiban, pendapatan, dan pengeluaran.', category: 'Pembukuan' },
    { question: 'Bagaimana cara menambah produk?', answer: 'Produk dapat ditambahkan melalui menu manajemen produk di dashboard dengan mengisi informasi terkait seperti nama produk, harga, kategori, dan jumlah stok yang tersedia.', category: 'Manajemen Produk' },
    { question: 'Bagaimana cara melacak transaksi keuangan?', answer: 'Transaksi keuangan dapat dilacak melalui menu buku besar dan laporan keuangan di dashboard, yang memungkinkan pengguna untuk memantau semua arus kas dan perubahan akun keuangan secara real-time.', category: 'Sistem Keuangan' },
    { question: 'Apa yang dimaksud dengan laporan laba rugi?', answer: 'Laporan laba rugi adalah laporan yang menunjukkan kinerja keuangan perusahaan selama periode tertentu, dengan merinci pendapatan, biaya, dan laba atau rugi yang diperoleh perusahaan.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara mengelola data gudang?', answer: 'Data gudang dapat dikelola melalui menu manajemen gudang di dashboard, yang memungkinkan pengguna untuk menambah, mengedit, atau menghapus informasi tentang barang dan stok yang ada di gudang perusahaan.', category: 'Manajemen Gudang' },
    { question: 'Bagaimana cara menambah pengguna sistem?', answer: 'Pengguna baru dapat ditambahkan melalui menu manajemen pengguna di dashboard dengan menentukan role, akses, dan izin yang diberikan kepada setiap pengguna dalam sistem.', category: 'Pengguna & Izin' },
    { question: 'Apa itu laporan penjualan?', answer: 'Laporan penjualan mencatat semua transaksi penjualan produk atau layanan perusahaan, termasuk jumlah unit yang terjual, pendapatan, dan margin keuntungan yang diperoleh dari penjualan tersebut.', category: 'Penjualan' },
    { question: 'Bagaimana cara mengelola pemasok?', answer: 'Pemasok dapat dikelola melalui menu pemasok di dashboard, termasuk memantau transaksi pembelian, pengaturan pembayaran, dan hubungan dengan pemasok untuk memastikan kelancaran rantai pasokan.', category: 'Penjualan' },
    { question: 'Apa itu inventaris?', answer: 'Inventaris adalah daftar barang atau aset yang dimiliki oleh perusahaan, yang dikelola dan dipantau melalui sistem untuk memastikan ketersediaan barang dan menghindari kelebihan atau kekurangan stok.', category: 'Inventaris' },
    { question: 'Bagaimana cara mengelola produk?', answer: 'Produk dapat dikelola melalui menu manajemen produk, di mana pengguna dapat menambahkan, mengedit, atau menghapus produk, serta mengatur harga dan deskripsi produk untuk keperluan penjualan.', category: 'Manajemen Produk' },
    { question: 'Bagaimana cara menambahkan kategori produk?', answer: 'Kategori produk dapat ditambahkan melalui menu kategori produk di dashboard, yang memudahkan pengelompokan produk berdasarkan jenis atau kategori tertentu untuk memudahkan pencarian dan analisis.', category: 'Manajemen Produk' },
    { question: 'Bagaimana cara melihat laporan keuangan?', answer: 'Laporan keuangan dapat diakses melalui menu laporan keuangan di dashboard, yang memberikan gambaran menyeluruh mengenai pendapatan, pengeluaran, dan posisi keuangan perusahaan dalam periode tertentu.', category: 'Laporan Keuangan' },
    { question: 'Apa itu biaya masuk?', answer: 'Biaya masuk adalah pemasukan dana yang tercatat dalam sistem keuangan perusahaan untuk operasional dan pengeluaran lainnya, seperti pembayaran utang atau belanja modal.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Bagaimana cara memantau pengeluaran?', answer: 'Pengeluaran dapat dipantau melalui menu pengeluaran di dashboard, yang memungkinkan pengguna untuk mencatat dan memantau aliran uang keluar, serta memverifikasi setiap transaksi pengeluaran yang terjadi.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu transaksi produk?', answer: 'Transaksi produk mencatat setiap pembelian atau penjualan produk dalam sistem, termasuk jumlah, harga, dan status transaksi yang memungkinkan perusahaan untuk memantau arus barang dan pendapatan.', category: 'Manajemen Produk' },
    { question: 'Bagaimana cara mengatur izin pengguna?', answer: 'Izin pengguna dapat diatur melalui menu pengaturan izin pengguna di dashboard, yang memungkinkan administrator untuk memberikan akses tertentu kepada pengguna sesuai dengan role dan tanggung jawab mereka dalam sistem.', category: 'Pengguna & Izin' },
    { question: 'Bagaimana cara memantau transaksi pemasok?', answer: 'Transaksi pemasok dapat dipantau melalui menu pemasok di dashboard, yang memungkinkan pengguna untuk melacak setiap transaksi pembelian, pembayaran, dan pengaturan pemasok yang terlibat dalam proses pengadaan barang.', category: 'Penjualan' },
    { question: 'Apa itu laporan transaksi?', answer: 'Laporan transaksi memberikan rincian tentang setiap transaksi yang terjadi dalam sistem, termasuk tanggal, jenis transaksi, dan status transaksi untuk keperluan audit dan pelaporan keuangan.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara menambah data gudang?', answer: 'Data gudang dapat ditambahkan melalui menu tambah data gudang di dashboard dengan mencatat barang-barang baru yang diterima, termasuk jumlah dan kondisi barang sebelum dimasukkan ke dalam inventaris.', category: 'Manajemen Gudang' },
    { question: 'Bagaimana cara mengelola akun pembukuan?', answer: 'Akun pembukuan dapat dikelola melalui menu daftar akun di dashboard, di mana pengguna dapat menambah, mengedit, atau menghapus akun-akun yang terkait dengan transaksi keuangan perusahaan, seperti akun pendapatan, pengeluaran, atau utang.', category: 'Pembukuan' },
    { question: 'Apa itu laporan pemasok?', answer: 'Laporan pemasok adalah laporan yang menunjukkan rincian transaksi dengan pemasok, termasuk barang yang dibeli, harga, dan pembayaran yang dilakukan untuk setiap transaksi yang melibatkan pemasok.', category: 'Penjualan' },
    { question: 'Bagaimana cara membuat laporan transaksi?', answer: 'Laporan transaksi dapat dibuat dengan memilih periode waktu dan jenis transaksi yang diinginkan di menu laporan, memungkinkan pengguna untuk mendapatkan gambaran yang jelas tentang semua transaksi dalam periode tertentu.', category: 'Laporan Keuangan' },
    { question: 'Apa itu laporan laba rugi?', answer: 'Laporan laba rugi adalah laporan yang merinci pendapatan dan biaya perusahaan, serta laba atau rugi yang dihasilkan dalam periode tertentu, memberikan informasi mengenai kinerja keuangan perusahaan.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara mengelola aset tetap?', answer: 'Aset tetap dapat dikelola melalui menu pengelolaan aset di dashboard, termasuk pencatatan aset yang dimiliki perusahaan seperti peralatan, kendaraan, dan properti, serta pemantauan nilai dan umur aset.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Bagaimana cara mengatur anggaran perusahaan?', answer: 'Anggaran perusahaan dapat diatur dan dipantau melalui menu pengaturan anggaran di dashboard, yang memungkinkan pengguna untuk menetapkan dan mengikuti alokasi dana untuk berbagai departemen atau proyek dalam perusahaan.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu saldo bank?', answer: 'Saldo bank adalah jumlah dana yang tersedia di rekening perusahaan yang digunakan untuk melakukan transaksi pembayaran atau penerimaan uang dari klien atau pemasok.', category: 'Sistem Keuangan' },
    { question: 'Bagaimana cara melacak arus kas?', answer: 'Arus kas dapat dilacak melalui menu laporan arus kas di dashboard, yang memberikan informasi mengenai pemasukan dan pengeluaran perusahaan selama periode tertentu, serta saldo kas yang tersedia.', category: 'Sistem Keuangan' },
    { question: 'Bagaimana cara mengelola pajak perusahaan?', answer: 'Pajak perusahaan dapat dikelola melalui menu pengaturan pajak di dashboard, yang memungkinkan pengguna untuk mencatat transaksi pajak yang terutang, serta menghitung dan membayar pajak sesuai dengan ketentuan yang berlaku.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu biaya tetap?', answer: 'Biaya tetap adalah biaya yang tetap dan tidak berubah terlepas dari tingkat produksi atau penjualan perusahaan, seperti sewa, gaji karyawan tetap, dan biaya lainnya yang tidak tergantung pada aktivitas perusahaan.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Bagaimana cara mengelola pengeluaran operasional?', answer: 'Pengeluaran operasional dapat dikelola melalui menu pengeluaran operasional di dashboard, yang memungkinkan pengguna untuk memantau dan mengendalikan biaya yang diperlukan untuk menjalankan aktivitas perusahaan sehari-hari.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Bagaimana cara mengelola pengeluaran modal?', answer: 'Pengeluaran modal dapat dikelola melalui menu pengeluaran modal di dashboard, yang memungkinkan perusahaan untuk mencatat investasi pada aset tetap atau proyek-proyek yang memerlukan dana besar.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu rasio keuangan?', answer: 'Rasio keuangan adalah alat analisis yang digunakan untuk menilai kinerja keuangan perusahaan, seperti rasio profitabilitas, likuiditas, dan solvabilitas yang membantu dalam pengambilan keputusan investasi dan manajemen keuangan.', category: 'Sistem Keuangan' },
    { question: 'Bagaimana cara membuat anggaran proyek?', answer: 'Anggaran proyek dapat dibuat melalui menu pengelolaan proyek di dashboard, yang memungkinkan pengguna untuk mengalokasikan dana untuk proyek tertentu dan memantau realisasi anggaran sepanjang pelaksanaan proyek.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Bagaimana cara mengelola pembayaran utang?', answer: 'Pembayaran utang dapat dikelola melalui menu pembayaran utang di dashboard, yang memungkinkan perusahaan untuk melacak utang yang harus dibayar dan mencatat pembayaran yang telah dilakukan kepada kreditor.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu laporan arus kas?', answer: 'Laporan arus kas menunjukkan semua aliran kas yang masuk dan keluar dari perusahaan selama periode tertentu, yang membantu dalam mengevaluasi kemampuan perusahaan untuk memenuhi kewajiban jangka pendeknya.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara mengelola utang usaha?', answer: 'Utang usaha dapat dikelola melalui menu utang usaha di dashboard, di mana pengguna dapat mencatat dan melacak kewajiban yang harus dibayar kepada pemasok atau pihak lain yang terkait.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu laporan perubahan ekuitas?', answer: 'Laporan perubahan ekuitas menunjukkan perubahan dalam ekuitas pemilik perusahaan selama periode tertentu, termasuk kontribusi pemilik dan laba atau rugi yang dihasilkan oleh perusahaan.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara mengelola cadangan dana?', answer: 'Cadangan dana dapat dikelola melalui menu pengelolaan cadangan di dashboard, yang memungkinkan pengguna untuk menyisihkan dana untuk keperluan masa depan atau keadaan darurat perusahaan.', category: 'Keuangan Masuk & Keluar' },
    { question: 'Apa itu laporan neraca?', answer: 'Laporan neraca adalah laporan yang menunjukkan posisi keuangan perusahaan pada titik waktu tertentu, mencakup aset, kewajiban, dan ekuitas perusahaan.', category: 'Laporan Keuangan' },
    { question: 'Bagaimana cara memantau inventaris barang?', answer: 'Inventaris barang dapat dipantau melalui menu inventaris di dashboard, yang menunjukkan jumlah dan status barang yang tersedia dalam gudang, serta riwayat masuk dan keluar barang.', category: 'Inventaris' },
    { question: 'Bagaimana cara menambahkan laporan bank?', answer: 'Laporan bank dapat ditambahkan melalui menu laporan bank di dashboard, yang mencatat setiap transaksi keuangan yang terkait dengan rekening bank perusahaan, seperti setoran, penarikan, atau biaya bank.', category: 'Laporan Keuangan' }
  ];

const categories = {
'Sistem Keuangan': ['Apa itu sistem keuangan?', 'Bagaimana cara melacak transaksi keuangan?', 'Apa itu laporan laba rugi?'],
  'Laporan Keuangan': ['Bagaimana cara mengekspor laporan keuangan?', 'Apa itu laporan laba rugi?', 'Bagaimana cara melihat laporan keuangan?'],
  'Pembukuan': ['Apa itu buku besar?', 'Bagaimana cara mengelola akun pembukuan?'],
  'Manajemen Produk': ['Bagaimana cara menambah produk?', 'Bagaimana cara mengelola produk?', 'Bagaimana cara menambah kategori produk?'],
  'Penjualan': ['Apa itu laporan penjualan?', 'Bagaimana cara mengelola pemasok?', 'Bagaimana cara memantau transaksi pemasok?'],
  'Manajemen Gudang': ['Bagaimana cara melacak pengeluaran?', 'Bagaimana cara menambah data gudang?'],
  'Pengguna & Izin': ['Bagaimana cara menambah pengguna sistem?', 'Bagaimana cara mengatur izin pengguna?'],
  'Keuangan Masuk & Keluar': ['Apa itu biaya masuk?', 'Bagaimana cara melacak pengeluaran?', 'Bagaimana cara mengelola pengeluaran operasional?', 'Bagaimana cara mengelola pengeluaran modal?'],
  'Inventaris': ['Apa itu inventaris?', 'Bagaimana cara memantau inventaris barang?', 'Bagaimana cara mengelola cadangan dana?'],
  
};

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredFaqs = faqs.filter((faq) => {
    const matchCategory =
      selectedCategory === 'Semua' || categories[selectedCategory]?.includes(faq.question);
    const matchSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-600 text-white text-center px-4 sm:px-8 md:px-16 rounded-b-[40px] md:rounded-b-[80px] shadow-lg">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Cari jawaban dari pertanyaan umum mengenai sistem.
        </p>

        <div className="relative max-w-md mx-auto">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-3.5 left-3" />
          <input
            type="text"
            placeholder="Cari pertanyaan..."
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

      <div className="mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold text-gray-800">{faq.question}</h2>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">FAQ tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
