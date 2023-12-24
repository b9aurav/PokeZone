import React from "react";
import "animate.css";
import Image from "next/image";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="w-full fixed bottom-0 variant-filled-primary flex justify-center items-center z-50">
      <Image
        src="/pokeball.svg"
        width={50}
        height={50}
        alt="pokeball"
        className="u-flash"
      />
      <label className=" text-2xl m-4">Loading...</label>
    </div>
  );
};

export default Loader;
