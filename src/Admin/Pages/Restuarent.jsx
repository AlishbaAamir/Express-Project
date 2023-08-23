import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestuarentModal from '../Components/RestuarentModal';
import Button from 'react-bootstrap/Button';
import {GoTrash} from 'react-icons/go'
import {PiNotePencilThin} from 'react-icons/pi'


function Restuarent() {

const [restuarent, setRestuarent] = useState([])
const newRestuarent = (value) =>{
setRestuarent(value)
}
  useEffect(() => {
    axios.get('http://localhost:2500/api/getAllRestuarent')
    .then(json => { console.log(json.data.restuarent)
    setRestuarent(json.data.restuarent)
    })
    .catch(err => console.log(err))
  }, [])

  const deleteRestuarent = (_id) =>{
    console.log(_id)
    const payload = {
      _id: _id
    }
    console.log(payload)

    const config={
      method: 'delete',
      url: 'http://localhost:2500/api/deleteRestuarent',
      data : payload
    }
    axios(config)
    .then(json => setRestuarent(json.data.restuarent))
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-item-center my-2">
        <span className='text-light fw-bold fs-4'> Restuarent </span>
        <RestuarentModal newRestuarent={newRestuarent}/>
        {/* <button className='btn btn-secondary my-2'>Add Category</button> */}
      </div>
      <div className="table-container bg-dark text-light">
      <table className='table'>
  <thead>
    <tr>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Id</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>RestuarentName</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>RestuarentImage</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>City</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Address</th>
      <th scope="col" style={{background:'#040717', color:'#00ccff'}} className='header'>Action</th>
        </tr>
  </thead>
  <tbody>
    {restuarent.map((val, key) =>
    <tr key={key}>
      <th scope="row" style={{background:'#040717', color:'#00ccff'}}>{key + 1}</th>
      <td style={{background:'#040717', color:'#00ccff'}}>{val.RestuarentName}</td>
      <td style={{background:'#040717', color:'#00ccff'}}><img src={val.RestuarentImage} style={{height:'50px', width:'50px'}}/></td>
      <td style={{background:'#040717', color:'#00ccff'}}>{val.City}</td>
      <td style={{background:'#040717', color:'#00ccff'}}>{val.Adress}</td>
      <td style={{background:'#040717', color:'#00ccff'}}><Button ><PiNotePencilThin/></Button>
      <Button onClick={() => deleteRestuarent(val._id)} ><GoTrash/></Button>
      </td>
        </tr>
   )}
  </tbody>
</table>

      </div>
    </div>
  )
}

export default Restuarent