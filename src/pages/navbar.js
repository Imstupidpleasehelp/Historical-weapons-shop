import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Thing extends Component {
  state = { cartAmount: null, cart: []};
  
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbarmaster"
        >
          <Navbar.Brand>
            <Link to="/" className="navbarlink">
              <p className=" navbartitle">History's Armory</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown className="navbarsubtitle" title="Shop by Era" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/Neolithic" className="dropdownlink">
                    Stone age
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Bronze" className="dropdownlink">
                    Bronze age
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Iron" className="dropdownlink">
                    Iron age
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Roman" className="dropdownlink">
                    Roman age
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Medieval" className="dropdownlink">
                    Medieval era
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Renaissance" className="dropdownlink">
                    The Renaissance{" "}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="navbarsubtitle"
                title="Shop by Category"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/Archery" className="dropdownlink">
                    Archery
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Armor" className="dropdownlink">
                    Armor{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Swords" className="dropdownlink">
                    Swords{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Shields" className="dropdownlink">
                    Shields
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>{" "}
              <Nav>
                <Nav.Link>
                  <Link to="/About">
                    <p className="navbarsubtitle">About us</p>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Sell">
                    <p className="navbarsubtitle">For Craftsmen</p>
                  </Link>
                </Nav.Link>
              </Nav>
            </Nav>

            <Nav>
              <Nav.Link to="/Cart">
                <Link to="/Cart">
                  <div className="cartbox">
                    <p className="navbarlink">
                      {this.props.cart.length}
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    </p>
                  </div>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Thing;
