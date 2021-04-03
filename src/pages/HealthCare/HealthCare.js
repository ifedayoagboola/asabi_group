import React from "react";
import ServiceSection from "../../components/InfoSection/ServiceSection";
import styled from "styled-components";

function HealthCare() {
  return (
    <House>
      <ServiceSection />
    </House>
  );
}

const House = styled.div`
  > * {
    margin-top: 0;
  }
`;
export default HealthCare;
