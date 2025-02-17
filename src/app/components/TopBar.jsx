"use client";
import Image from "next/image";
import React from "react";
import Portrait from "../assets/portrait-square.png";
import { TypeAnimation } from "react-type-animation";

const TopBar = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="place-self-center col-span-7 text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl sm:text-3xl lg:text-5xl font from-neutral-600 font-semibold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500  ">
              Hey, I'm
            </span>{" "}
            <TypeAnimation
              sequence={["Manzi", 2000, "a Software Engineer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#cecece] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sunt nulla, maiores a iusto ad rem ab non illo repellat,
            consequuntur odio soluta. Vel enim laboriosam ducimus commodi itaque
            nemo.
          </p>
          <div>
            <button className=" w-full sm:w-fit  max-w-48 bg-gradient-to-br from-blue-900 to-teal-500 to- hover:bg-slate-200 text-white  px-1 py-1 rounded-full mr-4">
              <span className="block bg-[#222222] hover:bg-slate-800 rounded-full px-6 py-3">
                Email Me
              </span>
            </button>
            <button className=" w-full sm:w-fit  max-w-48 bg-gradient-to-br from-blue-900 to-teal-500 to- hover:bg-slate-200 text-white px-7 py-4 rounded-full mr-4">
              View CV
            </button>
          </div>
        </div>
        <div className="place-self-center col-span-5 mt-4 lg:mt-0">
          <div className="rounded-full bg-[#727272] w-[310px] h-[310px] relative lg:w-[410px] lg:h-[410px]  ">
            <Image
              src={Portrait}
              width={300}
              height={300}
              alt="Portrait of Manzi"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopBar;
