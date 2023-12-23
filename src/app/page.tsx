"use client"
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import PokeCard from "./components/PokeCard";

export default function Home() {
  const [pokeIds, setPokeIds] = useState([1,2,3,4,5]);

  return (
    <main>
      <Navbar />
      <div className='h-full m-20 flex'>
        {pokeIds.map(id => <PokeCard key={id} id={id} />)}
      </div>
    </main>
  );
}