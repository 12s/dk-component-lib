import { create } from "@storybook/theming/create";
import { lime, nuetral, red } from "../src/utils";

export default create({
  colorPrimary: nuetral[100],
  colorSecondary: nuetral[500],
  barBg: red[300],
  barTextColor: nuetral[200],
  brandTitle: "GR Storybook",
  brandUrl: "https://rate.com/",
  brandImage: "https://mma.prnewswire.com/media/902553/Guaranteed_Rate_Logo.jpg?p=facebook"
});
