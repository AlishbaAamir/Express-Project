import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Pages/Login';
import { Link } from 'react-router-dom';

function GuestNav() {
  return (
    <Navbar expand="lg" className="nav-bar">
    <Container fluid>
      <Navbar.Brand href="#" className='gap-3'>Foodies</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <Link to="/" className='mx-2 my-2 text-decoration-none text-light gap-2' >Home</Link>
          <Link to="/restuarent" className='mx-2 my-2 text-decoration-none text-light' >Restuarent</Link>
          <Link to="/item" className='mx-2 my-2 text-decoration-none text-light'>Items</Link>
          
        </Nav>
        <button type='button' className='btn my-2 text-decoration-none'><Link to="./login">Login</Link></button>
        <button type='button' className='btn my-2'><Link to="./singup">SingUp</Link></button>
          {/* <Button variant="outline-success"><Link to="./login">Login</Link></Button>
          <Button variant="outline-success"><Link to="./login">Login</Link></Button> */}
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

export default GuestNav
