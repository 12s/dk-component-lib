import styled from "styled-components";
import { defaultTheme, typeScale, nuetral } from "../utils";

const Header = styled.div`
  background-color: ${nuetral[500]};
  font-size: ${typeScale.header5};
  padding: 20px 30px;
  font-family: Open Sans, sans-serif;
  color: ${defaultTheme.textColorInverted};
`;
export default Header;
