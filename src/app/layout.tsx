"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PokeProvider } from "./context/PokeContext";
import { store } from "./store/store";
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} data-theme="crimson">
        <Provider store={store}><PokeProvider>{children}</PokeProvider></Provider>
      </body>
    </html>
  );
}
