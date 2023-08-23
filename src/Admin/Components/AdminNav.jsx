import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GlobalContext } from '../../Context/context';


export default function AdminNav() {
  const {state, dispatch} = useContext(GlobalContext)
  const logout = () => {
    dispatch({
      type : "LOGOUT"
    })
  }
    return (
        <Navbar className='admin_nav py-3 my-3 rounded'>
        <Container >
          <Navbar.Brand href="#home" > Admin </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: Admin Role 
            </Navbar.Text>
            <button className='btn btn-outline-dark ms-4'
            onClick={logout}>
             
              Logout</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            )
}