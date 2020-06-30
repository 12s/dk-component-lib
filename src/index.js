import React from "react";
import { render } from "react-dom";
import {Main, Paragraph} from "./Home/MainSection.js";
import Header from "./Home/DKHeader.js";
import { PrimaryButton, SecondaryButton } from "./Components/Buttons.js";

const App = () => (
  <div className="container">
    <Header>
      DraftKings <strong>[React Component Library]</strong>
    </Header>
    <Main /> 
    <Paragraph>
      Hello!
      </Paragraph>
    </Main>
    <PrimaryButton>Button has to render something.. </PrimaryButton>
    <SecondaryButton>Button has to render something.. </SecondaryButton>
  </div>
);

render(<App />, document.getElementById("root"));
