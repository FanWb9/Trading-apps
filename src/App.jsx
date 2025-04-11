import { Routes, Route, useNavigate } from "react-router-dom";
import { Menus } from "./utils";
import Logo from "./assets/logo.webp";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import Login from "./pages/Login"; // import halaman login

export default function App() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login"); // arahkan ke halaman login
  };

  return (
    <div>
      {/* Navbar */}
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A] z-50">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-8" />
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex-center gap-x-5">
            <button
              onClick={handleSignIn}
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>

      {/* Routing */}
      <div className="pt-20"> {/* biar kontennya gak ketutup navbar */}
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* kamu bisa tambahin route lain di sini */}
        </Routes>
      </div>
    </div>
  );
}
