"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PokeCard from "./components/PokeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokeData } from "./store/pokeSlice";
import { RootState } from "./store/store";
import Modal from "./components/Modal";

export default function Home() {
  const data: any = useSelector((state: RootState) => state.poke.data) || [];

  console.log(data);

  return (
    <main className="h-full w-full">
      <Navbar />
      <Modal />
      <div className="mt-20 lg:px-52 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4">
        {Object.keys(data).map((key: string, index, value) => (
          <PokeCard key={index} id={index + 1} data={data[key]} name={data[key].name} />
        ))}   
      </div>
    </main>
  );
}
