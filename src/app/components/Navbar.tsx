"use client"
import React from 'react'
import { FaFilter } from "react-icons/fa";

type Props = {
  onSearchChange: (searchInput: string) => void;
};

const Navbar = (props: Props) => {  
  return (
    <div className='fixed variant-glass-primary border-b-4 border-red-500 top-0 w-full p-2 flex z-50 lg:px-80 sm:px-4'>
        <label className=' font-bold mx-10 m-2 text-primary-500'>PokeZone</label>
        <input className="input" type="text" placeholder="Search" onChange={e => props.onSearchChange(e.target.value)} />
        <button type="button" className="btn variant-filled-primary ml-2 mr-6"><FaFilter /></button>
    </div>
  )
}

export default Navbar