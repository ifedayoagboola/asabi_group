import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Toggler layout classname="question" onClick={() => setToggle(!toggle)}>
      <h4 layout>{title}</h4>
      <div className="faq-line"></div>
      {toggle ? children : ""}
    </Toggler>
  );
};
const Toggler = styled.div`
  display: none;
  @media (max-width: 1300px) {
    display: block;
    width: 100%;
  }
`;
export default Toggle;
