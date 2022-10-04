import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import appRoutes from '../../shared/appRoutes';
import Logo from '../../assets/imgs/star-wars-logo.png';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand tag={RouterNavLink} to={appRoutes.home}>
          <img src={Logo} alt='logo' style={{ width: '48px' }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.movies}>
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to={appRoutes.characters}>
                Characters
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
