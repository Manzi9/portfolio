import React from "react";

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
        <a href="#" className="text-2xl md:text-5xl text-white font-semibold">
          LOGO{" "}
        </a>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default NavBar;
