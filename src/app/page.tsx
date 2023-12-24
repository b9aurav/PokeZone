"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PokeCard from "./components/PokeCard";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Home() {
  const data: any = useSelector((state: RootState) => state.poke.data) || [];
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');

  const filteredData = Object.keys(data)
  .filter(key => {
    const matchesSearch = 
      data[key].name.toLowerCase().includes(searchInput.toLowerCase()) ||
      data[key].id.toString().includes(searchInput);

    const matchesFilter = filter === '' || 
      data[key].types.some((type: any) => type.type.name === filter);

    return matchesSearch && matchesFilter;
  })
  .map((key) => (
    <PokeCard key={data[key].id} id={data[key].id} data={data[key]} name={data[key].name} />
  ));
 
  return (
    <main className="h-full w-full">
      <Navbar onSearchChange={setSearchInput} onFilterChange={setFilter} />
      <div className="mt-20 lg:px-52 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4">
        {filteredData}
      </div>
    </main>
  );
}
