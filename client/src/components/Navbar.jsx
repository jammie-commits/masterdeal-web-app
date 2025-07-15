import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/" onClick={closeMenu}>
          <LogoImage src="/logo.png" alt="MasterDeal Properties" />
          <LogoText>
            <span>MasterDeal</span>
            <span>Properties</span>
          </LogoText>
        </Logo>

        <Spacer />

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="/" onClick={closeMenu} active={isActive("/")}>
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/about" onClick={closeMenu} active={isActive("/about")}>
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <DropdownContainer>
              <DropdownButton
                onClick={() => toggleDropdown("properties")}
                active={location.pathname.startsWith("/properties") || location.pathname.startsWith("/property")}
              >
                Properties
                <FaChevronDown />
              </DropdownButton>
              <DropdownMenu isOpen={activeDropdown === "properties"}>
                <DropdownItem>
                  <DropdownLink to="/properties" onClick={closeMenu}>
                    All Properties
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/properties?location=matuu" onClick={closeMenu}>
                    Matuu
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/properties?location=juja" onClick={closeMenu}>
                    Juja
                  </DropdownLink>
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
          </NavItem>

          <NavItem>
            <DropdownContainer>
              <DropdownButton
                onClick={() => toggleDropdown("company")}
                active={location.pathname.startsWith("/team") || location.pathname.startsWith("/awards") || location.pathname.startsWith("/csr")}
              >
                Company
                <FaChevronDown />
              </DropdownButton>
              <DropdownMenu isOpen={activeDropdown === "company"}>
                <DropdownItem>
                  <DropdownLink to="/team" onClick={closeMenu}>
                    Our Team
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/awards" onClick={closeMenu}>
                    Awards
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/csr" onClick={closeMenu}>
                    CSR
                  </DropdownLink>
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>
          </NavItem>

          <NavItem>
            <NavLink to="/testimonials" onClick={closeMenu} active={isActive("/testimonials")}>
              Testimonials
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/gallery" onClick={closeMenu} active={isActive("/gallery")}>
              Gallery
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/contact" onClick={closeMenu} active={isActive("/contact")}>
              Contact
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/diaspora" onClick={closeMenu} active={isActive("/diaspora")}>
              Diaspora
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ scrolled }) =>
    scrolled
      ? "rgba(255, 255, 255, 0.95)"
      : "linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%)"};
  backdrop-filter: ${({ scrolled }) => scrolled ? "blur(10px)" : "none"};
  transition: all 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none"};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 0 0.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: ${({ scrolled }) => scrolled ? "var(--text-dark)" : "var(--white)"};
  font-weight: 700;
  font-size: 1.3rem;
  min-width: 0;
  white-space: nowrap;
  flex-shrink: 0;
  padding-left: 10px;
  @media (max-width: 600px) {
    font-size: 1rem;
    gap: 0.18rem;
    padding-left: 4px;
  }
`;

const LogoImage = styled.img`
  height: 38px;
  width: auto;
  @media (max-width: 600px) {
    height: 28px;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  line-height: 1.1;
  white-space: nowrap;
  span {
    color: #fff !important;
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 0.5px;
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }
`;

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.7rem;
  color: var(--white);
  cursor: pointer;
  z-index: 1200;
  @media (max-width: 900px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.7rem;
  align-items: center;
  margin-left: 0.5rem;
  flex: 1 1 auto;
  min-width: 0;
  font-size: 0.93rem;
  @media (max-width: 1200px) {
    gap: 0.5rem;
    margin-left: 0.2rem;
    font-size: 0.9rem;
  }
  @media (max-width: 900px) {
    gap: 0.3rem;
    font-size: 0.85rem;
  }
  @media (max-width: 600px) {
    gap: 0.1rem;
    font-size: 0.8rem;
    padding: 0.1rem 0;
  }
  @media (max-width: 1100px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    border: 2px solid #222;
    flex-direction: column;
    padding: 0.7rem 0.3rem;
    gap: 0.2rem;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s cubic-bezier(.77,0,.18,1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-left: 0;
    z-index: 1100;
    font-size: 0.85rem;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 0 0 18px 18px;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.93em;
  min-height: 32px;
  padding: 0 0.3rem;
  border-radius: 6px;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
  position: relative;
  background: none;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    font-size: 0.9em;
    padding: 0 0.2rem;
    min-height: 28px;
  }
  @media (max-width: 900px) {
    font-size: 0.85em;
    padding: 0 0.1rem;
    min-height: 24px;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
    padding: 0 0.05rem;
    min-height: 20px;
  }
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--primary-orange);
    transition: width 0.2s ease;
  }
  &:hover::after,
  &.active::after {
    width: 70%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.93em;
  min-height: 32px;
  padding: 0 0.3rem;
  border-radius: 6px;
  cursor: pointer;
  gap: 0.5rem;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    font-size: 0.9em;
    padding: 0 0.2rem;
    min-height: 28px;
  }
  @media (max-width: 900px) {
    font-size: 0.85em;
    padding: 0 0.1rem;
    min-height: 24px;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
    padding: 0 0.05rem;
    min-height: 20px;
  }
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
  svg {
    margin-left: 0.35em;
    font-size: 1.1em;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #f5f7fa;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 200px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.3s ease;
  z-index: 3000;
  @media (max-width: 900px) {
    position: static;
    box-shadow: none;
    background: #f5f7fa;
    margin-top: 0.2rem;
    border-radius: 4px;
    min-width: 100%;
    width: 100%;
    padding: 0.2rem 0;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transform: none;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 3000;
  }
`;

const DropdownItem = styled.li`
  padding: 0;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.55rem 0.9rem;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.01em;
  border-radius: 5px;
  transition: all 0.2s ease;
  @media (max-width: 900px) {
    color: #222;
    font-size: 0.9em;
    padding: 0.45rem 0.7rem;
  }
  @media (max-width: 600px) {
    color: #222;
    font-size: 0.85em;
    padding: 0.35rem 0.5rem;
  }
  &:hover {
    background: var(--light-green);
    color: #FF6B35;
  }
`;

export default Navbar;