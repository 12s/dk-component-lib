import React from "react";
import { render } from "react-dom";
import MainSection from "./Home/MainSection.js";
import Header from "./Home/Header.js";

const App = () => {
  return (
    <div className="container">
      <Header>
        DraftKings <strong>[React Component Library]</strong>
      </Header>
      <MainSection />
    </div>
  );
};

render(<App />, document.getElementById("root"));
