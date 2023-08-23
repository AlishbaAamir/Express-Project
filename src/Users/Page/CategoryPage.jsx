
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function CategoryPage() {
    const {CategoryName} = useParams()
    const [categoryPage, setCategoryPage] = useState({})

useEffect(() => {
axios.get(`http://localhost:2500/api/itemBycategory?category=${CategoryName}`)
.then((json) => {console.log(json.data.category)})
.catch(err => console.log(err))
    },[])

    console.log(CategoryName)
  return (
    <div className='container ' >
    <div data-aos="flip-left">
    <div className='my-5 py-5  text-center bg-warning'>
      <h1 className='fw-bold '>
        {/* {CategoryName.toUpperCase()} */}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum nam perspiciatis porro hic atque maiores eligendi aut saepe voluptatibus expedita reiciendis nostrum. Modi eius ut alias fugit quibusdam? Eligendi?</p>
    
    </div>
    </div>
    {/* <div className='row'>
      {
        data.map((val,key)=>
        <div className='col-md-4 my-3 ' key={key}>
       <Link className='text-decoration-none' to={`/products/${val.id}`}>
        <Card style={{height:'400px'}} >
      <Card.Img variant="top" src={val.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{val.title.length > 20 ? val.title.slice(0,20)+'...' : val.title}</Card.Title>
        <Card.Text>
        {val.description.length > 60 ? val.description.slice(0,60)+'...' : val.description} 
        </Card.Text>
        <span className='badge bg-secondary my-2 '>{val.price}$</span>
         <div className='d-grid'> <button className='btn btn-outline-dark' type='button'
        //   onClick={()=>addtoCart(val)}
          >
          Add To Cart</button>
          </div>
        
      </Card.Body>
    </Card>
      
        </Link>
        </div>
        )
      }
    </div> */}
   </div>
  )
}

export default CategoryPage