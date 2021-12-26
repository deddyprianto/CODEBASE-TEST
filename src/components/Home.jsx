import React, { useEffect, useState } from "react";

const Home = () => {
  const [dataFinal, setDataFinal] = useState([]);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const data = await fetch(
        "https://run.mocky.io/v3/c818a738-962f-4bf6-b3d9-d247db62b94e"
      );
      const dataObj = await data.json();
      const { result } = dataObj;
      setDataFinal(result);
    };
    fetchDataFromAPI();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full lg:w-2/5">
        <h1 className="text-gray-500 font-bold text-2xl mt-2 mb-2">
          Artikel Terbaru
        </h1>
        <div className="w-full flex">
          <div className="h-1 w-1/4 bg-yellow-300 " />
          <div className="h-1 w-3/4 bg-blue-600 " />
        </div>
      </div>
      <div className="bg-white shadow-lg w-full h-1/2 rounded-lg lg:w-2/5 lg:h-1/2 p-2 overflow-y-auto">
        {dataFinal.map((data, key) => {
          return (
            <div
              key={key}
              className="flex flex-col justify-center items-start lg:flex-row"
            >
              <img
                src={data.image}
                className="rounded mt-10 w-full  h-1/2 lg:w-52 lg:max-h-7h-32"
              />

              <div className="flex flex-col justify-center items-center mt-7 ml-5">
                <h2 className="text-gray-400 text-2xl font-semibold">
                  {data.title}
                </h2>
                <p className="text-gray-300 text-lg font-semibold">
                  {data.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mt-5 w-11/12 lg:w-1/3 ">
        <hr style={{ backgroundColor: "#BAD0E3" }} />
        <p className="text-gray-400 text-lg font-semibold text-center">
          @CopyRigth 2021 PT KlikCair Magga Jaya
        </p>
      </div>
    </div>
  );
};

export default Home;
