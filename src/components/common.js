import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 75%;
    flex-direction: row;
  }

  //   margin: 0 10px 0 10px;
  margin: auto;

  a:link {
    color: ${(props) => props.theme.mainColor};
  }

  a:visited {
    color: ${(props) => (props.theme.isDark ? "white" : "black")};
  }

  a:hover {
    color: ${(props) => props.theme.mainColor};
  }

  a:active {
    color: ${(props) => props.theme.mainColor};
  }
`;

export const Blurb = styled.section`
  font-size: 0.85rem;
  word-break: break-all;
  min-width: 0;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};

  .bold {
    font-weight: bold;
  }

  .mincho {
    font-family: Hanazono Mincho Lite CJK;
  }

  .gothic {
    font-family: Hanazono Gothic Lite CJK;
  }

  .large {
    font-size: 1.5rem;
  }
`;

export const LocaleRadioGroup = styled.div`
  display: inline-block;
  padding-bottom: 5px;
`;

export const SelectButton = styled.button`
  font-family: inherit;
  font-size: 0.85rem;
  height: 32px;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};

  background-color: ${(props) =>
    props.selected ? props.theme.mainColor : "transparent"};
  border: 3px transparent solid;
  font-weight: 700;
  color: ${(props) => (props.selected ? "white" : props.theme.mainColor)};
  padding: 2px 10px 2px 10px;
  //   margin: 0 7.5px 0 7.5px;
  font-size: 1rem;
  outline: none;

  cursor: pointer;
  :hover {
    border: 3px ${(props) => props.theme.mainColor} solid;
  }
`;

export const SelectLabel = styled.div`
  //   font-weight: 700;
  font-size: 0.85rem;
  padding-bottom: 5px;
  color: ${(props) => (props.theme.isDark ? "white" : "black")};
`;
