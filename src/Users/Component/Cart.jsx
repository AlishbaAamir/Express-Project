import React from 'react';
import  { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../Context/addToCart/Context';
import AddCart from './AddCart';
import {BsFillCartXFill} from 'react-icons/bs';

function Cart() {

    const [show, setShow] = useState(false);

    const {cart_state, cart_dispatch} = useContext(CartContext)

  return (
    <>
      <Button type='button' onClick={()=> setShow(true)} className='position-relative' >
        <BsFillCartXFill />
    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
        {/* {cart_state.cart.length}  */}
          <span className='visually-hidden' >Unread Message</span>
    </span>
  </Button>
  <Offcanvas show={show} onHide={()=>setShow(false)} placement='end' name='end' style={{background:'#040717', color:'#00ccff', }} >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title className='canvas'>Cart  </Offcanvas.Title>
      
       </Offcanvas.Header>
    
    <Offcanvas.Body>
    <button style={{width:'100px'}} onClick={() => cart_dispatch({
            type : "CLEAR_CART"
           })}>  Clear Cart</button>
      {
            // cart_state.cart.map((val, key) =><AddCart key={key} cartData={val}/> )
          }
                     </Offcanvas.Body>
           </Offcanvas>
    </>
  )
}

export default Cart