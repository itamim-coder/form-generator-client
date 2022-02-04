import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          
            <Navbar className='mb-3' bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Form Generate</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <NavLink className="m-2" to="/home">Home</NavLink>
      <NavLink className="m-2" to="/createform">Generate Form</NavLink>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;