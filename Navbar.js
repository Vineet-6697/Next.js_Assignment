import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Nabvar = (children) => {
  return (
   <>
    <Navbar bg="light" expand="lg" >
      <Container>
        <div className="col-md-9">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand href="#home"><img src="../public/altudologo.png" alt="brandlogo" /></Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/category">Category</Nav.Link>
            <Nav.Link href="/contact">ContactUs</Nav.Link>
            <Nav.Link href="/batches">Batches</Nav.Link>
            <Nav.Link href="/productsid">ProductId</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Jackets
              </NavDropdown.Item>
              <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className="col-md-3">
        <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Log Out</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav>

        </div>
      </Container>
    </Navbar>
   </>
  )
}

export default Nabvar