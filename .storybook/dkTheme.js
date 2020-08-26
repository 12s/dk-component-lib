import { create } from "@storybook/theming/create";
import { lime, nuetral, dodger } from "../src/utils";

export default create({
  colorPrimary: nuetral[200],
  colorSecondary: nuetral[500],
  barBg: dodger[200],
  barTextColor: nuetral[200],
  brandTitle: "Swoop Storybook",
  brandUrl: "https://swoopapp.com/",
  brandImage: "https://joinswoop.com/assets/img/logo-6a429e4c8f.svg"
});
