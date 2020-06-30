import React, { useState } from "react";
import { render } from "react-dom";
import { MainSection } from "./Home/MainSection.js";
import Header from "./Home/Header.js";
import { defaultTheme, darkTheme } from "./utils";
import { PrimaryButton } from "./Components/Buttons.js";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div className="container">
        <Header>
          DraftKings <strong>[React Component Library]</strong>
        </Header>
        <MainSection />
        <PrimaryButton
          onClick={() => {
            setDarkTheme(!useDarkTheme);
          }}
        >
          Toggle dark theme
        </PrimaryButton>
      </div>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
