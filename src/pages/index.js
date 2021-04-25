import * as React from "react";
import styled from "styled-components";
import LogoUsage from "../components/logo-usage";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import FontDemoArea from "../components/font-demo-area";
import MoreInfo from "../components/faq-area";

import "hanazono-mincho-lite-cjk-tc";
import "hanazono-gothic-lite-cjk-tc";
import "@fontsource/open-sans";
import SEO from "../components/seo";

/* const pageStyles = {
  fontFamily: "sans-serif",
  minHeight: "100%",
}; */

const MainContainer = styled.main`
  font-family: var(--default-latin-sans);
  min-height: 100%;
  transition: background-color 0.3s;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// markup
const IndexPage = () => {
  return (
    <MainContainer>
      <SEO />
      <title>Hanazono Lite</title>
      <NavBar />
      <LogoUsage />

      <FontDemoArea />

      <MoreInfo />
      <Footer />
    </MainContainer>
  );
};

export default IndexPage;
