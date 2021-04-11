import React, { useState } from "react";
import { LocaleRadioGroup, SelectButton, SelectLabel } from "./common";
import { FORMATS, TYPEFACES, LOCALES } from "../constants";

import OTFUsage from "./otf-usage";

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
    <div style={{ paddingBottom: "10px" }}>
      <SelectLabel>Locale</SelectLabel>
      <LocaleRadioGroup id="locale-group">
        {LOCALES.map((locale) => (
          <SelectButton
            selected={locale === selectedLocale}
            onClick={() => {
              onLocaleChange(locale);
            }}
          >
            {locale}
          </SelectButton>
        ))}
      </LocaleRadioGroup>

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
    </div>
  );
};

export default function Usage() {
  const [locale, setLocale] = useState("HK");
  const [typeface, setTypeface] = useState(TYPEFACES.MINCHO);
  const [cjk, setCJK] = useState(true);

  const [format, setFormat] = useState(FORMATS.OTF);

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

      <OTFUsage locale={locale} typeface={typeface} cjk={cjk} />
    </div>
  );
}
