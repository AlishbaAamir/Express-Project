import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import axios from 'axios';


function ItemsModal({newItem}) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("")
  const [restuarent, setRestuarent] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    axios.get('http://localhost:2500/api/categoryByName')
    .then((json) => { console.log(json.data.category)
      setCategoryVal(json.data.category)
      axios.get('http://localhost:2500/api/getAllRestuarent')
      .then((json) => {console.log(json.data.restuarent)
      setrestuarentVal(json.data.restuarent)
      setShow(true);
    })
      })
  }
const [ ItemName, setItemName] = useState("")
const [thumbnail, setThumbnail] = useState(null)
const [ Price, setPrice] = useState("")
const [ description, setdescription] = useState("")

const [restuarentVal, setrestuarentVal] = useState([])
const [CategoryVal, setCategoryVal] = useState([])

const AddItem = (e) =>{
  e.preventDefault();

    const storageRef = ref(storage, `Itemimages/${thumbnail.name}`);
  // 'file' comes from the Blob or File API
uploadBytes(storageRef, thumbnail).then((snapshot) => {
getDownloadURL(snapshot.ref)
.then((url) => {
  const payload ={ItemName, thumbnail: url, Price, category, restuarent, description  }
  console.log(payload)
  axios.post('http://localhost:2500/api/createItem',payload)
  .then(json => {console.log(json.data)
    newItem(json.data.category)
    setShow(false)
  })
  .catch(err => console.log(err))

   })
.catch((error) => console.log(error)  );

});

}

  return (
    <>
    <Button variant="secondary" onClick={handleShow}>
    Add Items
  </Button>

  <Modal show={show} onHide={handleClose} centered backdrop='static' >
    <Modal.Header closeButton>
      <Modal.Title className='modal_head'>Add Items</Modal.Title>
    </Modal.Header>
    <Modal.Body className='modal_body'>
      <form onSubmit={AddItem}>
      <div className="mb-3 ">
<label htmlFor="exampleInputEmail1" className="form-label">
  Item Name
</label>
<input value={ItemName} style={{color:'cyan'}}
    onChange={(e)=> setItemName(e.target.value)}
  type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
 </div>

 <div className='mb-3'>
  <label htmlFor='formFile' className='form_label'> 
    Item Image
  </label>
  <input className='form-control' style={{color:'cyan'}} onChange={(e) => setThumbnail(e.target.files[0])} type='file' id='formFile' />
 </div>

 <div className="mb-3 ">
<label htmlFor="exampleInputEmail1" className="form-label">
  Price
</label>
<input value={Price} style={{color:'cyan'}}
    onChange={(e)=> setPrice(e.target.value)}
  type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
 </div>
 <Form.Group className="mb-3" >

<Form.Label>Restuarent</Form.Label>
<Form.Select aria-label="Please Select a Brand" style={{color:'cyan'}} onChange={(e) => setRestuarent(e.target.value)}>
    <option>Please Select a Restuarent</option>
    {
        restuarentVal.map((val, key) => <option key={key} value={val.RestuarentName}>{val.RestuarentName}</option>)
    }

</Form.Select>
</Form.Group>

<Form.Group className="mb-3" >

<Form.Label>Category</Form.Label>
<Form.Select aria-label="Please Select a Category" style={{color:'cyan'}} onChange={(e) => setCategory(e.target.value)}>
    <option>Please Select a Category</option>
   {
    CategoryVal.map((val, key) => <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)
   }
</Form.Select>
</Form.Group>

<div className="mb-3 ">
<label htmlFor="exampleInputEmail1" className="form-label">
  Description
</label>
<input value={description} style={{color:'cyan'}}
    onChange={(e)=> setdescription(e.target.value)}
  type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
 </div>

<button type="submit" className="btn btn-primary">
Submit
</button>
      </form>
</Modal.Body>
    
  </Modal>
</>
  )
}

export default ItemsModal