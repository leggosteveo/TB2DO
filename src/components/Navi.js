import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navi.css";

function Navi() {
  return (
    <>
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href="#home" className="fancy-font">
            TB2DO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Events By Day</Nav.Link>
              <Nav.Link href="#link">Restaurants</Nav.Link>
              <Nav.Link href="#link">Bars</Nav.Link>
              <Nav.Link href="#link">Activities</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navi;
