import React from "react";

const ButtonChildPagination = ({ da, postPerPage, numval }) => {
  // button harus mengembalikan data warna
  const fnReturnNumberPagination = () => {
    let data = [];
    for (let i = 0; i < Math.ceil(da.length / postPerPage); i++) {
      data.push(i);
    }
    return data;
  };

  return (
    <div className="w-full mt-10 flex justify-end mb-5">
      {/* <button className="text-sm rounded border-gray-300 border w-10 h-7 mr-1">
        prev
      </button> */}
      {fnReturnNumberPagination().map((number) => (
        <div key={number}>
          <button
            onClick={() => numval(number)}
            className={`cursor-pointer rounded border-gray-300 border w-7 h-7 mr-1 ${
              number % 2 === 0 && "active:bg-green-600"
            }`}
          >
            {number}
          </button>
        </div>
      ))}
      {/* <button className="text-sm rounded border-gray-300 border w-10 h-7 mr-1 ">
        next
      </button> */}
    </div>
  );
};

export default ButtonChildPagination;
