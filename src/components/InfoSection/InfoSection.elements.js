import styled from "styled-components";
import pic4 from "../../images/pic4.jpg";
import inv6 from "../../images/inv2.jpg";

export const InfoSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  background-image: url(${pic4});
  background-size: cover;
`;
export const InfoSec2 = styled.div`
  color: #101522;
  padding: 80px 0;
  background-image: url(${inv6});
  background-size: cover;
`;
export const InfoSec3 = styled.div`
  color: #101522;
  padding: 80px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: block;
    justify-content: center;
  }
`;
export const InfoColumn2 = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  border-left: 3px solid #0467fb;
  border-top: 3px solid #0467fb;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: block;
  }
`;
export const InfoColumn3 = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  border-right: 3px solid #0467fb;
  border-bottom: 3px solid #0467fb;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 1rem 1rem 60px;
  background: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const TextWrapper2 = styled.div`
  max-width: 540px;
  padding: 1rem 1rem 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Info = styled.div`
  max-width: 555px;
  background: #fff;
  opacity: 0.8;
  color: #101522;
  padding: 2rem;
  margin-bottom: 1rem;
`;
export const Info2 = styled.div`
  max-width: 555px;
  background: #fff;
  opacity: 0.8;
  color: #101522;
  padding: 2rem 2rem 2rem 1rem;
  margin-bottom: 1rem;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 2px solid #fff;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
