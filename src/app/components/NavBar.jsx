import React from "react";
import Image from "next/image";
import Logo from "../fav-icons/android-chrome-192x192.png";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        {/* <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link> */}
        <Image src={Logo} width={50} height={50} alt="M Logo" />
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default NavBar;
