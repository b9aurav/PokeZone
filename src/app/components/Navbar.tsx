"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  onSearchChange: (searchInput: string) => void;
  onFilterChange: (filter: string) => void;
};

const Navbar = (props: Props) => {
  const types: any = useSelector((state: RootState) => state.poke.types) || [];

  return (
    <div className="fixed variant-glass-primary border-b-4 border-red-500 top-0 w-full p-2 flex z-50 lg:px-80 sm:px-4">
      <label className=" font-bold mx-4 m-2 text-primary-500">PokeZone</label>
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <select className="select mx-4 rounded-full" name="filter" id="filter" onChange={e => props.onFilterChange(e.target.value)}>
        <option value="">All</option>
        {types.map((type: any) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
