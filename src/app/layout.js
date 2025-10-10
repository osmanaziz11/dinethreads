import "./globals.css";

import { Navbar, Footer } from "@/components";
import ProgressBar from "@/components/ProgressBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>DineThreads - Premium Custom Apparel</title>
      <body className={`antialiased`}>
        <ProgressBar />
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
