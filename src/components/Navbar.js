import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Nav-background">
      <Navbar light expand="md">
        <NavbarBrand className='nav-link' href="/" >What we do</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{margin: "auto"}}>
            {/* <NavItem >
              <NavLink className='nav-link' href="/components/" >What We Do</NavLink>
            </NavItem> */}
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
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >Apply</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href="https://github.com/reactstrap/reactstrap" >Apply</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='nav-link' nav caret >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Apply
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText className="button-hope">Donate</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;