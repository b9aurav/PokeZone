"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { ModalContext, ModalProvider } from "./context/ModalContext";
import { useEffect } from "react";
import { fetchPokeData } from "./store/pokeSlice";

const inter = Inter({ subsets: ["latin"] });

function InitData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokeData() as any);
  }, [dispatch]);

  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="">
      <body className={inter.className} data-theme="crimson">
        <Provider store={store}>
          <InitData />
          <ModalProvider>{children}</ModalProvider>
        </Provider>
      </body>
    </html>
  );
}