import React from "react";
import { homeObjOne } from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
    </div>
  );
};

export default Home;
