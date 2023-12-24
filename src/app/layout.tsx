"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootState, store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchPokeData } from "./store/pokeSlice";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={inter.className} data-theme="crimson">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
