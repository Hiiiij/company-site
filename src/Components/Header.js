import { useState } from 'react';
import logo from '../Assets/logo.svg';
import { ReactComponent as DropdownArrow } from '../Assets/dropdownArrow.svg';
import { ButtonPrimary } from '../Primitives/Button/ButtonPrimary';
import { Link } from 'react-router-dom';
import { CenterContainer } from './StyledComponents';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { ReactComponent as Hamburger } from '../Assets/IconHamburger.svg';

// Small devices (landscape phones, 576px and up)
// @media(min - width: 576px) {

//  }

// // Medium devices (tablets, 768px and up)
// @media(min - width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media(min - width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media(min - width: 1200px) { }

const MobileMenuButton = styled.button`
  @media (min-width: 1200px) {
    display: none;
  }
  margin-left: 20px;
  background: none;
  border: 0;
`;

const HamburgerImg = styled(Hamburger)``;

const ContactButton = styled(ButtonPrimary)`
  display: none;
  @media (min-width: 1200px) {
    display: inline-block;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const Logo = styled.span`
  margin-right: auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
`;
const StyledDropDownUl = styled.div`
  position: absolute;
  padding-top: 1.2rem;
`;
const StyledLi = styled.li`
  margin-right: 20px;
`;

const Indicator = styled(DropdownArrow)`
  transition: transform 0.2s;
  transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

const StyledSubLink = styled(Link)`
  color: ${({ isActiveRoute }) => (isActiveRoute ? '#ff0000' : '#222')};

  text-decoration: none;
  &: hover {
    color: #ff0000;
  }
  margin-bottom: 1.2em;
  display: block;
`;

const StyledLink = styled(Link)`
  color: ${({ isActiveRoute }) => (isActiveRoute ? '#ff0000' : '#222')};
  stroke: ${({ isActiveRoute }) => (isActiveRoute ? '#ff0000' : '#222')};

  margin-bottom: 10px;
  text-decoration: none;
  &: hover {
    color: #ff0000;
    stroke: #ff0000;
  }
`;

const TopMenu = ({ handleCloseMainMenu, compareCurrentPathWith, toggleSubMenu }) => (
  <>
    <StyledLi>
      <StyledLink to="/" isActiveRoute={compareCurrentPathWith('/')}
      onClick={handleCloseMainMenu}>
        Home
      </StyledLink>
    </StyledLi>
    <StyledLi>
      <StyledLink
        to="/projects"
        isActiveRoute={compareCurrentPathWith('/projects')}
        onClick={handleCloseMainMenu}
      >
        Projects
      </StyledLink>
    </StyledLi>
    <StyledLi>
      <StyledLink
        isActiveRoute={setIsOpen}
        onClick={toggleSubMenu}
      >
        Engineering <Indicator isOpen={setIsOpen} />
      </StyledLink>
    </StyledLi>
    <StyledLi>
      <StyledLink
        to="/recruiting"
        isActiveRoute={compareCurrentPathWith('/recruiting')}
        onClick={handleCloseMainMenu}
      >
        Recruiting
      </StyledLink>
    </StyledLi>
    <StyledLi>
      <StyledLink
        to="/company"
        isActiveRoute={compareCurrentPathWith('/company')}
        onClick={handleCloseMainMenu}
      >
        Company
      </StyledLink>
    </StyledLi>
  </>
);

const SubMenu = ({ setIsOpen, compareCurrentPathWith }) => (
  <>
    <StyledLi>
      <StyledSubLink
        onClick={() => setIsOpen(false)}
        isActiveRoute={compareCurrentPathWith(
          '/engineering/externalITDepartment'
        )}
        to="/engineering/externalITDepartment"
      >
        External IT Department
      </StyledSubLink>
    </StyledLi>
    <StyledLi>
      {' '}
      <StyledSubLink
        onClick={() => setIsOpen(false)}
        isActiveRoute={compareCurrentPathWith('/engineering/rpa')}
        to="/engineering/rpa"
      >
        RPA and AI{' '}
      </StyledSubLink>
    </StyledLi>
    <StyledLi>
      <StyledSubLink
        onClick={() => setIsOpen(false)}
        isActiveRoute={compareCurrentPathWith('/engineering/ECommerceShop')}
        to="/engineering/ECommerceShop"
      >
        eCommerce Shop Implementation{' '}
      </StyledSubLink>
    </StyledLi>
    <StyledLi>
      <StyledSubLink
        onClick={() => setIsOpen(false)}
        isActiveRoute={compareCurrentPathWith(
          '/engineering/SoftwareDevelopment'
        )}
        to="/engineering/SoftwareDevelopment"
      >
        Software Development{' '}
      </StyledSubLink>
    </StyledLi>
  </>
);

const Header = () => {
  const location = useLocation();
  /* hook that updates the location variable when window.location / navigation changes, typically via click but could be anything else */
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const compareCurrentPathWith = (path) => {
    return path === location.pathname;
  };

  return (
    <CenterContainer>
      <StyledHeader>
        <Logo>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/" isActiveRoute={compareCurrentPathWith('/')}>
              Home
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              to="/projects"
              isActiveRoute={compareCurrentPathWith('/projects')}
            >
              Projects
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              isActiveRoute={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              Engineering <Indicator isOpen={isOpen} />
            </StyledLink>
            {isOpen && (
              <StyledDropDownUl>
                <SubMenu
                  setIsOpen={setIsOpen}
                  compareCurrentPathWith={compareCurrentPathWith}
                />
              </StyledDropDownUl>
            )}
          </StyledLi>
          <StyledLi>
            <StyledLink
              to="/recruiting"
              isActiveRoute={compareCurrentPathWith('/recruiting')}
            >
              {' '}
              Recruiting
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              to="/company"
              isActiveRoute={compareCurrentPathWith('/company')}
            >
              Company
            </StyledLink>
          </StyledLi>
        </StyledUl>
        <ContactButton type="primary">Contact</ContactButton>
        <MobileMenuButton onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}>
          <HamburgerImg />
        </MobileMenuButton>
      </StyledHeader>
      {isMainMenuOpen && (
        <>
        <ul>
          <TopMenu
            handleCloseMainMenu={() => setIsMainMenuOpen(false)}
            compareCurrentPathWith={compareCurrentPathWith}
            toggleSubMenu={() => setIsSubMenuOpen(!isSubMenuOpen)}
          />
          <StyledLi>
            <StyledSubLink onClick={() => setIsMobileOpen(false)}>
              Contact
            </StyledSubLink>
          </StyledLi>
          </ul>)}

          {isSubMenuOpen && (<ul>
            <SubMenu
              setIsOpen={setIsMobileOpen}
              compareCurrentPathWith={compareCurrentPathWith}
            />
            <StyledLi>
              <StyledSubLink onClick={() => setIsMobileOpen(false)}>
                Contact
              </StyledSubLink>
            </StyledLi>
          </ul>)}
        </>
      )}
    </CenterContainer>
  );
};

export default Header;
