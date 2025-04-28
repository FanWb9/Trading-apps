import { Bolt, Cat } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Users } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Warehouse } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Wallet } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { CreditCard } from "lucide-react";
import { Building2 } from "lucide-react";
import {BadgeDollarSign} from "lucide-react";
import {HandCoins} from "lucide-react";
import { Package } from "lucide-react";
import { UserCog } from "lucide-react";

import { path } from "framer-motion/client";

export const Menus = () => {
  const { t } = useTranslation();  // Inisialisasi useTranslation untuk menerjemahkan teks

  return [
    {
      name: t("Features"),  // Menggunakan t() untuk menerjemahkan
    
      subMenu: [
        {
          name: t("Laporan Keuangan"),  
          desc: t("Laporan arus kas & neraca"),  
          icon: PanelsTopLeft,
          path: "/Financial-Report",
        },
        {
          name: t("Management Product"),
          desc: t("Atur produk secara detail"),
          icon: Package,
          path:"/Product",
        },
        {
          name: t("User Management"),
          desc: t("Hak akses dan peran pengguna"),
          icon: UserCog,
          path: "/User-management",
          // category: t("Integration & Platform"),
        },
        {
          name: t("Pembukuan"),
          desc: t("Catat transaksi harian"),
          icon: Database,
          category: t("Akuntansi"),
          path: "/Bookkeeping",
        },
        {
          name: t("Management Inventori"),
          desc: t("Pantau stok real-time"),
          icon: Warehouse,
          path: "/Inventaris"
        },
        // {
        //   name: t("Pay"),
        //   desc: t("Integrasi pembayaran"),
        //   icon: CreditCard,
        //   category: t("Integration & Platform"),
        // },
        // {
        //   name: t("Perpajakan"),
        //   desc: t("Kelola pajak bisnis"),
        //   icon: Bolt,
        //   category: t("Akuntansi"),
        // },
        {
          name: t("Management Gudang"),
          desc: t("Multi lokasi gudang"),
          icon: Building2,
          path: "/Warehouse"
        },
        // {
        //   name: t("Pos & Marketplace"),
        //   desc: t("Sinkronisasi toko online"),
        //   icon: ShoppingCart,
        //   category: t("Integration & Platform"),
        // },
        // {
        //   name: t("Bank"),
        //   desc: t("Rekonsiliasi bank otomatis"),
        //   icon: HandCoins,
        //   // category: t("Akuntansi"),
        // },
        {
          name: t("Management Supplier"),
          desc: t("Kelola pemasok & pembelian"),
          icon: Users,
          path:"/Supplier-management"
          // category: t("Supply Chain Management"),
        },
        {
          name: t("Biaya & Pengeluaran"),
          desc: t("Pantau semua pengeluaran"),
          icon: Wallet,
          path: "/Costs-expenses",
          // category: t("Akuntansi"),
        },
        {
          name: t("Management Pembayaran"),
          desc: t("Pantau Keuangan"),
          icon: HandCoins,
          path: "/Costs-expenses",
          // category: t("Akuntansi"),
        },
      ],
      gridCols: 3,
    },

    {
      name: t("Support"),
      subMenu: [
        {
          name: t("Help"),
          desc: t("Center"),
          icon: CircleHelp,
        },
        // {
        //   name: t("Community"),
        //   desc: t("Project help"),
        //   icon: MessageCircle,
        // },
      ],
      gridCols: 1,
    },
    {
      name: t("Enterprise"),
      subMenuHeading: [t("Overview")],
      subMenu: [
        {
          name: t("Enterprise"),
          desc: t("Overview"),
          icon: ShieldPlus,
        },
        // {
        //   name: t("Collaboration"),
        //   desc: t("Design together"),
        //   icon: Users,
        // },
      ],
      gridCols: 1,
    },
    {
      name: t("Info"), 
      subMenu: [
        {
          name: t("Pricing"),
          desc: t("See our pricing plans"),
          path: "/Price",
          icon: BadgeDollarSign,
        },
        {
          name: t("Contact"),
          desc: t("Get in touch with us"),
          path: "/Contac",
          icon: Users,
        },
      ],
      gridCols: 1,
    }
    
  ];
};
