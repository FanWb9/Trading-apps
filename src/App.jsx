import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavbarLayout from "./Layouts/NavbarLayout";
import LaporanKeuangan from "./Pages/Akuntansi/LaporanKeuangan";
import Pembukuan from "./Pages/Akuntansi/Pembukuan";
import Harga from "./Pages/Payments/Harga";
import ScrollTop from "./Layouts/ScrollTop";
import Product from "./Pages/Product/Product";
import Inventaris from "./Pages/Product/Inventaris"

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Financial-Report" element={<LaporanKeuangan />} />
          <Route path="/Bookkeeping" element={<Pembukuan />} />
          <Route path="/Price" element={<Harga/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Inventaris" element={<Inventaris/>}/>
        </Route>
      </Routes>
    </>
  );
}
