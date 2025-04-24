import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavbarLayout from "./Layouts/NavbarLayout";
import LaporanKeuangan from "./Pages/Akuntansi/LaporanKeuangan";
import Pembukuan from "./Pages/Akuntansi/Pembukuan";
import ScrollTop from "./Layouts/ScrollTop";

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Laporan-Keuangan" element={<LaporanKeuangan />} />
          <Route path="/Pembukuan" element={<Pembukuan />} />
        </Route>
      </Routes>
    </>
  );
}
