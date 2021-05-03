import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeSection2 from "../InfoSection/HomeSection2";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow2,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading2,
  Subtitle,
  ImgWrapper,
} from "./InfoSection.elements";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart,
  start,
  lightText,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow2 imgStart={imgStart}>
            <TextWrap>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading2>
                <span>We are</span> {headline} <span>the</span> world!
              </Heading2>

              {/* <Link to="/about">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link> */}
            </TextWrap>
          </InfoRow2>
        </Container>
      </InfoSec>
      <HomeSection2 />
    </>
  );
}

const TextWrap = styled.div`
  width: 70%;
  span {
    color: #0260a2;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default InfoSection;
