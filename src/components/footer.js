import * as React from "react";
import styled from "styled-components";

const OwnFooter = styled.footer`
  text-align: center;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
  a:link {
    color: ${(props) => props.theme.mainColor};
  }

  a:visited {
    color: ${(props) => (props.theme.isDark ? "white" : "black")};
  }

  a:hover {
    color: ${(props) => props.theme.mainColor};
  }

  a:active {
    color: ${(props) => props.theme.mainColor};
  }
  padding: 10px 0 20px 0;
`;

export default function Footer() {
  return (
    <OwnFooter>
      Created by{" "}
      <a target="_blank" href="https://github.com/Transfusion">
        Bryan Kok
      </a>
    </OwnFooter>
  );
}
