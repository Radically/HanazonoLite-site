import React from "react";
import styled from "styled-components";

const NavbarItem = styled.div`
  color: ${(props) => props.theme.mainColor};
  font-size: 1.2rem;
  //   font-weight: 700;
  padding: 0 20px 0 20px;
`;

const NavbarContainer = styled.div`
  width: 75%;
  height: 50px;
  //   background-color: red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
`;

export default function NavBar() {
  return (
    <NavbarContainer>
      <NavbarItem>Discord</NavbarItem>
    </NavbarContainer>
  );
}
