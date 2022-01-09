import React, { useEffect, useState } from "react";

const Home = () => {
  console.log("RENDER ULANG");
  const [id, setId] = useState(0);
  const [id2, setId2] = useState(0);
  let idData = 1;
  const [dataPosts, setDataPosts] = useState([]);
  const [peringatan, setPeringatan] = useState(false);
  const [peringatan2, setPeringatan2] = useState(false);

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     try {
  //       const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const dataFinal = await data.json();
  //       setDataPosts(dataFinal);
  //     } catch (error) {
  //       console.log("this is your Error will be happen", error);
  //     }
  //   };
  //   dataFetch();
  // }, []);
  const dummyData = [
    {
      id: 1,
      title: "A Message To Our Customer",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      id: 2,
      title: "Artifial Mountain",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      id: 3,
      title: "Scalling to 100k User",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      id: 4,
      title: "The Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      id: 5,
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      id: 5,
      title: "Simple Text Editor has 15k monthly user",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  const fnButtonNext = () => {
    setId(id + 1);
    const data = dummyData.filter((d) => d.upvotes > 0);
    console.log(data);
  };

  const fnButtonPrev = () => {
    idData += 1;
    const data = dummyData.filter((data) => {
      let kete;
      if (data.id === idData) {
        kete = data;
      }
      return kete;
    });
    console.log(data);
  };
  const fnButtonRestart = () => {
    setId(0);
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex justify-center items-center">
      <div className="w-3/4 bg-white rounded shadow-xl h-1/2">
        <h1 className="text-center text-gray-400 text-2xl">Slide Show</h1>
        <div className="w-full flex justify-evenly items-center h-20">
          <button
            onClick={fnButtonRestart}
            className="bg-green-300 w-36 h-16 rounded-lg"
          >
            Restart
          </button>
          <button
            disabled={peringatan2 && true}
            className={`bg-green-300 w-36 h-16 rounded-lg ${
              peringatan2 && "opacity-40"
            }`}
            onClick={fnButtonPrev}
          >
            Prev
          </button>
          <button
            className={`bg-green-300 w-36 h-16 rounded-lg  ${
              peringatan && "opacity-40"
            }`}
            disabled={peringatan && true}
            onClick={fnButtonNext}
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

export default Home;
