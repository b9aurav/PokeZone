import { useModal } from "../context/ModalContext";
import Image from "next/image";
import RadialProgressBar from "./RadialProgressBar";
import React, { useEffect, useState } from "react";

type Props = {
  image: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  data: any;
};

const Modal = (props: Props) => {
  const stats: any[] = props.data.stats;
  const name: string = props.data.name;

  return (
    <div
      className={`h-screen w-screen variant-glass-tertiary z-50 top-0 left-0 fixed ${
        props.isOpen ? "overflow-hidden" : "hidden"
      }`}
      onClick={() => props.onClose()}
    >
      <div className="w-full flex justify-center mt-10 flex-col items-center">
        <label className=" text-[32px] text-white drop-shadow-[0_4.2px_4.2px_rgba(0,0,0,0.8)]">
          {name.toUpperCase()}
        </label>
        <div className="w-full flex justify-center items-center mt-4">
          {props.data.types.map((typeObj: any, index: number) => (
            <span
              className="chip variant-filled-primary mr-1 mt-1 cursor-default"
              key={typeObj.type.name}
            >
              {typeObj.type.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full h-64 variant-filled-primary absolute top-1/3 z-50 drop-shadow-lg flex items-center">
        <div className="flex items-center w-full flex-col lg:flex-row">
          <div className="drop-shadow-2xl lg:scale-[2.5] lg:ml-36 absolute flex items-center justify-center scale-110 top-[-50px] lg:relative lg:top-0">
            {props.image}
          </div>
          <div className="w-full items-center justify-center grid grid-cols-4 lg:grid-cols-6 grid-flow-row gap-0">
            <RadialProgressBar
              value={stats[0].base_stat}
              text="HP"
              maxValue={180}
            />
            <div className="lg:hidden"></div>
            <div className="lg:hidden"></div>
            <RadialProgressBar
              value={stats[1].base_stat}
              text="Attack"
              maxValue={180}
            />
            <RadialProgressBar
              value={stats[2].base_stat}
              text="Defense"
              maxValue={180}
            />
            <RadialProgressBar
              value={stats[3].base_stat}
              text="Special Attack"
              maxValue={180}
            />
            <RadialProgressBar
              value={stats[4].base_stat}
              text="Special Defence"
              maxValue={180}
            />
            <RadialProgressBar
              value={stats[5].base_stat}
              text="Speed"
              maxValue={180}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Modal;
