import React from "react";
import styled from "styled-components";
import { InfoSection3 } from "../../components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Button } from "../../globalStyles";

function Services() {
  return (
    <>
      <Container>
        <Child3>
          <Flex>
            <h1>ABOUT ASABI GROUP</h1>
            <p>
              Under the umbrella of Asabi Group, falls two main arms: Asabi
              Community Health Centre, which was setup to bridge the healthcare
              gap in Nigeria with a core focus on improving community health
              outcomes amongst low-income and under resourced neighbourhood and
              Asabi Investments which invests in promising entrepreneurs who are
              front and centre in driving the growth and development of
              transformational MSME businesses.
              <br />
              <br />
              Asabi Investments aims to be recognized as the leading investor in
              MSMEs across the African continent while
              <br />
              ACHC aims to enables healthy living amongst low-income Nigerians.
              Our mission is to provide high quality, affordable and accessible
              primary healthcare to low-income communities
            </p>
          </Flex>
          <Btns>
            <Link to="/partners">
              <Button fontBig>Reach out</Button>
            </Link>
          </Btns>
        </Child3>
        <InfoSection3 />
      </Container>
    </>
  );
}

const Child3 = styled.div`
  background: #fff;
  color: #101522;
  padding-top: 5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
const Flex = styled.div`
  display: flex;
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
  p {
    margin-left: 10rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: block;

    p {
      margin-left: 0;
    }
  }
`;
const Btns = styled.div`
  display: flex;
  padding-left: 20rem;
  > * {
    margin: 1rem 1rem 0 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export default Services;
