import type { Metadata } from "next";
import { Goudy_Bookletter_1911, Kalam, Roboto } from "next/font/google";
import "./globals.css";

const goudyBookletter = Goudy_Bookletter_1911({
  variable:"--font-goudy",
  weight: "400",
  display: "swap"
});

const kalam = Kalam({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-kalam"
})

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Book up",
  description: "Encontrá tu nuevo libro favorito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${kalam.variable} ${roboto.variable} ${goudyBookletter.variable} ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
