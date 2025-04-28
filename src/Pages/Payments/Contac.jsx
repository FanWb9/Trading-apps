import { ChatBubbleLeftRightIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Contac(){
    return (
        <section className="py-16 bg-white text-center px-16 h-[80vh]">
          <h2 className="text-gray-700 font-semibold mb-2 py-16">Hubungi Kami</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Bicarakan Kebutuhan Bisnis Anda Bersama Kami
          </h1>
    
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Live Chat */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-4">
                <ChatBubbleLeftRightIcon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Terhubung langsung dengan konsultan kami melalui web chat atau telepon untuk solusi cepat.
              </p>
              <button
                onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
                className="bg-blue-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-semibold hover:bg-blue-700"
              >
                Chat whatsApp
              </button>
            </div>
    
            {/* Call Center */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-4">
                <PhoneIcon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Center</h3>
              <p className="text-gray-600 mb-6">
                Diskusikan berbagai kebutuhan bisnis Anda bersama tim kami. <br />
                Jam Operasional: 09.00 – 17.00 WIB
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
              (021) 7243085
              </button>
            </div>
    
            {/* Jadwal Meeting */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-4">
                <CalendarDaysIcon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jadwalkan Meeting</h3>
              <p className="text-gray-600 mb-6">
                Pilih waktu terbaik Anda untuk sesi demo pribadi bersama tim profesional kami.
              </p>
              <button
                onClick={() => window.location.href = "https://wa.me/6285215319526?text=Halo%2C%20Saya%20ingin%20tanya%20tentang%20thecore"}
                className="bg-blue-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-semibold hover:bg-blue-700"
              >
                Chat whatsApp
              </button>
            </div>
          </div>
        </section>
    );
}