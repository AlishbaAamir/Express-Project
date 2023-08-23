import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';




function CategorySection() {
    const [category, setCategory] = useState([])

    useEffect(() => {
axios.get('http://localhost:2500/api/categoryByName')
.then((json) => {setCategory(json.data.category)})
    },[])
  return (
   
    <div className='category_image'>
        <h2 className='text-center ' style={{color:'#00DDEB'}}>Category</h2>
       {category.map((val, key) => 
<li key={key} className='category_set '>
  <Link className='text-decoration-none'to={`/category${val.CategoryName}`}>
    <Image src={val.CategoryImage} roundedCircle style={{height:'55px', width:'55px'}} />

<div className='text-center ' style={{color:'rgb(105, 172, 211)'}}>{val.CategoryName}</div></Link>
 


</li>

       )}
    </div>
 
    
  )
}

export default CategorySection