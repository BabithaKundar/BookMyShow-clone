import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css';

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.e60Gi6rOZSWm4NUnHz3lBQAAAA&pid=Api&P=0&h=180"
              alt="BookMyShow"
              className="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse id="offcanvasNavbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            </Nav>
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav>
              <Nav.Link href="#bookmarks">
                <FontAwesomeIcon icon={faBookmark} />
              </Nav.Link>
              <Nav.Link href="#login">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/movies" onClick={handleClose}>Movies</Nav.Link>
            <Nav.Link as={Link} to="/events" onClick={handleClose}>Events</Nav.Link>
            <Nav.Link as={Link} to="/sports" onClick={handleClose}>Sports</Nav.Link>
            <Nav.Link as={Link} to="/offers" onClick={handleClose}>Offers</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar; 