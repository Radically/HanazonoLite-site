import React from "react";
import styled, { css } from "styled-components";
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";

import { MdWbSunny, MdBrightness3 } from "react-icons/md";
import Logo from "./logo";
import { Container, Blurb } from "./common";

import { useStaticQuery, graphql } from "gatsby";
import Usage from "./usage";

/* const LiteEditionTextBG = styled.div`
  padding: 0 15px 0 15px;
  min-height: 45px;
`; */

const LogoDescContainer = styled.div`
  flex: 0.4;
  min-width: 300px;

  @media screen and (min-width: 1200px) {
    padding-right: 15px;
  }
`;

const LiteEditionText = styled.div`
  font-family: Hanazono Mincho Lite CJK;
  font-size: 2rem;
  font-weight: bold;

  padding: 5px 15px 5px 15px;

  background-image: linear-gradient(
    125deg,
    ${(props) => (props.theme.isDark ? "#4db6ac" : "#00695c")},
    ${(props) => (props.theme.isDark ? "white" : "black")}
  );

  /* Set the background size and repeat properties. */
  background-repeat: repeat;
  background-size: 100%;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const LightDarkToggleStyle = css`
  color: ${(props) => props.theme.mainColor};
  align-self: flex-start;
  cursor: pointer;
`;

const LightToggle = styled(MdWbSunny)`
  ${LightDarkToggleStyle}
`;

const DarkToggle = styled(MdBrightness3)`
  ${LightDarkToggleStyle}
`;

export default function LogoUsage() {
  const blurb1 = useStaticQuery(graphql`
    query Blurb1Query {
      markdownRemark(fileAbsolutePath: { regex: "/blurb-1.md/" }) {
        html
      }
    }
  `);

  console.log(blurb1);

  const { isDark, toggleDark } = useStyledDarkMode();

  const LightDarkToggle = isDark ? DarkToggle : LightToggle;

  return (
    <Container style={{ paddingBottom: "10px" }}>
      <LogoDescContainer>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Logo />
          <LiteEditionText>輕量版</LiteEditionText>

          {/* <div style={{ flexGrow: 1 }} /> */}
          <LightDarkToggle
            onClick={() => {
              toggleDark(!isDark);
            }}
            size={"25px"}
          />
        </div>

        {/* <a target="_blank" href="https://github.com/Radically/HanazonoLite">
          <img src="https://github.com/Radically/HanazonoLite/actions/workflows/generate-fonts-release.yml/badge.svg" />
        </a> */}

        <Blurb
          dangerouslySetInnerHTML={{ __html: blurb1.markdownRemark.html }}
        ></Blurb>
      </LogoDescContainer>
      <div
        id="usage-container"
        style={{
          flex: 0.6,
          minWidth: 0,
          border: "0px solid black",
        }}
      >
        <Usage />
      </div>
    </Container>
  );
}
