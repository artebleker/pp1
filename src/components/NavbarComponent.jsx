import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">PP1: Primer parcial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/conversatorio1">Conversatorio 1</Nav.Link>
            <Nav.Link href="/conversatorio2">Conversatorio 2</Nav.Link>
            <Nav.Link href="/entrevista">Entrevista</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent