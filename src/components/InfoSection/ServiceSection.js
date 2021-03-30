import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Heading } from "./InfoSection.elements";
import pic3 from "../../images/pic3.jpg";

const ServiceSection = () => {
  return (
    <House>
      <Container>
        <Header>
          <h1>
            Asabi<span> Investments</span> Portfolio
          </h1>
          <p>
            The fund is invested in taking a Pan-African approach and invest in
            MSMEs from Kenya, Uganda, Ghana, Nigeria, Zimbabwe, Ethiopia,
            Franco-phone West Africa and South Africa. These businesses range in
            size and industry focus. Asabi Investments invests in high growth
            MSMEs driving impact in some of the fastest growing industries and
            looking to scale across Africa.
          </p>
        </Header>
        <Service>
          <Content>
            <h5>Locally engaged</h5>
            <p>
              Asabi seeks to build trusting, collaborative and long term
              relationships with its portfolio companies, industry stakeholders,
              government partners, non-profit players with aligned interests
            </p>
          </Content>
          <Content>
            <h5>Data driven decision making</h5>
            <p>
              The decision making process at Asabi investments is deeply
              anchored in analytical rigour. As the team adheres to both local
              and international regulatory expectations, there’s keen attention
              paid to optimization of processes where things can be done much
              faster and better as the world evolves into trends that cannot be
              predicted.
            </p>
          </Content>
          <Content>
            <h5>Collaborative and resilient team culture</h5>
            <p>
              As Asabi partners with entrepreneurs to fund the next generation
              of resilient MSMEs, attention has been paid to team cohesion and
              finding great talent. Through already existing networks, Asabi is
              able to tap into a team of seasoned investors, industry experts
              and talent, to help grow the venture sustainably.
            </p>
          </Content>
        </Service>
      </Container>
    </House>
  );
};
const House = styled.div`
  width: 100%;
  /* background-color: #191d28; */
  background-image: linear-gradient(
      to bottom,
      rgba(16, 21, 34, 0.73),
      rgba(245, 246, 252, 0.52)
    ),
    url(${pic3});
  background-size: cover;
  width: 100%;
  height: 100vh;
  border-left: 1px solid #2e344e;
  border-right: 1px solid #2e344e;
  border-bottom: 1px solid #2e344e;
  border-top: 8px solid #2e344e;
  transition: all 4s ease-in-out;

  &:hover {
    border-top: 8px solid #037fff;
  }
`;
const Header = styled.div`
  h1 {
    padding: 2rem 0;
  }
  span {
    color: #037fff;
  }
  color: #fff;
  padding-top: 2rem;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 1.5rem;
`;
const Service = styled.div`
  display: flex;
  padding: 5rem 0;
  justify-content: space-around;

  @media (max-width: 1300px) {
    display: block;
    width: 100%;
    padding: 1rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  background: rgba(16, 21, 34, 0.7);

  h5 {
    font-size: 1.6rem;
    font-weight: bold;
    position: relative;
    padding-bottom: 1rem;
    margin: 1rem 0;
    color: #fff;

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
    color: #a9b3c1;
  }
`;

export default ServiceSection;
