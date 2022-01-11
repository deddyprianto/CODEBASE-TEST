import React, { useEffect, useState } from "react";
import ClassCop from "./components/ClassCop";
import SlideShow from "./components/SlideShow";
import SortByInputSearch from "./components/SortByInputSearch";
import SortingArray from "./components/SortingArray";

const App = () => {
  const [data, setData] = useState([]);
  let objData = [
    {
      title: "A Message To Our Customer",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Artifial Mountain",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scalling to 100k User",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "The Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple Text Editor has 15k monthly user",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataFinal = await data.json();
        if (!dataFinal) {
          throw new Error("error kamu ini");
        }
        setData(dataFinal);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return <ClassCop />;
};

export default App;
