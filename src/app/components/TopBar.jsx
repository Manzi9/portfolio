import Image from "next/image";
import React from "react";
import Portrait from "../assets/portrait.jpg";

const TopBar = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="place-self-center col-span-7">
          <h1 className="text-white mb-4 text-5xl lg:text-7xl font from-neutral-600">
            Hey, I'm Manzi!
          </h1>
          <p className="text-[#cecece] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sunt nulla, maiores a iusto ad rem ab non illo repellat,
            consequuntur odio soluta. Vel enim laboriosam ducimus commodi itaque
            nemo.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#2a2a2a] w-500 h-400 relative">
            <Image
              src={Portrait}
              width={300}
              height={500}
              alt="Portrait of Manzi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopBar;
