import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CardComponent from "./CardComponent";
import Footer from "./Footer";

const Main = () => {
  const [data, setData] = useState([]);
  const [da, setDa] = useState([
    "deddy",
    "Prianto",
    "Sihombing",
    "Sistem Informasi",
    "Sistem Informasi",
    "deddy",
    "Prianto",
    "Sihombing",
    "Sistem Informasi",
    "Sistem Informasi",
  ]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const dataJson = await data.json();
  //     setData(dataJson);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="w-screen grid grid-rows-13 h-screen">
      <Navbar />
      <CardComponent da={da} />
      <Footer />
    </div>
  );
};

export default Main;
