import "./globals.css";
import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>DineThreads - Premium Custom Apparel</title>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
