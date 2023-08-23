import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context';
import { useContext } from 'react';
import Cart from './Cart';


function UserNav() {
  const {state, dispatch} = useContext(GlobalContext)
  const logout = () => {
    dispatch({
      type : "LOGOUT"
    })
  }
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
        <button type='button' className='btn my-2 text-decoration-none text-primary'  onClick={logout}>LOGOUT</button>
        <Cart/>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default UserNav