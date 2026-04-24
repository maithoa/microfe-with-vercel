import type { Metadata } from "next";
import { Header, Footer } from "@acme/ui";
import "./globals.css";
import { DM_Serif_Display, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Dashboard for Managing Acme Platform",
};

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"> 
      <body className={`min-h-screen bg-white flex flex-col items-center ${dmSerifDisplay.variable} ${dmSans.variable}`}>
        <Header />
        <main className = "flex-1 w-full flex flex-col items-center">{children}</main>      
        <Footer />
      </body>
    </html>
  );
}