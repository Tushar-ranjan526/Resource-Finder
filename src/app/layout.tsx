import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/navbar";
import FooterPage from "@/Components/Footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        <FooterPage />
        </body>
    </html>
  );
}
