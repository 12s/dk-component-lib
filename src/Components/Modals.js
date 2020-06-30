import React from "react";
import styled from "styled-components";
// import { animated, useSpring } from "react-spring";
import { typeScale, primaryFont, nuetral } from "../utils";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { EmailInput, PasswordInput } from "./TextFields";

const getAnimation = (showModal) => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`
  };
};

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  font-family: ${primaryFont};
  background-color: ${nuetral[200]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const ColumnModalWrapper = styled(ModalWrapper)`
  flex-direction: row;
  justify-content: space-around;
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const HeaderImage = styled.img`
  src: https://d9sojbwwxq62r.cloudfront.net/dkjs/baa034abd5a1637103cc1d9ef99f572b.png;
  height: 76px;
  width: 140px;
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <ModalWrapper>
      <HeaderImage />
      <ModalHeader>Sign Up</ModalHeader>
      <SignUpText>
        Sign up today to get access to all of our content and features!
      </SignUpText>
      <PrimaryButton onClick={() => console.log("You signed up!")}>
        Sign Up
      </PrimaryButton>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => setShowModal(false)}
      ></CloseModalButton>
    </ModalWrapper>
  );
};
