import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemsModal from '../Components/ItemsModal';
import Button from 'react-bootstrap/Button';
import {GoTrash} from 'react-icons/go'
import {PiNotePencilThin} from 'react-icons/pi'

function Items() {
  const [item, setItem] = useState([]);
const newItem = (value) => {
  setItem(value)
  }
 

  useEffect(() => {
    axios.get('http://localhost:2500/api/getAllItems')
    .then((json) =>{console.log(json.data.item)
      setItem(json.data.item)
    })
     .catch(err => console.log(err)) },[])

     const deleteitem = (_id) =>{
      console.log(_id)
      const payload = {
        _id: _id
      }
      console.log(payload)
  
      const config={
        method: 'delete',
        url: 'http://localhost:2500/api/deleteItem ',
        data : payload
      }
      axios(config)
      .then(json => setItem(json.data.item))
    }
 
  return (
    <div className="container">
    <div className="d-flex justify-content-between align-item-center my-2">
      <span className='text-light fw-bold fs-4'>Items </span>
      <ItemsModal newItem={newItem}/>
      
      {/* <button className='btn btn-secondary my-2'>Add Category</button> */}
    </div>
    <div className="table-container text-light">
    <table className='table'>
<thead>
  <tr>
    <th scope="col" style={{background:'#040717', color:'#00ccff', }} className='header'>Id</th>
    <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>ItemName</th>
    <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Thumbnail</th>
    <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Price</th>
    <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Category</th>
    <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Restuarent</th>
   <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Description</th>
   <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Action</th>
    
    
  </tr>
</thead>
<tbody >

{
item.map((val, key) =>
  <tr key={key}>
    <th scope="row" style={{background:'#040717', color:'#00ccff'}}>{key +1}</th>
    <td style={{background:'#040717', color:'#00ccff'}}>{val.ItemName}</td>
    <td style={{background:'#040717', color:'#00ccff'}}><img src={val.thumbnail} style={{height:'50px', width:'50px'}}/></td>
    <td style={{background:'#040717', color:'#00ccff'}}>{val.Price}</td>
    <td style={{background:'#040717', color:'#00ccff'}}>{val.category}</td>
    <td style={{background:'#040717', color:'#00ccff'}}>{val.restuarent}</td>
    <td style={{background:'#040717', color:'#00ccff'}}>{val.description.length > 15 ? val.description.slice(0,15)+'...' : val.description}</td>
    <td style={{background:'#040717', color:'#00ccff'}}><Button ><PiNotePencilThin/></Button>
      <Button onClick={() => deleteitem(val._id)} ><GoTrash/></Button>
      </td>
      </tr>
)}

      
</tbody>
</table>

    </div>
  </div>
  )
}

export default Items