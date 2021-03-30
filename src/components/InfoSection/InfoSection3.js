import React from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import pic4 from "../../images/pic4.jpg";
import pic3 from "../../images/pic3.jpg";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import styled from "styled-components";
import { InfoSec } from "./InfoSection.elements";

function InfoSection3({ lightBg }) {
  return (
    <>
      <InfoSec3 lightBg={!lightBg}>
        <Container>
          <House>
            <Health>
              <AbtHealth>
                <h3>
                  Asabi Community <span>Healthcare</span> Centre
                </h3>
                <p>
                  Many poor Nigerians do not have established relationships with
                  healthcare providers because they cannot afford to. The Asabi
                  Community Health Centre is set to provide basic medical care
                  targeted at low-income residents of under resourced
                  communities in Ibadan, Nigeria.
                </p>
              </AbtHealth>
              <Img>
                <img src={img3} alt="" />
              </Img>
            </Health>
            <Investments>
              <Img2>
                <img src={img3} alt="" />
              </Img2>
              <AbtInv>
                <h3>
                  Asabi <span>Investments</span>
                </h3>
                <p>
                  Asabi Investments takes a holistic approach in sourcing deals
                  and investments where a business is assessed based on the
                  weighting of its financial viability alongside environmental
                  and community development impact.
                </p>
              </AbtInv>
            </Investments>
          </House>
        </Container>
      </InfoSec3>
    </>
  );
}

const InfoSec3 = styled.div`
  /* background-image: url(${pic3}); */
  background: #fff;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const House = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Health = styled.div`
  display: flex;
  color: #101522;
  margin: 5rem 0 2rem -200px;
  align-items: center;
  justify-content: center;
  width: 65%;
  border-left: 3px solid #0069b0;
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
  margin: 0 -300px 2rem 0;
  align-items: center;
  justify-content: center;
  width: 65%;
  border-right: 3px solid #0069b0;
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
