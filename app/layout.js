import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Amalie & Ole Andreas | Bryllup på Lyngør",
  description:
    "Velkommen til bryllupet til Amalie og Ole Andreas på Lyngør, 6.-8. august.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
