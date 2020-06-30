import { orange, lime, nuetral, warning, error, success } from "./colors.js";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: orange[300],
  primaryColorHover: lime[200],
  primaryColorActive: lime[400],

  secondaryColor: lime[300],
  secondaryColorHover: lime[200],
  secondaryColorActive: lime[400],

  textColorOnPrimary: nuetral[100],
  textColor: nuetral[500],
  textColorInverted: nuetral[100],

  disabled: nuetral[300],
  textOnDisabled: nuetral[100],

  warningColor: warning[300],

  errorColor: error[300],

  successColor: success[300],

  primaryFont
};

export const darkTheme = {};
