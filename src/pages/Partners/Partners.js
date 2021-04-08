import React from "react";
import { InfoSection5 } from "../../components";
import Form from "./Form";
import { homeObjThree } from "./Data";

function Partners() {
  return (
    <>
      <InfoSection5 {...homeObjThree} />
      <Form />
    </>
  );
}

export default Partners;
