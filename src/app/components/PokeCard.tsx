import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "../context/ModalContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchPokeInfo } from "../store/pokeSlice";

type Props = {
  id: number;
  name: string;
  data: any;
};

const PokeCard = (props: Props) => {
  const { setOpenModal } = useModal();

  console.log(props.data.types);

  return (
    <div className="my-1 flex justify-center">
      <div
        className="card p-4 my-8 w-56 h-80 relative variant-ghost-primary hover:variant-filled-primary transition duration-500 ease-in-out rounded-b-[75px] rounded-t-[15px]"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex items-center relative">
          <label className=" text-white font-bold text-[20px] transition-transform duration-500 ease-in-out transform hover:scale-125 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {String(props.data.name).toUpperCase()}
          </label>
          <span className="chip variant-filled right-[-25px] absolute">
            #{props.id}
          </span>
        </div>
        <div className="w-full">
          {props.data.types.map((typeObj: any, index: number) => (
            <span className="chip variant-filled-error mr-1 mt-1" key={typeObj.type.name}>{typeObj.type.name}</span>
          ))}
        </div>
        <Image
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
          alt="image"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="transition-transform duration-500 ease-in-out transform hover:scale-125 hover:drop-shadow-2xl pt-16"
        />
      </div>
    </div>
  );
};

export default PokeCard;
