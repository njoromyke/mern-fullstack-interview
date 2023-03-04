import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-white z-50 w-full p-6 sticky top-0 shadow-sm">
        <div className="justify-between flex">
          <h2 className="text-2xl flex-[.9] text-pink-700 uppercase font-bold">
            <Link to="/">Home</Link>
          </h2>
          <Link to="/" className="pt-2 transition-all hover:text-pink-700">
            Contacts us
          </Link>
          <Link to="/" className="pt-2 transition-all hover:text-pink-700">
            About us
          </Link>
          <Link to="/" className="pt-2 transition-all hover:text-pink-700">
            New Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
