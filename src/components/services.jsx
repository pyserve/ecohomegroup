import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="container my-3">
      <h2 className="text-primary mb-4">Our Services</h2>
      <Row>
        <Col md={4} className='my-1'>
          <Card className="shadow-sm mb-4 h-100">
            <Card.Body className="services-section">
              <Card.Title>HVAC Installation</Card.Title>
              <Card.Text>
                We provide expert installation of heating, ventilation, and AC systems 
                customized to meet your home's specific needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='my-1'>
          <Card className="shadow-sm mb-4 h-100">
            <Card.Body className="services-section">
              <Card.Title>Maintenance & Repair</Card.Title>
              <Card.Text>
                Our team offers comprehensive maintenance services and rapid repairs to keep your HVAC 
                system running efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='my-1'>
          <Card className="shadow-sm mb-4 h-100">
            <Card.Body className="services-section">
              <Card.Title>Energy Efficient Solutions</Card.Title>
              <Card.Text>
                We offer a range of eco-friendly HVAC systems that reduce your energy bills while 
                providing maximum comfort.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
