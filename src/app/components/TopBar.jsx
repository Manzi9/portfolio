import Image from "next/image";
import React from "react";
import Portrait from "../assets/portrait-square.png";

const TopBar = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="place-self-center col-span-7">
          <h1 className="text-white mb-4 text-5xl lg:text-7xl font from-neutral-600">
            Hey, I'm Manzi!
          </h1>
          <p className="text-[#cecece] text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sunt nulla, maiores a iusto ad rem ab non illo repellat,
            consequuntur odio soluta. Vel enim laboriosam ducimus commodi itaque
            nemo.
          </p>
          <div>
            <button>Contact</button>
            <button>Contact</button>
          </div>
        </div>
        <div className="place-self-center col-span-5 mt-4 lg:mt-0">
          <div className="rounded-full bg-[#2a2a2a] w-[310px] h-[310px] relative lg:w-[500px] lg:h-[500px]  ">
            <Image
              src={Portrait}
              width={300}
              height={300}
              alt="Portrait of Manzi"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopBar;
