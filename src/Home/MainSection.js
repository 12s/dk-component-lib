import React from "react";
import { Content } from "carbon-components-react/lib/components/UIShell";

const MainSection = () => {
  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <p style={{ lineHeight: "20px" }}>Hello!</p>
          <br />
          <br />
          <p style={{ lineHeight: "20px" }}>
            This is the Git Repo for two components (src/Components) that are
            used to create a React StoryBook. The StoryBook is hosted on netlify
            and comes equiped with full service CICD builds and deployments.
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
            . pdf:
            <a
              style={{ paddingLeft: "4px" }}
              href="https://www.figma.com/file/i4sdIfBSXcw2F0boDmgJyM/DK-Design-Pallet?node-id=27%3A305"
            >
              here
            </a>
          </p>
          <br />
          <br />
          <p style={{ lineHeight: "20px" }}>
            Sorybook with knobs/alternate theming:
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

  return <Content id="main-content">{content}</Content>;
};

export default MainSection;
