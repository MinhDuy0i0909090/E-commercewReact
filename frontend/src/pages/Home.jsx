import { HeartOff } from "lucide-react";
import React from "react";
import Hero from "../components/Hero";
import TopRated from "../components/TopRated";
import Popular from "../components/Popular";
import Offer from "../components/Offer";
import NewCollection from "../components/NewCollection";
const Home = () => {
  
  return (
    <>
      <Hero />
      <TopRated />
      <Popular />
      <Offer/>
      <NewCollection />
    </>
  );
};

export default Home;
