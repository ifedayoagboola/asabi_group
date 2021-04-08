import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoColumn2,
  InfoColumn3,
  Info2,
  InfoSec3,
} from "./InfoSection.elements";

const InfoSection4 = () => {
  return (
    <InfoSec3>
      <Container>
        <InfoColumn2>
          <Info2>
            <h3>Asabi Investments </h3>
            Asabi Investments invests in high growth MSMEs driving impact in
            some of the fastest growing industries and looking to scale across
            Africa. Asabi Investments takes a holistic approach in sourcing
            deals and investments where a business is assessed based on the
            weighting of its financial viability alongside environmental and
            community development impact.
          </Info2>
          <Info2>
            <h3>Data driven decision making</h3>
            The decision making process at Asabi investments is deeply anchored
            in analytical rigour. As the team adheres to both local and
            international regulatory expectations, there’s keen attention paid
            to optimization of processes where things can be done much faster
            and better as the world evolves into trends that cannot be
            predicted.
          </Info2>
        </InfoColumn2>
        <InfoColumn3>
          <Info2>
            <h3>Collaborative and resilient team culture</h3>
            As Asabi partners with entrepreneurs to fund the next generation of
            resilient MSMEs, attention has been paid to team cohesion and
            finding great talent.
          </Info2>
          <Info2>
            <h3>Investments Portfolio</h3>
            The fund is invested in taking a Pan-African approach and invest in
            MSMEs from Kenya, Uganda, Ghana, Nigeria, Zimbabwe, Ethiopia,
            Franco-phone West Africa and South Africa.
          </Info2>
        </InfoColumn3>
      </Container>
    </InfoSec3>
  );
};

export default InfoSection4;
