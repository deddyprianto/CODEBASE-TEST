import React, { useEffect, useState } from "react";

const SlideShow = () => {
  console.log("RENDER ULANG");
  const [id, setId] = useState(0);
  const [dataPosts, setDataPosts] = useState([]);
  const [peringatan, setperingatan] = useState(false);
  const [peringatan2, setperingatan2] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataFinal = await data.json();
        setDataPosts(dataFinal);
      } catch (error) {
        console.log("this is your Error will be happen", error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="w-3/4 bg-white rounded shadow-xl h-1/2">
        <h1 className="text-center text-gray-400 text-2xl">Slide Show</h1>
        <div className="w-full flex justify-evenly items-center h-20">
          <button
            onClick={() => setId(0)}
            className="bg-green-300 w-36 h-16 rounded-lg"
          >
            Restart
          </button>
          <button
            disabled={peringatan2 && true}
            className={`bg-green-300 w-36 h-16 rounded-lg ${
              peringatan2 && "opacity-40"
            }`}
            onClick={() => {
              setId(id - 1);
              setperingatan(true);
            }}
          >
            Prev
          </button>
          <button
            className={`bg-green-300 w-36 h-16 rounded-lg  ${
              peringatan && "opacity-40"
            }`}
            disabled={peringatan && true}
            onClick={() => {
              setId(id + 1);
              setperingatan2(false);
            }}
          >
            Next
          </button>
        </div>
        {/* content Slide */}
        <div className="w-full h-1/2  flex justify-center items-center flex-col ">
          {dataPosts.map((data, i) => {
            if (i === id) {
              return (
                <div>
                  <h1>{data.name}</h1>
                  <h1>{data.email}</h1>
                </div>
              );
            }
          })}
        </div>
        {/* END content Slide */}
      </div>
    </div>
  );
};

export default SlideShow;
