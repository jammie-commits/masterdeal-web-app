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
                  <DropdownLink to="/properties?location=westlands" onClick={closeMenu}>
                    Westlands
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/properties?location=kilimani" onClick={closeMenu}>
                    Kilimani
                  </DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink to="/properties?location=lavington" onClick={closeMenu}>
                    Lavington
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
  gap: 1.1rem;
  align-items: center;
  margin-left: 1rem;
  flex: 1 1 auto;
  min-width: 0;
  font-size: 0.97rem;
  @media (max-width: 1200px) {
    gap: 0.7rem;
    margin-left: 0.2rem;
    font-size: 0.93rem;
  }
  @media (max-width: 1100px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1rem;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s cubic-bezier(.77,0,.18,1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-left: 0;
    z-index: 1100;
    font-size: 1.08rem;
  }
  @media (max-width: 900px) {
    background: rgba(34,34,34,0.98);
    a, button { color: #fff; }
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ active, scrolled }) => scrolled ? 'var(--primary-green)' : '#fff'};
  font-weight: 600;
  font-size: 1em;
  min-height: 44px;
  padding: 0 0.7rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  background: none;
  box-sizing: border-box;
  
  &:hover {
    color: var(--primary-orange);
    background: rgba(255, 255, 255, 0.1);
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
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 80%;
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
  color: ${({ active, scrolled }) => scrolled ? 'var(--primary-green)' : '#fff'};
  font-weight: 600;
  font-size: 1em;
  min-height: 44px;
  padding: 0 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:hover {
    color: var(--primary-orange);
    background: rgba(255, 255, 255, 0.1);
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
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 200px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    background: var(--gray-light);
    margin-top: 0.5rem;
    border-radius: 4px;
  }
`;

const DropdownItem = styled.li`
  padding: 0;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--light-green);
    color: var(--primary-green);
  }
`;

export default Navbar;