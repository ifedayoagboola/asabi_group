import React from "react";
import { homeObjThree } from "./Data";
import { InfoSection, HomeSection2 } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}
export default Home;
