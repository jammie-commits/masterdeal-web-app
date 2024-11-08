import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ToggleIcon = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${({ state }) => (state ? "block" : "none")};
  transition: 0.3s ease;
`;

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <>
      <StyledNav>
        <Brand>
          <LogoContainer>
            <img src={logo} alt="Logo" />
            MASTERDEAL PROPERTIES
          </LogoContainer>
          <ToggleIcon onClick={() => setNavbarState((prev) => !prev)} aria-label="Toggle Navigation Menu">
            {navbarState ? <VscChromeClose /> : <GiHamburgerMenu />}
          </ToggleIcon>
        </Brand>

        {/* Desktop NavLinks */}
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/properties">Properties</Link></li>
        </NavLinks>
      </StyledNav>

      {/* Mobile NavLinks */}
      {navbarState && (
        <MobileNavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/properties">Properties</Link></li>
        </MobileNavLinks>
      )}

      {navbarState && <Overlay state={navbarState} onClick={() => setNavbarState(false)} />}
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;  // Space between the brand and links
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
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: #4CAF50;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  li {
    padding: 1rem 0;
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      transition: 0.1s ease-in-out;
      text-align: center;
    }

    &:first-of-type a {
      font-weight: 900;
    }

    &:hover {
      background-color: #3e8e41; // Slightly darker background on hover
    }
  }
`;

const SidebarToggle = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: #0077b6;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #023e8a;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ state }) => (state ? '250px' : '0')};
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  box-shadow: ${({ state }) => (state ? '2px 0 5px rgba(0, 0, 0, 0.1)' : 'none')};
  z-index: 999;
`;

const SidebarLinks = styled.ul`
  list-style-type: none;
  padding: 1rem;

  li {
    padding: 10px 20px;
    a {
      text-decoration: none;
      color: #0077b6;
      font-size: 1.2rem;
      display: block;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #023e8a;
      }
    }
  }
`;
