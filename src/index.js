import React from "react";
import { render } from "react-dom";
import { Main, Paragraph } from "./Home/MainSection.js";
import Header from "./Home/DKHeader.js";
import { defaultTheme, darkTheme } from "./utils";
import { PrimaryButton, SecondaryButton } from "./Components/Buttons.js";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [userDarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={userDarkTheme ? darkTheme : defaultTheme}>
      <div className="container">
        <Header>
          DraftKings <strong>[React Component Library]</strong>
        </Header>
        <Main>
          <Paragraph>Hello!</Paragraph>
        </Main>
        <PrimaryButton>Button has to render something.. </PrimaryButton>
        <SecondaryButton>Button has to render something.. </SecondaryButton>
      </div>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
