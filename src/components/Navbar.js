import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Nav-background">
      <Navbar light expand="md">
        <NavbarBrand className='nav-link' href="/" >Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{margin: "auto"}}>
            <NavItem >
              <NavLink className='nav-link' href="/components/" >Interviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="/components/" >Membership</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >Upcoming</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="button-hope">Donate</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;