import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic1 from "../../images/img3.jpg";
import pic2 from "../../images/inv5.jpg";
import pic3 from "../../images/partner.jpg";

const HomeSection2 = () => {
  return (
    <Flex>
      <Image>
        <img src={pic1} alt="" />
        <Link to="/healthcare">
          <Title>
            <h4>Healthcare</h4>
          </Title>
        </Link>
      </Image>
      <Image>
        <img src={pic2} alt="" />
        <Link to="/investments">
          <Title>
            <h4>Investments</h4>
          </Title>
        </Link>
      </Image>
      <Image>
        <img src={pic3} alt="" />
        <Link to="/partners">
          <Title>
            <h4>Partnerships</h4>
          </Title>
        </Link>
      </Image>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3px;
  margin: 3rem 3rem 10rem;
`;
const Image = styled.div`
  position: relative;
  max-width: 350px;

  /* border: 3px solid #0260a2; */
  &:hover img {
    opacity: 0.3;
    transition: 0.5s ease;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const Title = styled.div`
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  top: 120px;
  left: 150px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    opacity: 1;
    transition: 0.5s ease;
  }

  h4 {
    background-color: #0260a2;
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
  }
`;
export default HomeSection2;
