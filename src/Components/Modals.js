import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { typeScale, primaryFont, nuetral, dodger } from "../utils";
import { Button } from "./Buttons";
// import { EmailInput, PasswordInput } from "./TextFields";

const getAnimation = (showModal) => {
  return {
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`
  };
};

const ModalWrapper = styled.div`
  width: 700px;
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
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(true);

  const [finishTime] = useState(new Date(Date.now() + 20000));

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ModalWrapper>
        <div
          style={{
            background: nuetral[500],
            display: "flex",
            justifyContent: "center",
            height: "112px",
            width: "260px"
          }}
        >
          <img src="https://joinswoop.com/assets/img/logo-6a429e4c8f.svg" />
        </div>

        <ModalHeader>Sign Up</ModalHeader>
        {seconds > 0 && (
          <SignUpText>
            Promotion only lasts until {finishTime.toLocaleTimeString()}! Only{" "}
            {seconds} more seconds left!
          </SignUpText>
        )}

        {seconds <= 0 && (
          <SignUpText>
            Welp... you can always refresh the browser for a new promo :)
          </SignUpText>
        )}

        <Button onClick={() => setShowModal(false)}>Sign Up</Button>
      </ModalWrapper>
    </animated.div>
  );
};
