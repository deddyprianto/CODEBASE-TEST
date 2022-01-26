import React from "react";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline";
const InputChildComponentCard = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-start items-center w-full lg:mb-10">
      <div className="flex items-center lg:ml-10 lg:mr-5 bg-white h-8 border border-gray-300 rounded">
        <input type="text" className="outline-none" placeholder="Select" />
        <ChevronDownIcon className="w-5 h-5 text-gray-300" />
      </div>
      <div className="flex items-center lg:ml-10 lg:mr-5 bg-white h-8 border border-gray-300 rounded">
        <SearchIcon className="w-5 h-5 text-gray-300 mr-2" />
        <input type="text" className="outline-none" placeholder="Select" />
      </div>
      <button className="w-20 h-10 bg-blue-300 text-white rounded-lg mt-10 mb-10 lg:mb-0 lg:mt-0">
        Search
      </button>
    </div>
  );
};

export default InputChildComponentCard;
