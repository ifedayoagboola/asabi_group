import React from "react";
import styled from "styled-components";
import img1 from "../../images/img13.jpg";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Button } from "../../globalStyles";

function Services() {
  return (
    <>
      <Parent>
        <Container>
          <Heading>
            <h1>ABOUT ASABI GROUP</h1>
          </Heading>
          <Child1>
            <Desc1>
              <h2>ASABI GROUP</h2>
              <p>
                AIDING THE TRANSFORMATION OF CORE PILLARS THAT AIDE THE
                WELL-BEING OF COMMUNITIES ACROSS NIGERIA
              </p>
              <p>
                Our society is faced with increasingly complex challenges, the
                answer to some of these pressing issues will be found through
                alliances formed by individuals and organizations from the
                non-profit, government, philanthropic,and business sectors to
                jointly solve a societal problem and achieve a shared goal.
              </p>
            </Desc1>
            <Desc2>
              <h3>Vision Statement</h3>
              <p>
                Asabi Investments aims to be recognized as the leading investor
                in MSMEs across the African continent
              </p>
              <h3>Mission Statement</h3>
              <p>
                ACHC aims to provide high quality, affordable and accessible
                primary healthcare to low-income communities
              </p>
            </Desc2>
          </Child1>

          <Child2>
            <img src={img1} alt="" />
            <p>Interview with the CEO</p>
          </Child2>
        </Container>
        <Child3>
          <Flex>
            <h1>MORE ABOUT US</h1>
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
            <Link to="/investments">
              <Button fontBig>Investments</Button>
            </Link>
            <Link to="/healthcare">
              <Button fontBig>Healthcare</Button>
            </Link>
          </Btns>
        </Child3>
      </Parent>
    </>
  );
}
const Parent = styled.div`
  position: relative;
  height: 200vh;
  background: #101522;
  color: #101522;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    display: block;
    height: 220vh;
  }
  @media screen and (max-width: 375px) {
    height: 300vh;
  }
`;
const Heading = styled.div`
  width: 30%;
  h1 {
    color: #fff;
    padding-top: 110px;
    font-weight: lighter;
    font-size: 3rem;
    line-height: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
const Child1 = styled.div`
  position: absolute;
  background: #fff;
  width: 65%;
  height: 120vh;
  top: 110px;
  right: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    position: relative;
    height: 100vh;
  }
`;
const Desc1 = styled.div`
  padding: 2rem;
  > * {
    padding: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    padding: 0;
  }
`;
const Desc2 = styled.div`
  width: 40%;
  text-align: left;
  position: absolute;
  left: 40%;
  top: 40%;
  border: 3px solid #4b59f7;
  > * {
    padding: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
`;
const Child2 = styled.div`
  position: absolute;
  padding-top: 130px;
  color: #4b59f7;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
  }
`;
const Child3 = styled.div`
  background: #fff;
  position: absolute;
  padding: 3rem;
  top: 950px;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    position: relative;
    top: 0;
  }
`;
const Flex = styled.div`
  display: flex;
  h1 {
    font-size: 3rem;
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
