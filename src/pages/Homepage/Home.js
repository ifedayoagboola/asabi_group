import React from "react";
import { homeObjOne, homeObjThree } from "./Data";
import {
  InfoSection,
  InfoSection3,
  InfoSection2,
  ServiceSection,
  Footer,
  JoinsUs,
} from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection3 />
      <ServiceSection />
      <JoinsUs />
      <InfoSection2 {...homeObjOne} />
    </>
  );
}
export default Home;
