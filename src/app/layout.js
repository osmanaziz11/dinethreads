import "./globals.css";

import { Navbar, Footer } from "@/components";
import ProgressBar from "@/components/ProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>DineThreads - Premium Custom Apparel</title>
      <body className={`antialiased`}>
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
