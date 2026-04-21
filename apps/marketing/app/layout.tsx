import type { Metadata } from "next";
import { Header, Footer } from "@acme/ui"
import "./globals.css";

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
    <html lang="en">     
      <body className="min-h-screen bg-white flex flex-col items-center">
        <Header />
        <main className = "flex-1 w-full flex flex-col items-center">{children}</main>      
        <Footer />
      </body>
    </html>
  );
}