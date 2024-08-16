 
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css'; // Import custom CSS
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar  expand="lg" className="custom-navbar fixed-top">
      <Container fluid className="p-0 m-0">
        <Navbar.Brand href="#" className='logo'>Hotel</Navbar.Brand>
        <Navbar.Toggle className='btn btn-warning'aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
           <Nav.Link as={Link} to={'/'}   className='color'>Home</Nav.Link> 
            <Nav.Link  as={Link} to={'/rooms'} className='color'>Rooms</Nav.Link>
            <Nav.Link as={Link} to={'/Service'}   className='color'>Service</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              
              <NavDropdown.Item as={Link} to={'/team'} >Our Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/slider'} >Testimonial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/contact'}  className='color'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

