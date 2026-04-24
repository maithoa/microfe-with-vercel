import type { Metadata } from "next";
import { Header, Footer } from "@acme/ui";
import "./globals.css";
import { DM_Serif_Display, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Dashboard for Managing Acme Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"> 
      <body className="min-h-screen bg-white flex flex-col items-center">
        <Header />
        <main className = "flex-1 w-full flex flex-col items-center">{children}</main>      
        <Footer />
      </body>
    </html>
  );
}