import React from "react";
import img2 from "../../images/pic2.jpg";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec2,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Info,
  ImgWrapper,
  Img,
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
  img,
  alt,
  imgStart,
  start,
}) {
  return (
    <>
      <InfoSec2 lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <Info>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur libero provident fugiat. Quod dolore quae odio ex
                beatae. Dolor, vel!
              </Info>
              <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores dicta quos sint modi deleniti id delectus omnis quae
                velit earum!
              </Info>
              <Info>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ipsam voluptatibus eius sequi! Quaerat labore, delectus mollitia
                doloremque perspiciatis corrupti.
              </Info>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec2>
    </>
  );
}

export default InfoSection;
