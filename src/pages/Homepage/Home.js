import React from "react";
import { homeObjOne, homeObjThree } from "./Data";
import {
  InfoSection,
  InfoSection3,
  InfoSection2,
  InfoSection4,
  ServiceSection,
  Footer,
  Contact,
} from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection3 />
      <ServiceSection />
      <InfoSection4 />
      <Contact />
      <InfoSection2 {...homeObjOne} />
    </>
  );
}
export default Home;
