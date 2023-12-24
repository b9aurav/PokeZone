"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";

type Props = {
  onSearchChange: (searchInput: string) => void;
  onFilterChange: (filter: string) => void;
};

const Navbar = (props: Props) => {
  const types: any = useSelector((state: RootState) => state.poke.types) || [];

  return (
    <div className="fixed variant-glass-primary border-b-4 border-red-500 top-0 w-full justify-center items-center p-2 flex z-50 lg:px-80 sm:px-4">
      <div className="flex justify-center items-center mr-2 lg:mr-10 w-36">
      <Image src="/pokeball.svg" alt="pokeball" width={50} height={50} />
      <label className=" font-bold text-black hidden lg:block dark:text-[white]">PokeZone</label>
      </div>
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <select className="select mx-4 rounded-[20px]" name="filter" id="filter" onChange={e => props.onFilterChange(e.target.value)}>
        <option value="">All</option>
        {types.map((type: any) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
      <ThemeToggleButton onToggle={()=>{document.querySelector('html')?.classList.toggle('dark')}}/>
    </div>
  );
};

export default Navbar;
