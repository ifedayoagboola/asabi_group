import React from "react";
import styled from "styled-components";
import { InfoSection3 } from "../../components";
import img1 from "../../images/img13.jpg";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Button } from "../../globalStyles";

function Services() {
  return (
    <>
      <Container>
        <Child3>
          <Flex>
            <h1>ABOUT ASABI</h1>
            <p>
              Our first clinic, the Asabi Community Health Centre, launches Q1
              2022. ACHC’s data driven approach ensures that we provide
              efficient, dynamic and preventative healthcare services. Our
              Subscription based medical access ensures self-accountability for
              patients’ health and ultimately preventive health practices. Our
              Sliding scale pricing model enables us to leverage higher income
              patients to subsidise the lower income patients.
              <br />
              <br />
              Asabi Community Health Centre (ACHC) was setup to bridge the
              healthcare gap in Nigeria with a core focus on improving community
              health outcomes amongst low-income and under resourced
              neighbourhoods.
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
