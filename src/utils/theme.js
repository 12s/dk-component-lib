import { orange, lime, nuetral } from "./colors.js";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: orange[300],
  primaryColorHover: orange[200],
  primaryColorActive: orange[400],

  secondaryColor: lime[300],
  secondaryColorHover: lime[200],
  secondaryColorActive: lime[400],

  textColorOnPrimary: nuetral[100],
  textColor: nuetral[500],
  textColorInverted: nuetral[100],

  primaryFont
};
