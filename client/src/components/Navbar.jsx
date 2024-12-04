import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

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
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/diaspora">Diaspora</Link></li>
        </NavLinks>
      </StyledNav>

      {/* Mobile Navbar */}
      <MobileNavLinks state={navbarState}>
        <CloseButton onClick={() => setNavbarState(false)}>
          <VscChromeClose />
        </CloseButton>
        <li><Link to="/" onClick={() => setNavbarState(false)}>Home</Link></li>
        <li><Link to="/About" onClick={() => setNavbarState(false)}>About</Link></li>
        <li><Link to="/properties" onClick={() => setNavbarState(false)}>Properties</Link></li>
        <li><Link to="/contact" onClick={() => setNavbarState(false)}>Contact</Link></li>
        <li><Link to="/blog" onClick={() => setNavbarState(false)}>Blog</Link></li>
        <li><Link to="/testimonials" onClick={() => setNavbarState(false)}>Testimonials</Link></li>
        <li><Link to="/diaspora" onClick={() => setNavbarState(false)}>Diaspora</Link></li>
      </MobileNavLinks>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
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
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 0.3s ease;

  img {
    max-height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style-type: none;
  margin-left: auto;

  li {
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s ease, transform 0.2s ease;

      &:hover {
        color: #ddd;
        transform: translateY(-3px);
      }
    }

    &:first-of-type a {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1080px) {
    display: none; /* Hide normal nav links on mobile */
  }
`;

const ToggleIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media screen and (max-width: 1080px) {
    display: block;
  }
`;

const MobileNavLinks = styled.ul`
  display: ${({ state }) => (state ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
  padding-top: 4rem;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${({ state }) => (state ? "translateX(0)" : "translateX(-100%)")}; /* Sliding effect */

  li {
    padding: 1.5rem 0;
    text-align: center;

    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      display: block;
      font-weight: 600;
      transition: color 0.3s ease, transform 0.2s ease;

      &:hover {
        color: #ddd;
        transform: translateY(-3px);
      }
    }
  }

  @media screen and (min-width: 1081px) {
    display: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

