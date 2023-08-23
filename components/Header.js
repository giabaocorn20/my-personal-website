import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { Fragment } from "react";
import { Link, Box, Flex, Text } from "@chakra-ui/react";
import { GitHubIcon } from "./CustomIcons";
function Header() {
  return (
    <Fragment>
      <Link isExternal href="https://github.com/sponsors/giabaocorn20">
        <Box bgGradient='linear(to-l, #7928CA, #FF0080)'>
          <Flex justify="center" align="center" py={1} color="white">
            <GitHubIcon />
            <Text ml={2}>Toss a coin!</Text>
          </Flex>
        </Box>
      </Link>
      <Navbar variant="light" bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About me</Nav.Link>
              <Nav.Link href="/CV">CV</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
