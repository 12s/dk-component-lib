import styled from "styled-components";
import {
  defaultTheme,
  typeScale,
  primaryFont,
  red,
  dodger,
  nuetral,
  lime
} from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

export const STATUS_MODIFIERS = {
  warning: () => `
    background-color: ${defaultTheme.warningColor};

  `,
  error: () => `
  background-color: ${defaultTheme.errorColor};

  `,
  success: () => `
  background-color: ${defaultTheme.successColor};

  `
};
export const STATUS_MODIFIERS_SECONDARY = {
  warning: () => `
    background-color: ${defaultTheme.warningColor};
color:${nuetral[100]};
  `,
  error: () => `
  background-color: ${defaultTheme.errorColor};
color:${nuetral[100]};
  `,
  success: () => `
  background-color: ${defaultTheme.successColor};
color:${nuetral[100]};
  `
};

export const SIZE_MODIFIERS = {
  small: () => `
  padding: 8px;
  font-size: ${typeScale.helperText};
  `,
  large: () => `
  padding: 16px 24px;
  font-size: ${typeScale.header5};
  `
};
export const COLOR_MODIFIERS = {
  red: () => `
  background-color: ${red[300]};
  `,
  lime: () => `
  background-color: ${lime[400]};
  `,
  dodger: () => `
  background-color: ${dodger[300]};
  `
};
export const COLOR_MODIFIERS_SECONDAY = {
  red: () => `
  background-color: ${red[300]};
  color:${nuetral[100]};
  `,
  lime: () => `
  background-color: ${lime[400]};
  color:${nuetral[100]};

  `,
  dodger: () => `
  background-color: ${dodger[300]};
  color:${nuetral[100]};
  `
};

export const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  letter-spacing: 1px;

  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${defaultTheme.textColorOnPrimary};

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(SIZE_MODIFIERS, "size")};
  ${applyStyleModifiers(COLOR_MODIFIERS, "color")};
  ${applyStyleModifiers(STATUS_MODIFIERS, "status")};
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    color: ${nuetral[500]};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(SIZE_MODIFIERS, "size")};
  ${applyStyleModifiers(COLOR_MODIFIERS_SECONDAY, "color")};
  ${applyStyleModifiers(STATUS_MODIFIERS_SECONDARY, "status")};
`;
