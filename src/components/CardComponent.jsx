import React, { useEffect, useState } from "react";
import ButtonChildPagination from "./ButtonChildPagination";

import InputChildComponentCard from "./InputChildComponentCard";

const CardComponent = ({ da }) => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await fetch("https://api.coinpaprika.com/v1/coins/");
  //     const dataFinal = await data.json();
  //     setData(dataFinal);
  //   };
  //   dataFetch();
  // }, []);
  // get current page

  // function selected data
  const tampilkanDataSedikit = () => {
    const indexOfFirstPost = currPage * postPerPage;
    const indexOfLastPost = indexOfFirstPost - postPerPage;
    return dummy.slice(indexOfLastPost, indexOfFirstPost);
  };
  const numVal = (number) => setCurrPage(number);

  return (
    <div className="flex flex-col justify-start items-center bg-gray-200">
      <p className="text-gray-500 self-start lg:ml-40 2xl:ml-60 mt-10">
        coin list
      </p>
      {/* card */}
      <div className="w-10/12 bg-white shadow-2xl rounded-xl">
        <p className="text-blue-300 lg:p-7">Coin List</p>
        <InputChildComponentCard />
        {/* PAGINATIONS card */}
        <div className="w-full">
          {tampilkanDataSedikit().map((data, i) => {
            return (
              <div
                key={i}
                className={`w-full flex justify-evenly items-center h-20 ${
                  i % 2 == 0 && "bg-blue-50"
                }`}
              >
                <h2>{data.nama}</h2>
                <h2>{data.kelas}</h2>
                <h2>{data.alamat}</h2>
                <h2>{data.keadaanSekarang}</h2>
                <h2>{data.mauMakanApa}</h2>
              </div>
            );
          })}
        </div>
        <ButtonChildPagination
          numval={numVal}
          da={da}
          postPerPage={postPerPage}
        />
      </div>
    </div>
  );
};

export default CardComponent;
