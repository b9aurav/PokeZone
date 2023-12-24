"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "./store/store";
import { Provider, useDispatch } from "react-redux";
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
          {children}
        </Provider>
      </body>
    </html>
  );
}