import React, { useState } from "react";

const SortingArray = ({ dataArr }) => {
  const [data, setData] = useState(dataArr);

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: "#F3F7F7" }}
    >
      <div className="h-1/2 w-4/5 bg-gray-50 shadow-2xl rounded grid grid-rows-3 justify-items-center items-center">
        <h1 className="text-gray-400 text-2xl font-semibold">
          Sort Data Yang mau anda Sort
        </h1>
        {/* content */}
        <div className="w-full h-full  flex justify-evenly">
          <h2 className="text-gray-400">Sort Upvoted</h2>
          <button
            className="bg-green-500 text-white font-semibold w-44 h-16 rounded"
            onClick={() => {
              let arr1 = [];
              const data1 = Object.assign(arr1, data);
              setData(data1.sort((a, b) => b.upvotes - a.upvotes));
            }}
          >
            Most Upvoted
          </button>
          <button
            className="bg-green-500 text-white font-semibold w-44 h-16 rounded"
            onClick={() => {
              let arr2 = [];
              const data2 = Object.assign(arr2, data);
              setData(
                data2.sort((a, b) => new Date(b.date) - new Date(a.date))
              );
            }}
          >
            Most Recent
          </button>
        </div>
        {/* content table */}
        <div className="bg-gray-200 h-full w-full ">
          <table className="table-auto w-full bg-gray-50">
            <thead>
              <tr className="divide-x-2">
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((da, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{da.title}</td>
                    <td className="text-center">{da.upvotes}</td>
                    <td className="text-center">{da.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SortingArray;
