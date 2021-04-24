import React, { useState } from "react";
import styled from "styled-components";
import { LocaleRadioGroup, SelectButton, SelectLabel } from "./common";
import {
  useQueryParam,
  withDefault,
  NumberParam,
  StringParam,
  BooleanParam,
} from "use-query-params";
import { FORMATS, TYPEFACES, LOCALES } from "../constants";

import OTFUsage from "./otf-usage";
import WebfontUsage from "./webfont-usage";

const Control = styled.div`
  padding: 5px;
`;

const ControlsWrapper = styled.div`
  margin: -5px;
  display: flex;
  flex-wrap: wrap;
`;

const RadioGroup = (props) => {
  const {
    selectedLocale,
    onLocaleChange,
    selectedTypeface,
    onTypefaceChange,

    cjk,
    onCJKChange,
    format,
    onFormatChange,
  } = props;
  return (
    <ControlsWrapper style={{ paddingBottom: "10px" }}>
      <Control>
        <SelectLabel>Locale</SelectLabel>
        <LocaleRadioGroup id="locale-group">
          {LOCALES.map((locale) => (
            <SelectButton
              key={locale}
              selected={locale === selectedLocale}
              onClick={() => {
                onLocaleChange(locale);
              }}
            >
              {locale}
            </SelectButton>
          ))}
        </LocaleRadioGroup>
      </Control>

      <Control>
        <SelectLabel>Typeface</SelectLabel>
        <LocaleRadioGroup id="typeface-group">
          <SelectButton
            selected={selectedTypeface === TYPEFACES.MINCHO}
            onClick={() => {
              onTypefaceChange(TYPEFACES.MINCHO);
            }}
          >
            Mincho
          </SelectButton>

          <SelectButton
            selected={selectedTypeface === TYPEFACES.GOTHIC}
            onClick={() => {
              onTypefaceChange(TYPEFACES.GOTHIC);
            }}
          >
            Gothic
          </SelectButton>
        </LocaleRadioGroup>
      </Control>

      <Control>
        <SelectLabel>Include glyphs from other locales?</SelectLabel>
        <LocaleRadioGroup id="cjk-group">
          <SelectButton
            selected={cjk}
            onClick={() => {
              onCJKChange(true);
            }}
          >
            Yes
          </SelectButton>

          <SelectButton
            selected={!cjk}
            onClick={() => {
              onCJKChange(false);
            }}
          >
            No
          </SelectButton>
        </LocaleRadioGroup>
      </Control>

      <Control>
        <SelectLabel>Format</SelectLabel>
        <LocaleRadioGroup id="cjk-group">
          <SelectButton
            selected={format === FORMATS.OTF}
            onClick={() => {
              onFormatChange(FORMATS.OTF);
            }}
          >
            OTF
          </SelectButton>

          <SelectButton
            selected={format === FORMATS.WEBFONT}
            onClick={() => {
              onFormatChange(FORMATS.WEBFONT);
            }}
          >
            Webfont
          </SelectButton>
        </LocaleRadioGroup>
      </Control>
    </ControlsWrapper>
  );
};

export default function Usage() {
  const [locale, setLocale] = useQueryParam(
    "loc",
    withDefault(StringParam, "HK")
  );
  const [typeface, setTypeface] = useQueryParam(
    "face",
    withDefault(NumberParam, TYPEFACES.MINCHO)
  );
  const [cjk, setCJK] = useQueryParam("cjk", withDefault(BooleanParam, true));

  const [format, setFormat] = useQueryParam(
    "fmt",
    withDefault(NumberParam, FORMATS.OTF)
  );

  return (
    <div>
      <RadioGroup
        selectedLocale={locale}
        onLocaleChange={setLocale}
        selectedTypeface={typeface}
        onTypefaceChange={setTypeface}
        cjk={cjk}
        onCJKChange={setCJK}
        format={format}
        onFormatChange={setFormat}
      />

      {format === FORMATS.OTF && (
        <OTFUsage locale={locale} typeface={typeface} cjk={cjk} />
      )}

      {format === FORMATS.WEBFONT && (
        <WebfontUsage locale={locale} typeface={typeface} cjk={cjk} />
      )}
    </div>
  );
}
