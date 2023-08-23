import React, { useEffect, useState } from 'react';
import CategoryModal from '../Components/CategoryModal';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {GoTrash} from 'react-icons/go'
import {PiNotePencilThin} from 'react-icons/pi'


function Categories() {
const [category, setCategory] = useState([]);
const newCategory = (value) => {
  setCategory(value)
  }
  useEffect(() => {
    axios.get("http://localhost:2500/api/categoryByName")
    .then(json => { console.log(json.data.category)
      setCategory(json.data.category)
    })
    .catch(err => console.log(err))
  }, [])

  const deleteCategory = (_id) =>{
    console.log(_id)
    const payload = {
      _id: _id
    }
    console.log(payload)

    const config={
      method: 'delete',
      url: 'http://localhost:2500/api/deleteCategory',
      data : payload
    }
    axios(config)
    .then(json => setCategory(json.data.category))
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-item-center my-2">
        <span className='text-light fw-bold fs-4'>Category </span>
        <CategoryModal 
        newCategory={newCategory}
        />
        {/* <button className='btn btn-secondary my-2'>Add Category</button> */}
      </div>
      <div className="table-container text-light">
      <table className='table'>
  <thead>
    <tr>
      <th scope="col" style={{background:'#040717', color:'#00ccff', }} className='header'>Id</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>CategoryName</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>CategoryImage</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Action</th>
      
    </tr>
  </thead>
  <tbody >
  {category?.map((val, key) =>
    <tr key={key}>
      <th scope="row" style={{background:'#040717', color:'#00ccff'}}>{val._id}</th>
      <td style={{background:'#040717', color:'#00ccff'}}>{val.CategoryName}</td>
      <td style={{background:'#040717', color:'#00ccff'}}><img src={val.CategoryImage} style={{height:'50px', width:'50px'}}/></td>
      <td style={{background:'#040717', color:'#00ccff'}}><Button ><PiNotePencilThin/></Button>
      <Button onClick={() => deleteCategory(val._id)} ><GoTrash/></Button>
      </td>
        </tr>
)}
        
  </tbody>
</table>

      </div>
    </div>
  )
}

export default Categories