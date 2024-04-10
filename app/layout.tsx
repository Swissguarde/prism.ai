import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glisten.ai - The Design Assistant of the Future.",
  description:
    "With Glisten.ai you save hours of time on wireframes, mockups and final designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#070815] text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
