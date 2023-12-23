"use client"
import React from 'react'
import { FaFilter } from "react-icons/fa";

type Props = {}

const Navbar = (props: Props) => {  
  return (
    <div className='fixed top-0 w-full p-2 flex'>
        <label className=' font-bold mx-10 m-2 text-primary-500'>PokeZone</label>
        <input className="input" type="text" placeholder="Search" />
        <button type="button" className="btn variant-filled-primary ml-2"><FaFilter /></button>
    </div>
  )
}

export default Navbar