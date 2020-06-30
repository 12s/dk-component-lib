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

  disabled: nuetral[300],
  textOnDisabled: nuetral[100],

  primaryFont
};

export const darkTheme = {
  primaryColor: orange[100],
  primaryColorHover: orange[200],
  primaryColorActive: orange[400],

  secondaryColor: lime[300],
  secondaryColorHover: lime[200],
  secondaryColorActive: lime[400],

  textColorOnPrimary: nuetral[500],
  textColor: nuetral[100],
  textColorInverted: nuetral[100],

  disabled: nuetral[300],
  textOnDisabled: nuetral[100],

  primaryFont
};
