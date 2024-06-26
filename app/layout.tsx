import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TwScreenInfo from "@/components/custom/TwScreenInfo";
import BackToTopButton from "@/components/custom/BacktoTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manparth",
  description: "A New Vision of Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <BackToTopButton/>
       </body>
    </html>
  );
}
