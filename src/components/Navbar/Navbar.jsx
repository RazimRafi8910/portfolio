import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav,NavDropdown } from 'react-bootstrap';


function Navbar() {
  return (
    <>
    <BootstrapNavbar collapseOnSelect expand="lg" bg='dark' data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand className='fs-2 fw-bold' href="#home">Razim Rafi</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-BootstrapNavbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-BootstrapNavbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Project</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    </>
  )
}

export default Navbar