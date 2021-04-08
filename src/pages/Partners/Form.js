import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Parent>
        <Content>
          <h3>
            Reach out using the form below if you are interested in the work we
            are doing at Asabi Group
          </h3>
          <form action="">
            <div>
              <label>Full Name</label>
              <input type="text" />
            </div>
            <div>
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div>
              <label>Message</label>
              <textarea name="" id="" cols="99" rows="10"></textarea>
            </div>
            <button>SUBMIT</button>
          </form>
        </Content>
      </Parent>
    </>
  );
};

const Parent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  color: #101522;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 3rem;
  width: 60%;
  border-radius: 10px;

  background: #fff;
  span {
    color: #3f66ff;
    a {
      text-decoration: none;
    }
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.3rem 0 1rem;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }
  }
  textarea {
    outline: none;
    width: 100%;
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin: 2rem 0;
    background: #0260a2;
    color: #fff;
    border-radius: 10px;
    border: none;
    outline: none;
    &:hover {
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }
  }
  h3 {
    width: 100%;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export default Contact;
