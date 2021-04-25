import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";

const TealSVGPath = styled.path`
  fill: ${(props) => props.theme.mainColor};
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

const TealShadowSVGPath = styled(TealSVGPath)`
  filter: drop-shadow(10px 10px 15px #757575);
`;

const WhiteSVGPath = styled.path`
  fill: #ffffff;
`;

const WhiteShadowSVGPath = styled(WhiteSVGPath)`
  filter: drop-shadow(10px 10px 10px #757575);
`;

export default () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  // const darkModeHook = useStyledDarkMode();
  // console.log(darkModeHook);

  return (
    <svg
      height="80px"
      width="80px"
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 550 550"
    >
      <TealShadowSVGPath
        class="cls-3"
        d="M284.42 135.2 288.63 89.33 387 89.33 387 80.25 361.72 57.55 340.66 80.25 290.74 80.25 294.32 38.93 301.69 35.98 296 30.76 271.36 23.04 263.98 80.25 214.27 80.25 214.27 89.33 263.98 89.33 257.66 145.42 284.42 135.2z"
      />
      <TealShadowSVGPath
        class="cls-3"
        d="M229.02 163.81 235.34 159.72 229.02 155.18 203.74 150.64 203.74 346.26 229.02 320.98 229.02 251.67 298.33 251.67 307.41 242.59 229.02 242.59 229.02 163.81z"
      />
      <TealShadowSVGPath
        class="cls-3"
        d="M193.21 80.25 167.93 57.55 146.86 80.25 141.6 80.25 136.33 34.39 143.07 31.21 136.33 27.58 110.84 26.22 116.11 80.25 20.47 80.25 20.47 89.33 118.22 89.33 124.53 148.82 147.92 132.02 143.7 89.33 193.21 89.33 193.21 80.25z"
      />
      <TealShadowSVGPath
        class="cls-3"
        d="M39.22 295.04 56.28 281.87 72.72 268.02 88.3 253.72 91.46 250.08 91.46 419 116.74 405.38 116.74 247.81 123.06 244.63 116.74 240.09 104.73 238.73 117.8 223.52 131.7 207.63 144.97 191.51 157.82 174.93 164.14 165.4 172.56 165.4 169.82 157.9 150.02 140.65 149.18 142.46 148.97 144.28 138.44 159.49 127.27 176.29 115.69 192.87 103.26 209.22 90.62 225.33 77.14 241.23 63.24 257.12 48.91 272.56 19 304.12 21.32 307.3 39.22 295.04z"
      />
      <TealShadowSVGPath class="cls-3" d="M550 0 0 550 550 550 550 0z" />
      <WhiteShadowSVGPath
        class="cls-4"
        d="M175.18 490.67 486.04 490.67 486.04 514.77 514.95 500.31 514.95 150.89 527 141.25 500.5 119.56 486.04 131.62 418.38 131.62 408.75 141.25 486.04 141.25 486.04 481.03 175.18 481.03 175.18 374.82 146.26 403.74 146.26 522 175.18 507.54 175.18 490.67z"
      />
      <WhiteShadowSVGPath
        class="cls-4"
        d="M464.35 232.83 440.25 211.14 420.97 232.83 346.27 232.83 346.27 203.73 317.35 232.65 317.35 232.83 317.17 232.83 307.53 242.47 317.35 242.47 346.27 242.47 464.35 242.47 464.35 232.83z"
      />
      <WhiteShadowSVGPath
        class="cls-4"
        d="M437.84 191.86 437.84 182.22 413.74 160.53 394.46 182.22 367.78 182.22 358.14 191.86 437.84 191.86z"
      />
      <WhiteShadowSVGPath
        class="cls-4"
        d="M265.78 464.64 265.78 466.09 271.32 471.39 276.38 464.16 284.34 462 303.86 456.45 324.58 449.46 335.19 445.37 346.03 440.79 368.44 429.94 367.23 425.85 354.7 427.77 342.66 429.22 331.33 430.91 309.64 433.8 293.25 435.24 293.25 386.32 306.51 376.69 319.04 366.08 331.33 355 345.79 338.85 392.05 338.85 406.51 338.85 420.97 338.85 435.43 338.85 435.43 329.22 420.97 319.58 420.97 288.25 433.02 278.61 406.51 256.93 392.05 268.97 281.03 268.97 271.39 278.61 392.05 278.61 392.05 329.22 266.74 329.22 266.74 283.26 237.83 312.17 237.83 370.18 266.74 355.72 266.74 338.85 308.43 338.85 301.2 347.53 290.6 358.38 279.28 368.49 267.47 378.62 266.99 379.82 264.58 381.02 254.94 388.01 241.68 397.17 227.71 406.08 213.49 414.76 198.31 423.44 199.99 427.54 217.11 423.2 233.49 417.65 249.4 410.91 264.34 403.92 264.34 437.41 263.37 437.9 262.65 437.41 257.83 437.9 263.37 453.56 264.58 455.49 263.37 454.52 265.78 461.75 265.78 462 265.78 464.64z"
      />
      <WhiteShadowSVGPath
        class="cls-4"
        d="M433.26 391.15 439.52 386.81 451.58 377.65 460.25 379.34 457.36 371.15 435.43 352.11 435.43 353.55 434.46 353.55 434.46 355 427.24 365.12 415.43 381.02 404.1 394.28 400.01 390.67 389.4 383.19 378.08 376.69 366.51 371.15 354.22 366.81 352.05 370.66 370.85 387.29 387.96 404.4 395.67 413.31 403.14 422.71 410.37 432.6 416.88 442.71 423.14 453.56 428.68 464.64 437.6 471.39 448.44 470.43 455.19 461.75 453.98 450.67 446.28 439.1 438.08 428.01 429.16 417.65 420.01 407.77 413.74 401.51 420.25 398.62 433.26 391.15z"
      />
    </svg>
  );
};
