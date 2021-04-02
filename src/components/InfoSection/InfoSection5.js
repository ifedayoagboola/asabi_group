import React from "react";
import img1 from "../../images/partner.jpg";
import { Container } from "../../globalStyles";
import styled from "styled-components";
import {
  InfoSec4,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

function InfoSection5({
  lightBg,
  topLine,
  lightTopLine,
  lightTextDesc,
  headline,
  description,
  start,
}) {
  return (
    <>
      <InfoSec4 lightBg={lightBg}>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <PartnersList>
                  <h3>
                    Asabi is keen to develop mission aligned partnerships with
                    the following groups
                  </h3>
                  <ul>
                    <li>Corporate Foundations</li>
                    <li>Civil Society</li>
                    <li>Federal Government departments</li>
                    <li>Corporate Companies with aligned mission.</li>
                  </ul>
                  <ul>
                    <li> Private citizens</li>
                    <li>Institutions of Higher Learning and other TVETs</li>
                    <li>State Government departments</li>
                  </ul>
                </PartnersList>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img1} alt="" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec4>
    </>
  );
}
const PartnersList = styled.div`
  color: #101522;
  border: 3px solid #0467fb;
  h3 {
    padding: 1rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    li {
      padding: 1rem;
    }
  }
`;
export default InfoSection5;
