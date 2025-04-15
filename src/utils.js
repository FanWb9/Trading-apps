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
import { Package } from "lucide-react";
import { UserCog } from "lucide-react";

export const Menus = () => {
  const { t } = useTranslation();  // Inisialisasi useTranslation untuk menerjemahkan teks

  return [
    {
      name: t("Features"),  // Menggunakan t() untuk menerjemahkan
      subMenuHeading: [
        t("Akuntansi"),
        t("Supply Chain Management"),
        t("Integration & Platform"),
      ],
      subMenu: [
        {
          name: t("Laporan Keuangan"),  // Menerjemahkan nama menu
          desc: t("Laporan arus kas & neraca"),  // Menerjemahkan deskripsi
          icon: PanelsTopLeft,
          path: "/Laporan-Keuangan",
        },
        {
          name: t("Management Product"),
          desc: t("Atur produk secara detail"),
          icon: Package,
          category: t("Supply Chain Management"),
        },
        {
          name: t("User Management"),
          desc: t("Hak akses dan peran pengguna"),
          icon: UserCog,
          category: t("Integration & Platform"),
        },
        {
          name: t("Pembukuan"),
          desc: t("Catat transaksi harian"),
          icon: Database,
          category: t("Akuntansi"),
        },
        {
          name: t("Management Inventori"),
          desc: t("Pantau stok real-time"),
          icon: Warehouse,
          category: t("Supply Chain Management"),
        },
        {
          name: t("Pay"),
          desc: t("Integrasi pembayaran"),
          icon: CreditCard,
          category: t("Integration & Platform"),
        },
        {
          name: t("Perpajakan"),
          desc: t("Kelola pajak bisnis"),
          icon: Bolt,
          category: t("Akuntansi"),
        },
        {
          name: t("Management Gudang"),
          desc: t("Multi lokasi gudang"),
          icon: Building2,
          category: t("Supply Chain Management"),
        },
        {
          name: t("Pos & Marketplace"),
          desc: t("Sinkronisasi toko online"),
          icon: ShoppingCart,
          category: t("Integration & Platform"),
        },
        {
          name: t("Bank"),
          desc: t("Rekonsiliasi bank otomatis"),
          icon: CreditCard,
          category: t("Akuntansi"),
        },
        {
          name: t("Management Supplier"),
          desc: t("Kelola pemasok & pembelian"),
          icon: Users,
          category: t("Supply Chain Management"),
        },
        {
          name: t("Biaya & Pengeluaran"),
          desc: t("Pantau semua pengeluaran"),
          icon: Wallet,
          category: t("Akuntansi"),
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
        {
          name: t("Community"),
          desc: t("Project help"),
          icon: MessageCircle,
        },
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
        {
          name: t("Collaboration"),
          desc: t("Design together"),
          icon: Users,
        },
      ],
      gridCols: 1,
    },
    {
      name: t("Pricing"),
    },
    {
      name: t("Contact"),
    },
  ];
};
