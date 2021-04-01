import React from "react";
import { InfoSection2, InfoSection4 } from "../../components";
import { homeObjOne } from "./Data";

function Investments() {
  return (
    <>
      <InfoSection2 {...homeObjOne} />
      <InfoSection4 />
    </>
  );
}

export default Investments;
