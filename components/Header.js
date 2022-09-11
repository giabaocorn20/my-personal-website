import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Fragment } from 'react';
function Header() {
  return (
    <Fragment> 
      <Navbar variant = "light" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Jabao</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About me</Nav.Link>
              <Nav.Link href="/CV">My CV</Nav.Link>
              <Nav.Link href="/blog">My Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment> 
  );
}

export default Header;