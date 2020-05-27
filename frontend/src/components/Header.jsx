import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" bg="primary">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../../public/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        React Tutorial
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarColor01" />
      <Navbar.Collapse id="navbarColor01">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="my-2 my-sm-0" variant="secondary">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
