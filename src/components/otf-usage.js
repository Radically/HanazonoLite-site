import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TYPEFACES } from "../constants";
import { formatBytes } from "../utils";

import { LoadingYetToCompleteContainer } from "./common";
import Spinner from "./spinner";

const LOADING_STATE = {
  LOADING: 0,
  COMPLETED: 1,
  FAILED: 2,
};

const OTFUsageContainer = styled.div`
  // font-family: var(--default-latin-sans);
  font-size: 0.85rem;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
`;

const DownloadDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(90px, 1fr);
  // grid-template-rows: repeat(auto-fill, 100px);
  grid-row-gap: 0.5rem;
  grid-column-gap: 1rem;
  max-width: 350px;
`;

const ReleaseContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ReleaseDate = styled.span`
  font-size: 0.7rem;
  height: 20px;
`;

const DownloadLink = styled.div`
  font-weight: 700;
`;

export default (props) => {
  const { locale, typeface, cjk } = props;
  const [loading, setLoading] = useState(LOADING_STATE.COMPLETED);

  const [release, setRelease] = useState({ published_at: 0, assets: [] });

  const performLoad = async () => {
    try {
      setLoading(LOADING_STATE.LOADING);
      const release = await (
        await fetch(
          `https://api.github.com/repos/Radically/HanazonoLite/releases/latest`
        )
      ).json();

      release.assets = release.assets.filter(
        ({ content_type }) => content_type === "font/otf"
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
    `Hana${typeface === TYPEFACES.MINCHO ? "Min" : "Goth"}Lite${
      cjk ? "CJK" : ""
    }([A-Z0-9]{1,2})${locale}.otf$`
  );

  console.log("search_regex", search_regex);

  const otfassets = release.assets.filter(({ name }) =>
    search_regex.test(name)
  );

  console.log(otfassets);

  return (
    <OTFUsageContainer>
      {/* [![GitHub
      release](https://img.shields.io/github/release/Radically/HanazonoLite.svg)](https://GitHub.com/Radically/HanazonoLite/releases/) */}

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
                href="https://github.com/Radically/HanazonoLite/releases/latest"
              >
                <img src="https://img.shields.io/github/release/Radically/HanazonoLite.svg" />
              </a>
            </div>

            <ReleaseDate>
              {new Date(release.published_at).toLocaleString()}
            </ReleaseDate>
          </ReleaseContainer>
          <DownloadDetails>
            <div>Name</div>
            <div>Size</div>
            {otfassets.map(({ name, browser_download_url, url, size }) => (
              <>
                <DownloadLink>
                  <a target="_blank" href={browser_download_url}>
                    {name}
                  </a>
                </DownloadLink>
                <div>{formatBytes(size)}</div>
              </>
            ))}
          </DownloadDetails>
        </>
      )}
    </OTFUsageContainer>
  );
};
