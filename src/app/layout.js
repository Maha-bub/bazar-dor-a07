import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import MarqueePage from "./components/Marquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bazar Dor | বাজার দর",
  description: "It's a regular grocery product price status web application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-[#f9f5f5] text-base-content antialiased">
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Navbar />
        <MarqueePage></MarqueePage>
        <main className="w-full max-w-7xl mx-auto flex-1 px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
