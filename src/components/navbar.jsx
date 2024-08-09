import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="p-0 m-0">
        <Navbar.Brand href="#" className='logo'>Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="#home" className='color'>Home</Nav.Link>
            <Nav.Link href="#about" className='color'>About</Nav.Link>
            <Nav.Link href="#services" className='color'>Services</Nav.Link>
            <Nav.Link href="#rooms" className='color'>Rooms</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#email">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#phone">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#address">Testimonial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#rooms" className='color'>Rooms</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
