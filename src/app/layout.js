import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import { ToastContainer } from 'react-toastify';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store - Your One-Stop Shop for All Your Summer Needs! Discover a wide range of products to make your summer unforgettable. From stylish swimwear and trendy sunglasses to beach accessories and outdoor gear, we have everything you need to enjoy the sunny season. Shop now and get ready for a summer full of fun and relaxation with SunCart!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <Footer></Footer>
        <ToastContainer position="top-center"
          autoClose={2000} />
      </body>
    </html>
  );
}
