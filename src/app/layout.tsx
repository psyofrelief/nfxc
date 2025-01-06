import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NFXC_",
  description: "Access a list of Netflix secret genre codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen px-md xl:px-lg transition-colors duration-100 ease-out">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
