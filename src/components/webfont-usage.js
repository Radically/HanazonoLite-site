import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";
import { TYPEFACES } from "../constants";

const WebfontUsageContainer = styled.div`
  font-size: 0.85rem;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
`;

const getStylesheetDemoText = (locale, typeface, cjk) => {
  return `/* To import all A, B, C, and D splits */
@import
"https://cdn.jsdelivr.net/gh/Radically/HanazonoLite-webfont@built-${
    cjk ? "cjk-" : "single-"
  }${locale}/Mincho/HanaMinLite${cjk ? "CJK" : ""}${locale}.min.css";
/* To import A individually (same applies to the other splits) */
@import
"https://cdn.jsdelivr.net/gh/Radically/HanazonoLite-webfont@built-${
    cjk ? "cjk-" : "single-"
  }${locale}/Mincho/HanaMinLite${cjk ? "CJK" : ""}A${locale}.css";
  
/* Use A, B, C, D font stack */
font-family: Hanazono ${
    typeface === TYPEFACES.MINCHO ? "Mincho" : "Gothic"
  } Lite ${cjk ? "CJK" : ""}`;
};

export default (props) => {
  const { locale, typeface, cjk } = props;
  const stylesheetDemoText = getStylesheetDemoText(locale, typeface, cjk);

  useEffect(() => {
    Prism.highlightAll();
  }, [locale, typeface, cjk]);

  return (
    <WebfontUsageContainer>
      <div>CSS Stylesheet</div>

      <div>
        <pre style={{ overflowX: "scroll" }} className={`language-css`}>
          <code className={`language-css`}>{stylesheetDemoText}</code>
        </pre>
      </div>
    </WebfontUsageContainer>
  );
};
