import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Epilogue } from "next/font/google";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "WigAura",
  description: "Discover your ultimate look",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>{children}</body>
    </html>
  );
}
