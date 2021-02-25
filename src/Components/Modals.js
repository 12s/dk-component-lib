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
  const [seconds, setSeconds] = useState(14);
  const [isActive, setIsActive] = useState(true);
  const [finishTime] = useState(new Date(Date.now() + 20000));

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      setIsActive(false)
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
      <ModalWrapper>
        <div
          style={{
            background: "url('https://mma.prnewswire.com/media/902553/Guaranteed_Rate_Logo.jpg?p=facebook')",
            height: "100px",
            width: "255px",
            backgroundSize: "cover",
            backgroundPosition: "center",

          }}
        >
          
        </div>

        <ModalHeader>Refinance today</ModalHeader>
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

        <Button 
        disabled={(seconds <= 0) ? true : false}
        onClick={() => setShowModal(false)}>
          {(seconds <= 0) ? "Expired! 🥲" : "Get Started!"}
        </Button>
      </ModalWrapper>
    </animated.div>
  );
};
