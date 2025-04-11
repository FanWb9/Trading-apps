import { Bolt, Cat } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
import { Warehouse } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Wallet } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Building2 } from "lucide-react";
import { Package } from "lucide-react";
import { UserCog } from "lucide-react";


export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Akuntansi", "Supply Chain Management", "Integration & Platform"],
    subMenu: [
      {
        name: "Laporan Keuangan",
        desc: "Laporan arus kas & neraca",
        icon: PanelsTopLeft,
        path: "/Laporan-Keuangan",
      },
      {
        name: "Management Product",
        desc: "Atur produk secara detail",
        icon: Package,
        category: "Supply Chain Management"
      },
      {
        name: "User Management",
        desc: "Hak akses dan peran pengguna",
        icon: UserCog,
        category: "Integration & Platform"
      },
      {
        name: "Pembukuan",
        desc: "Catat transaksi harian",
        icon: Database,
        category: "Akuntansi"
      },
      {
        name: "Management Inventori",
        desc: "Pantau stok real-time",
        icon: Warehouse,
        category: "Supply Chain Management"
      },
      {
        name: "Pay",
        desc: "Integrasi pembayaran",
        icon: CreditCard,
        category: "Integration & Platform"
      },
      {
        name: "Perpajakan",
        desc: "Kelola pajak bisnis",
        icon: Bolt,
        category: "Akuntansi"
      },
      {
        name: "Management Gudang",
        desc: "Multi lokasi gudang",
        icon: Building2,
        category: "Supply Chain Management"
      },
      {
        name: "Pos & Marketplace",
        desc: "Sinkronisasi toko online",
        icon: ShoppingCart,
        category: "Integration & Platform"
      },
      {
        name: "Bank",
        desc: "Rekonsiliasi bank otomatis",
        icon: CreditCard,
        category: "Akuntansi"
      },
      {
        name: "Management Supplier",
        desc: "Kelola pemasok & pembelian",
        icon: Users,
        category: "Supply Chain Management"
      },
      {
        name: "Biaya & Pengeluaran",
        desc: "Pantau semua pengeluaran",
        icon: Wallet,
        category: "Akuntansi"
      }
    
    ],
    gridCols: 3,
  },
  
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
      },
     
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
     
     
    ],
    gridCols: 1,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
