import React from "react";
import styled from "styled-components";
import { defaultTheme, typeScale, nuetral } from "../utils";

export const Main = styled.div`
  background-color: ${nuetral[100]};
  font-size: ${typeScale.paragraph};
  padding: 20px 30px;
  height: 100%;
  font-family: ${defaultTheme.primaryFont};
  color: ${defaultTheme.textColorInverted};
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 20px;
`;

const MainSection = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <br />
          <br />
          <p style={{ lineHeight: "20px" }}>
            Components made with styled-componets. Theming in utils directory.
          </p>
          <br />
          <br />
          <p style={{ lineHeight: "20px" }}>
            Figma Pallet Design:
            <a
              style={{ paddingLeft: "4px" }}
              href="https://www.figma.com/file/i4sdIfBSXcw2F0boDmgJyM/DK-Design-Pallet?node-id=27%3A305"
            >
              here
            </a>
            .
          </p>
          <br />
          <br />
          <p style={{ lineHeight: "20px" }}>
            Sorybook showing Button/Modal canvas/docs:
            <a
              style={{ paddingLeft: "4px" }}
              href="https://www.carbondesignsystem.com/"
            >
              here
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
