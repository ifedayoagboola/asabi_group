import React from "react";
import { homeObjThree } from "./Data";
import { InfoSection } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}
export default Home;
