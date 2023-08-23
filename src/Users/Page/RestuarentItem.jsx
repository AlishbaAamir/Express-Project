import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestuarentItem() {
    const {RestuarentName} = useParams()

    const[restuarentItem, setrestuarentItem] =useState([])
    useEffect(()=>{
  axios.get(`http://localhost:2500/api/itemByRestuarent?restuarent=${RestuarentName}`)
  .then(json=>{setrestuarentItem(json.data.item)})
  .catch(err => console.log(err))
    },[RestuarentName])
  return (
    <div className="container ">
    <div className="my-5 text-center">
    <div data-aos="zoom-in-up">
      <h2 style={{color:'#00DDEB'}} >Items In Restaurant</h2>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
    </div>
    </div>
    <div className="container">
      <div className="row ">
{
  restuarentItem.map((val, key) =>

  <div className="col-md-3 my-2" 
  key={key}
  > 
 
   <Card >
    <Link to={`/item/${val._id}`}> 
   
      <Card.Img variant="top" src={val.thumbnail} style={{width:'248px', height:'190px'}} />
      </Link>
      <Card.Body style={{background:' #040717', color:'#00DDEB'}}>
        <Card.Title>{val.ItemName}</Card.Title>
          <Card.Text>{val.description.length > 40 ? val.description.slice(0,40)+'...' : val.description }
           </Card.Text>
           <div>Price: {val.Price}</div>
           <h6>{val.restuarent}</h6>
           <div className='d-grid'> <button type='button' >
          Order Now</button>
          </div>
      </Card.Body>
      
    </Card>
  
    </div>
  )
}

      
</div>
    </div>
    </div>
  )
}

export default RestuarentItem