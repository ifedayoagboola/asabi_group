import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import logo from "../../images/logo1.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/investments" onClick={closeMobileMenu}>
                  Investments
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/healthcare" onClick={closeMobileMenu}>
                  Healthcare
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/partners" onClick={closeMobileMenu}>
                  Partners
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>Connect</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contact">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Connect
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
