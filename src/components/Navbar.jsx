import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-2xl h-full flex items-end w-full">
      <ul className="w-full flex lg:ml-40 2xl:ml-60">
        <li className="mr-2 text-gray-500">Home</li>
        <li className="border-b-2 text-blue-700 border-blue-700 font-bold">
          Coin List
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
