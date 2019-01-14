import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';
 import { Link, animateScroll as scroll } from "react-scroll";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  scrollToTop = () => {
  scroll.scrollToTop();
};

  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md" fixed="top">
          <NavbarBrand className="font-nice text-white font-weight-bold handy" onClick={this.scrollToTop}>Francis Velueta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className=" ml-auto " navbar>
              <NavItem>
            <Link
                  activeClass="active"
                  className="text-white mr-3 handy"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}> Acerca de Mi</Link>
              </NavItem>
              <NavItem>
              <Link
                  activeClass="active"
                  className="text-white mr-3 handy"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Proyectos</Link>
              </NavItem>
              <NavItem>
              <Link
                    activeClass="active"
                    className="text-white mr-3 handy"
                    to="curriculum"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Curriculum</Link>
              </NavItem>
              <NavItem>
                <Link
                    activeClass="active"
                    className="text-white handy"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Contacto</Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
