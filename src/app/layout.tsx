import "./globals.css";
// import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import type { Metadata } from "next";

import { StoreProvider } from "@/store/StoreProvider";
import { logo_header, SCENE_FILE } from "@/utils/files";
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
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        </head>
        <body style={{ fontFamily: "Inter, sans-serif" }}>{children}</body>
      </html>
    </StoreProvider>
  );
}
