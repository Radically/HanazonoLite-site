import React from "react";
import styled from "styled-components";
import { Container } from "./common";

const NavbarItem = styled.div`
  color: ${(props) => props.theme.mainColor};
  font-size: 1.2rem;
  //   font-weight: 700;
  // padding: 0 20px 0 20px;
`;

const NavbarContainer = styled(Container)`
  // width: 75%;
  height: 50px;
  //   background-color: red;
  // display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  ${NavbarItem} + ${NavbarItem} {
    padding-left: 15px;
  }
`;

export default function NavBar() {
  return (
    <NavbarContainer>
      <NavbarItem>
        <a target="_blank" href="https://matrix.to/#radically:matrix.org">
          Matrix
        </a>
      </NavbarItem>
      <NavbarItem>
        <a target="_blank" href="https://discord.com/invite/AG2Bf2zyzH">
          Discord
        </a>
      </NavbarItem>
    </NavbarContainer>
  );
}
