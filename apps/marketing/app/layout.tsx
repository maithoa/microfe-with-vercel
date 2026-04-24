import type { Metadata } from "next";
import { Header, Footer } from "@acme/ui"
import "./globals.css";
import { DM_Serif_Display, DM_Sans } from "next/font/google"

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Acme Platform",
  description: "The everything platform for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>     
      <body className="min-h-screen bg-white flex flex-col items-center font-sans">
        <Header />
        <main className = "flex-1 w-full flex flex-col items-center">{children}</main>      
        <Footer />
      </body>
    </html>
  );
}