import React from "react";
import img1 from "../../images/partner.jpg";
import { Container } from "../../globalStyles";
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

export default InfoSection5;
