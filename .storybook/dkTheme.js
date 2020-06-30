import { create } from "@storybook/theming/create";
import { lime, nuetral, dodger } from "../src/utils";

export default create({
  colorPrimary: "orange",
  colorSecondary: dodger[300],
  barBg: lime[300],
  barTextColor: nuetral[500],
  brandTitle: "DK Storybook",
  brandUrl: "https://www.draftkings.com/",
  brandImage:
    "https://www.draftkings.com/dkjs/header/v1/web/de8b3fb4a604ec9cc8468b2efdef4b91.png"
});
