import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec2,
  InfoRow,
  InfoColumn,
  TextWrapper2,
  TopLine,
  Heading,
  Subtitle,
  Info,
} from "./InfoSection.elements";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart,
}) {
  return (
    <>
      <InfoSec2 lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper2>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/partners">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper2>
            </InfoColumn>
            <InfoColumn>
              <Info>
                Collaborative and long term relationships with its portfolio
                companies, industry stakeholders, government partners,
                non-profit players with aligned interests
              </Info>
              <Info>
                There’s keen attention paid to optimising processes where
                execution is much faster and better.
              </Info>
              <Info>
                As Asabi partners with entrepreneurs to fund the next generation
                of resilient MSMEs, attention has been paid to team cohesion and
                finding great talent.
              </Info>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec2>
    </>
  );
}

export default InfoSection;
