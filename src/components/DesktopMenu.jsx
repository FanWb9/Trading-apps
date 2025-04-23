import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const { t } = useTranslation(); // Menyediakan fungsionalitas terjemahan

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className="flex-center gap-1 hover:bg-white/90 cursor-pointer px-3 py-1 rounded-xl">
        {t(menu.name)} {/* Menggunakan t() untuk menerjemahkan menu name */}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
               
                <Link
                  to={submenu.path}
                  className="flex-center gap-x-4 group/menubox"
                >
                  <div className="bg-white/50 w-fit p-2 rounded-md group-hover/menubox:bg-emerald-600 group-hover/menubox:text-gray-900 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold text-black">{t(submenu.name)}</h6> {/* Terjemahkan submenu name */}
                    <p className="text-sm text-black">{t(submenu.desc)}</p> {/* Terjemahkan submenu desc */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
