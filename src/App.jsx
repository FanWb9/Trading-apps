import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavbarLayout from "./Layouts/NavbarLayout";
import LaporanKeuangan from "./Pages/Akuntansi/LaporanKeuangan";


export default function App() {
  return (
    
    <Routes>
      {/* Layout dengan navbar */}
      <Route element={<NavbarLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Laporan-Keuangan" element={<LaporanKeuangan />} />
        {/* Tambah route lain di sini */}
      </Route>
      
    </Routes>
   
  );
}
