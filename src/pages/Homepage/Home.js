import React from "react";
import { homeObjOne, homeObjThree } from "./Data";
import {
  InfoSection,
  InfoSection3,
  InfoSection2,
  InfoSection4,
  ServiceSection,
  JoinUs,
} from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
}
export default Home;
