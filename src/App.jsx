import React from "react";
import Home from "./components/Home";

import SortingArray from "./components/SortingArray";
const App = () => {
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
  return <Home />;
};

export default App;
