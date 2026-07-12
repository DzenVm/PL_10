import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "Butikowy hotel 5* z salonem gier w Warszawie",
    template: "%s | Hotel butikowy w Warszawie",
  },
  description:
    "Butikowy hotel pięciogwiazdkowy w centrum Warszawy z prywatnym salonem gier, spa i restauracją. Odkryj ekskluzywny wypoczynek w sercu miasta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <a href="#main-content" className="skip-link">
          Przejdź do treści
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
