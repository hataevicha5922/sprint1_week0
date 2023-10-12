import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Buttton = styled.button`
  width: 86px;
  height: 30px;
  border: 2px solid ${myTheme.colors.primary};
  border-radius: 5px;
  background-color: ${myTheme.colors.primary};
  color: #fff;
  font-size: 10px;
  font-family: 700;
  line-height: 20px;
`;
