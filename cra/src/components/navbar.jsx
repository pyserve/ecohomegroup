import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Nav className="justify-content-center bg-white py-3 shadow-sm">
      <Nav.Item>
        <Nav.Link href="#about" className="text-primary fw-bold">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#services" className="text-primary fw-bold">Our Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#partners" className="text-primary fw-bold">Partners</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
