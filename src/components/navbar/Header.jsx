import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-3 bg-gray-900 text-white">
      <div className="mx-auto container">
        <div className="flex items-center justify-between capitalize">
          <Link to='/'>
            <h1>Joorlans <span className="text-red-500 font-bold">Store</span></h1>
          </Link>

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
          size={25}
            onClick={() => setNavMobile(true)}
            className="md:hidden  text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
      </div>
    </header>
  );
};

export default Header;
