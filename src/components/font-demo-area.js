import React, { useState } from "react";
import styled from "styled-components";
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";

import { DIRECTION, LANGS, SAMPLE_TEXT, TYPEFACES, WEIGHT } from "../constants";

import { LocaleRadioGroup, SelectButton, SelectLabel } from "./common";

// import ContentEditable from "./contenteditable";

import ContentEditable from "react-contenteditable";

const Control = styled.div`
  padding: 5px;
`;

const ControlsWrapper = styled.div`
  /* ${Control} + ${Control} {
    margin-left: 1rem;
  } */
  margin: -5px;
  display: flex;
  flex-wrap: wrap;
`;

const Controls = (props) => {
  const {
    selectedTypeface,
    onTypefaceChange,
    selectedFontSize,
    onFontSizeChange,

    direction,
    setDirection,

    weight,
    setWeight,
  } = props;
  return (
    <ControlsWrapper>
      <Control>
        <SelectLabel>Typeface</SelectLabel>
        <LocaleRadioGroup id="typeface-demo-group">
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
        <SelectLabel>Size {selectedFontSize}pt</SelectLabel>
        <div style={{ height: "32px", display: "flex", alignItems: "center" }}>
          <input
            type="range"
            min="8"
            max="80"
            value={selectedFontSize}
            onChange={({ target: { value } }) => {
              onFontSizeChange(value);
            }}
            step="2"
          />
        </div>
      </Control>

      <Control>
        <SelectLabel>Direction</SelectLabel>
        <LocaleRadioGroup id="direction-demo-group">
          <SelectButton
            selected={direction === DIRECTION.HORIZONTAL}
            onClick={() => {
              setDirection(DIRECTION.HORIZONTAL);
            }}
          >
            Horizontal
          </SelectButton>

          <SelectButton
            selected={direction === DIRECTION.VERTICAL}
            onClick={() => {
              setDirection(DIRECTION.VERTICAL);
            }}
          >
            Vertical
          </SelectButton>
        </LocaleRadioGroup>
      </Control>

      <Control>
        <SelectLabel>Weight</SelectLabel>
        <LocaleRadioGroup id="weight-demo-group">
          <SelectButton
            selected={weight === WEIGHT.REGULAR}
            onClick={() => {
              setWeight(WEIGHT.REGULAR);
            }}
          >
            Regular
          </SelectButton>

          <SelectButton
            selected={weight === WEIGHT.BOLD}
            onClick={() => {
              setWeight(WEIGHT.BOLD);
            }}
          >
            Faux Bold
          </SelectButton>
        </LocaleRadioGroup>
      </Control>
    </ControlsWrapper>
  );
};

/* const FontDemoAreaContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
`; */

const ControlsContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const DemoLocalesContainer = styled.div`
  display: flex;
  // margin-bottom: 10px;
  flex-direction: ${(props) =>
    props.direction === DIRECTION.HORIZONTAL ? "column" : "row"};
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
  overflow-x: ${(props) =>
    props.direction === DIRECTION.VERTICAL ? "overlay" : "auto"};
`;

export default (props) => {
  const [typeface, setTypeface] = useState(TYPEFACES.MINCHO);
  const [fontSize, setFontSize] = useState(20);
  const [direction, setDirection] = useState(DIRECTION.HORIZONTAL);
  const [weight, setWeight] = useState(WEIGHT.REGULAR);

  const [demoText, setDemoText] = useState(SAMPLE_TEXT);

  const darkModeHook = useStyledDarkMode();
  console.log("darkmode value");
  console.log(darkModeHook);

  const { isDark } = darkModeHook;

  return (
    <>
      <ControlsContainer>
        <Controls
          selectedTypeface={typeface}
          onTypefaceChange={setTypeface}
          selectedFontSize={fontSize}
          onFontSizeChange={setFontSize}
          direction={direction}
          setDirection={setDirection}
          weight={weight}
          setWeight={setWeight}
        />
      </ControlsContainer>

      <DemoLocalesContainer direction={direction}>
        {LANGS.map((lang, idx) => (
          <div
            lang={lang}
            style={{
              minHeight: "80px",
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              borderBottom:
                direction === DIRECTION.HORIZONTAL && "1px solid currentColor",
              borderRight:
                direction === DIRECTION.VERTICAL && "1px solid currentColor",
            }}
          >
            <div>{lang}</div>
            <ContentEditable
              key={weight}
              //   contentEditable
              onChange={({ target: { value } }) => {
                setDemoText(value);
              }}
              style={{
                boxSizing: "border-box",
                padding: "5px",
                fontSize: `${fontSize}pt`,
                fontFamily: `Hanazono ${
                  typeface === TYPEFACES.MINCHO ? "Mincho" : "Gothic"
                } Lite CJK`,
                fontWeight: weight === WEIGHT.BOLD ? "bold" : "regular",
                width: "100%",
                background: "inherit",
                outline: "none",
                resize: "none",

                // writingMode: direction === DIRECTION.VERTICAL && "vertical-rl",
              }}
              html={demoText}
            />
            {/* <textarea
              contentEditable
              value={demoText}
              onChange={({ target: { value } }) => {
                setDemoText(value);
              }}
              style={{
                boxSizing: "border-box",
                fontSize: `${fontSize}pt`,
                fontFamily: `Hanazono ${
                  typeface === TYPEFACES.MINCHO ? "Mincho" : "Gothic"
                } Lite CJK`,
                background: "inherit",
                width: "100%",
                resize: "none",
                border: "1px solid red",
                outline: "none",
              }}
            /> */}
          </div>
        ))}
      </DemoLocalesContainer>
    </>
  );
};
