import React from "react";
import styled from "styled-components";
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

  padding: 5px 0 5px 15px;

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

export default function LogoUsage() {
  const blurb1 = useStaticQuery(graphql`
    query Blurb1Query {
      markdownRemark(fileAbsolutePath: { regex: "/blurb-1.md/" }) {
        html
      }
    }
  `);

  console.log(blurb1);

  return (
    <Container>
      <LogoDescContainer>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Logo />
          <LiteEditionText>輕量版</LiteEditionText>
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
