import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false); // state to toggle mobile navbar visibility

  return (
    <>
      <StyledNav>
        <Brand>
          <LogoContainer>
            <img src={logo} alt="Logo" />
            MASTERDEAL PROPERTIES
          </LogoContainer>
          <ToggleIcon onClick={() => setNavbarState(!navbarState)} aria-label="Toggle Navigation Menu">
            {navbarState ? <VscChromeClose /> : <GiHamburgerMenu />}
          </ToggleIcon>
        </Brand>
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/properties">Properties</Link></li>
        </NavLinks>
      </StyledNav>
      
      {/* Mobile Navbar */}
      <MobileNavLinks state={navbarState}>
        <li><Link to="/" onClick={() => setNavbarState(false)}>Home</Link></li>
        <li><Link to="/About" onClick={() => setNavbarState(false)}>About</Link></li>
        <li><Link to="/properties" onClick={() => setNavbarState(false)}>Properties</Link></li>
      </MobileNavLinks>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  
  img {
    max-height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-left: auto;

  li {
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;

      &:hover {
        color: #dddddd;
      }
    }

    &:first-of-type a {
      font-weight: 900;
    }
  }

  @media screen and (max-width: 1080px) {
    display: none; /* Hide normal nav links on mobile */
  }
`;

const ToggleIcon = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileNavLinks = styled.ul`
  display: ${({ state }) => (state ? "block" : "none")}; /* Show if navbarState is true */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #4CAF50;
  padding-top: 3rem;
  z-index: 999;

  li {
    padding: 1rem 0;
    text-align: center;

    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      display: block;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #dddddd;
      }
    }
  }

  @media screen and (min-width: 1081px) {
    display: none; /* Hide mobile navbar on larger screens */
  }
`;

