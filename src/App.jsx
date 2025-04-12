import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavbarLayout from "./Layouts/NavbarLayout";
import LaporanKeuangan from "./pages/LaporanKeuangan";

export default function App() {
  return (
    <Routes>
      {/* Layout tanpa navbar */}
      <Route path="/login" element={<Login />} />

      {/* Layout dengan navbar */}
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
       
        <Route path="/Laporan-Keuangan" element={<LaporanKeuangan />} />
        {/* Tambah route lain di sini */}
      </Route>
    </Routes>
  );
}
