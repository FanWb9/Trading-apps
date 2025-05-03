import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import Logo from "../../assets/Logo.png";
import { Icons } from "./Menu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white lg:pl-36">
    <ItemsContainer />
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-6 lg:px-0 pt-6 text-gray-400 text-sm pb-8">
      
        <div className="flex flex-row items-start text-gray-300 gap-4">
          
          <img src={Logo} alt="Logo" className="h-12" />
          <div>
            <h3 className="mb-1 font-semibold">Alamat Kantor:</h3>
            <h2 className="font-semibold">
              Jl. SAWO III, KOMPLEK VILA SAWO KAV.36, KEL. CIPETE UTARA, KEC. KEBAYORAN BARU, KOTA. JAKARTA SELATAN, DKI JAKARTA 12150
            </h2>
            <p className="font-semibold">Telp: (021) 7243085</p>
            <p className="font-semibold">Email: ciptakarya.multi@gmail.com</p>
          </div>
        </div>

        {/* Kolom Tengah */}
        <div className="flex items-center justify-center text-center">
          <span className="font-bold">© 2025 PT CIPTA KARYA MULTI DINAMIKA</span>
        </div>

   
    </div>
       {/* Kolom Sosial Media */}
       <div className="flex items-center justify-center pb-16">
        <SocialIcons Icons={Icons} />
      </div>
  </footer>
  
  
  );
};

export default Footer;
