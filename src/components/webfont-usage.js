import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";
import { TYPEFACES } from "../constants";

import {
  LoadingYetToCompleteContainer,
  ReleaseContainer,
  ReleaseDate,
} from "./common";
import Spinner from "./spinner";

const LOADING_STATE = {
  LOADING: 0,
  COMPLETED: 1,
  FAILED: 2,
};

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

  const [loading, setLoading] = useState(LOADING_STATE.COMPLETED);

  const [release, setRelease] = useState({ published_at: 0, assets: [] });

  const performLoad = async () => {
    try {
      setLoading(LOADING_STATE.LOADING);
      const release = await (
        await fetch(
          `https://api.github.com/repos/Radically/HanazonoLite-WebFont/releases/latest`
        )
      ).json();

      release.assets = release.assets.filter(({ name }) =>
        name.endsWith(".tgz")
      );
      setRelease(release);
      setLoading(LOADING_STATE.COMPLETED);
    } catch (error) {
      console.log(error);
      setLoading(LOADING_STATE.FAILED);
    }
  };

  useEffect(performLoad, []);

  const search_regex = new RegExp(
    `hanazono-${typeface === TYPEFACES.MINCHO ? "mincho" : "gothic"}-lite${
      cjk ? "-cjk" : ""
    }-${locale.toLowerCase()}-(.*).tgz$`
  );

  const webfontassets = release.assets.filter(({ name }) =>
    search_regex.test(name)
  );

  console.log(webfontassets);

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

      <div style={{ paddingBottom: "10px" }}>Webpack</div>

      {loading === LOADING_STATE.LOADING && (
        <LoadingYetToCompleteContainer>
          <Spinner />
        </LoadingYetToCompleteContainer>
      )}

      {loading === LOADING_STATE.FAILED && (
        <LoadingYetToCompleteContainer>
          <span>Loading failed.&nbsp;</span>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => {
              performLoad();
              return false;
            }}
          >
            Refresh
          </a>
        </LoadingYetToCompleteContainer>
      )}

      {loading === LOADING_STATE.COMPLETED && (
        <>
          <ReleaseContainer>
            <div style={{ marginRight: "10px" }}>
              <a
                target="_blank"
                href="https://github.com/Radically/HanazonoLite-webfont/releases/latest"
              >
                <img src="https://img.shields.io/github/release/Radically/HanazonoLite-webfont.svg" />
              </a>
            </div>

            <ReleaseDate>
              {new Date(release.published_at).toLocaleString()}
            </ReleaseDate>
          </ReleaseContainer>

          <div>
            <pre style={{ overflowX: "scroll" }} className={`language-bash`}>
              <code className={`language-bash`}>
                {webfontassets
                  .map(
                    ({ name, browser_download_url, url, size }) =>
                      `npm i --save ${browser_download_url}`
                  )
                  .join("\n")}
              </code>
            </pre>
          </div>
        </>
      )}
    </WebfontUsageContainer>
  );
};
