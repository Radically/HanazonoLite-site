import React from "react";
import styled, { keyframes } from "styled-components";

const spinning = keyframes`
  to {transform: rotate(360deg);}
`;

const Spinner = styled.span`
  display: block;
  // border: 1px solid red;
  // &::after {
  border-top: 4px solid rgba(255, 255, 255, 1);
  border-left: 4px solid rgba(255, 255, 255, 1);
  border-bottom: 4px solid rgba(255, 255, 255, 1);
  border-right: 4px solid rgba(255, 255, 255, 0);

  border: 4px solid ${(props) => (props.theme.isDark ? "white" : "black")};
  border-right: 4px solid transparent;
  animation: ${spinning} 1.3s linear infinite;

  // content: "";
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  // position: absolute;
  // top: calc(50% - 20px);
  // left: calc(50% - 20px);
  border-radius: 50%;
  // }
`;

export default Spinner;
