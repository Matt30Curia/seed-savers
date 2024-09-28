import React from 'react';
import logo from '../assets/logo.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>

          <Link className='navbar-brand' to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Seed Swap
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Row className="mx-auto gx-3">
              <Col>
                <Nav>
                  <Link className='nav-link' to="/shop">Scambia</Link>
                </Nav>
              </Col>
              <Col >
                <Nav >
                  <Link className='nav-link' to="/guide">Guide</Link>
                </Nav>
              </Col>
              <Col>
                <Nav>
                  <Link className='nav-link' to="/login">Login</Link>
                </Nav>
              </Col>
            </Row>

            <Col md={3}>
              <InputGroup>
                <FormControl className="py-2 rounded-pill mr-1 pr-5" type="search" value="🔍 cerca le varietà"/>
                
              </InputGroup>
            </Col>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <hr className='my-0' />
    </>
  );
}

export default NavBar;
