import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Container, NavbarBrand, Collapse } from 'reactstrap';


function NavbarSys() {
    return (
      <Navbar color="dark" dark expand="sm" className="mb-4">
        <Container>
          <NavbarBrand to="/">omar Staff Portal</NavbarBrand>
          
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/staff">Staff</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarSys;
  