import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  // NavbarText
} from 'reactstrap';

const InnerNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{margin: "auto", float: 'right'}}>
            <NavItem >
              <NavLink className='nav-link' href="/components/" >Health & Fitness</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="/components/" >Supporting Mamas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >Before Her</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >After Her</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default InnerNavbar;