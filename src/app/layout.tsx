import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

// import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { logo_header, SCENE_FILE } from "@/utils/files";
import Head from "next/head";
// import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "Lofi - Chìll",
  description: "Một nơi tuyệt vời để thư giãn",
  keywords: "lofi, tide.tulia, lofi-chill",
  authors: [{ url: "", name: "Tide D. Tulia" }],
  icons: {
    icon: [logo_header],
    apple: [logo_header],
    shortcut: [logo_header],
  },
  openGraph: {
    images: [SCENE_FILE.LOFI_CAFE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
