import React from "react";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/inv1.jpg";
import pic3 from "../../images/pic3.jpg";
import { Container } from "../../globalStyles";
import { InfoSec3 } from "../InfoSection/InfoSection.elements";
import styled from "styled-components";

function InfoSection3({ lightBg }) {
  return (
    <>
      <InfoSec3 lightBg={!lightBg}>
        <House>
          <Health>
            <AbtHealth>
              <h3>
                Asabi Community <span>Healthcare</span> Centre
              </h3>
              <p>
                Many poor Nigerians do not have established relationships with
                healthcare providers because they cannot afford to. The Asabi
                Community Health Centre will provide primary medical care
                targeted at low-income residents of under-resourced communities
                in Ibadan, Nigeria.
              </p>
            </AbtHealth>
            <Img>
              <img src={img3} alt="" />
            </Img>
          </Health>
          <Investments>
            <Img2>
              <img src={img4} alt="" />
            </Img2>
            <AbtInv>
              <h3>
                Asabi <span>Investments</span>
              </h3>
              <p>
                Asabi Investments takes a holistic approach in sourcing deals
                and investments where a business is assessed based on the
                weighting of its financial viability alongside environmental and
                community development impact.
              </p>
            </AbtInv>
          </Investments>
        </House>
      </InfoSec3>
    </>
  );
}

const House = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Health = styled.div`
  display: flex;
  color: #101522;
  padding: 3rem 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 3px solid #0069b0;
  border-left: 3px solid #0069b0;
  border-bottom: 3px solid #0069b0;
  h3 {
    color: #101522;
  }
  span {
    color: #037fff;
  }
  @media (max-width: 1300px) {
    display: block;
    margin: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
const Img = styled.div``;
const AbtHealth = styled.div`
  line-height: 1.5rem;
  > * {
    padding: 1rem;
  }
`;
const Investments = styled.div`
  display: flex;
  color: #101522;
  padding: 3rem 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-right: 3px solid #0260a2;
  border-bottom: 3px solid #0260a2;
  h3 {
    color: #101522;
  }
  span {
    color: #037fff;
  }
  @media (max-width: 1300px) {
    display: block;
    margin: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
const Img2 = styled.div``;
const AbtInv = styled.div`
  line-height: 1.5rem;

  > * {
    padding: 1rem;
  }
`;

export default InfoSection3;
