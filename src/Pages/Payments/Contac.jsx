import { ChatBubbleLeftRightIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Contac() {
  return (
    <section className="py-20 bg-white text-center px-4 sm:px-8 md:px-16 min-h-screen">
      <h2 className="text-gray-700 font-semibold mb-2">Hubungi Kami</h2>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Bicarakan Kebutuhan Bisnis Anda Bersama Kami
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
        {/* Live Chat */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <ChatBubbleLeftRightIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Terhubung langsung dengan konsultan kami melalui web chat atau telepon untuk solusi cepat.
          </p>
          <button
            onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 w-full"
          >
            Chat WhatsApp
          </button>
        </div>

        {/* Call Center */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <PhoneIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Center</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Diskusikan berbagai kebutuhan bisnis Anda bersama tim kami. <br />
            Jam Operasional: 09.00 – 17.00 WIB
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full font-semibold">
            (021) 7243085
          </button>
        </div>

        {/* Jadwal Meeting */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-4">
            <CalendarDaysIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Jadwalkan Meeting</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Pilih waktu terbaik Anda untuk sesi demo pribadi bersama tim profesional kami.
          </p>
          <button
            onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 w-full"
          >
            Chat WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
