import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-light text-dark text-center pt-3">
        <img src="ecohome.png" alt="website logo" className='bg-white rounded-circle my-2' style={{width: 60, height: 60}} />
        <h1>Eco Home Group</h1>
        <p>Expert HVAC Products & Services for Your Home Comfort</p>
        <Nav className="justify-content-center py-3 shadow-sm">
            <Nav.Item>
                <Nav.Link href="#about" className="text-dark fw-bold">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#services" className="text-dark fw-bold">Our Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#partners" className="text-dark fw-bold">Partners</Nav.Link>
            </Nav.Item>
        </Nav>
    </header>
  );
};

export default Header;
