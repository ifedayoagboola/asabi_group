import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
              <Heading2>{headline}</Heading2>
              {/* <Link to="/about">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link> */}
            </TextWrap>
          </InfoRow2>
        </Container>
      </InfoSec>
    </>
  );
}

const TextWrap = styled.div``;
export default InfoSection;
