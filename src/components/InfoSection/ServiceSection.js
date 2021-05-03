import React from "react";
import styled from "styled-components";
import { Container2 } from "../../globalStyles";
import Toggle from "./Toggle";
import pic3 from "../../images/pic3.jpg";

const ServiceSection = () => {
  return (
    <House>
      <Container2>
        <Header>
          <h1>
            Asabi<span> Community</span> Health Center
          </h1>
          <p>
            Asabi Community Health Centre (ACHC) aims to bridge the healthcare
            gap in Nigeria with a core focus on improving community health
            outcomes amongst low-income and under-resourced neighbourhoods. Our
            first clinic, the Asabi Community Health Centre, launches in Q1 of
            2022. ACHC’s data-driven approach ensures that we provide efficient,
            dynamic and preventative healthcare services.
          </p>
        </Header>
        <Service>
          <Toggle title="Locally engaged">
            <div className="answer">
              <p>
                Asabi seeks to build trusting, collaborative and long term
                relationships with its portfolio companies, industry
                stakeholders, government partners, non-profit players with
                aligned interests
              </p>
            </div>
          </Toggle>
          <Toggle title="Data driven decision making">
            <div className="answer">
              <p>
                The decision making process at Asabi investments is deeply
                anchored in analytical rigour. As the team adheres to both local
                and international regulatory expectations, there’s keen
                attention paid to optimization of processes where things can be
                done much faster and better as the world evolves into trends
                that cannot be predicted.
              </p>
            </div>
          </Toggle>
          <Toggle title="Collaborative and resilient team culture">
            <div className="answer">
              <p>
                As Asabi partners with entrepreneurs to fund the next generation
                of resilient MSMEs, attention has been paid to team cohesion and
                finding great talent. Through already existing networks, Asabi
                is able to tap into a team of seasoned investors, industry
                experts and talent, to help grow the venture sustainably.
              </p>
            </div>
          </Toggle>

          <Content>
            <h5>Providing basic medical care</h5>
            <p>
              Many poor Nigerians do not have established relationships with
              healthcare providers because they cannot afford to. The Asabi
              Community Health Centre will provide primary medical care targeted
              at low-income residents of under-resourced communities in Ibadan,
              Nigeria.
            </p>
          </Content>
          <Content>
            <h5>Subscription based medical access</h5>
            <p>
              Provides free to affordable medical care to low resource
              communities in Ibadan. Subscription-based medical access ensures
              self-accountability for patients’ health and ultimately enhance
              the promotion of preventive health practices
            </p>
          </Content>
        </Service>
      </Container2>
    </House>
  );
};

const House = styled.div`
  background-image: url(${pic3});
  background-size: cover;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 1rem;
    margin-top: 380px;
  }
`;
const Header = styled.div`
  h1 {
    padding: 2rem 0;
    @media (max-width: 768px) {
      line-height: 2.5rem;
    }
  }
  span {
    color: #037fff;
  }
  color: #101522;
  padding-top: 2rem;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 1.5rem;
`;
const Service = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: space-around;
  align-items: center;
  .faq-line {
    background: #ccc;
    height: 0.15rem;
    margin: 1.3rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1.5rem 0rem;

    p {
      padding: 0.5rem 0rem;
    }
  }

  @media (max-width: 1300px) {
    display: block;
    width: 100%;
    padding: 1rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  background: #fff;
  opacity: 0.7;
  margin-right: 2rem;
  /* border: 2px solid #0467fb; */

  h5 {
    font-size: 1.3rem;
    font-weight: bold;
    position: relative;
    padding-bottom: 1rem;
    margin: 1rem 0;
    color: #101522;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 1px;
      background-color: #0467fb;
    }
  }
  p {
    color: #101522;
  }
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export default ServiceSection;
