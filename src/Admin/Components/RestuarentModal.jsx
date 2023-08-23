import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import axios from 'axios';


function RestuarentModal({newRestuarent}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [RestuarentName, setRestuarentName] = useState("")
  const [RestuarentImage, setRestuarentImage] = useState(null)
  const [Adress, setAddress] = useState("")
  const [City, setCity] = useState("")

  const AddRestuarent = (e) =>{
    e.preventDefault();

      const storageRef = ref(storage, `Restuarentimages/${RestuarentImage.name}`);
    // 'file' comes from the Blob or File API
uploadBytes(storageRef, RestuarentImage).then((snapshot) => {
  getDownloadURL(snapshot.ref)
  .then((url) => {
    const payload ={  RestuarentName,  RestuarentImage : url,  City, Adress,}
    console.log(payload)
    axios.post('http://localhost:2500/api/createRestuarent',payload)
.then(json => {console.log(json.data)
  newRestuarent(json.data.restuarent)
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
        Add Restuarent
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={AddRestuarent}>
          <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Restuarent Name
    </label>
    <input value={RestuarentName} style={{color:'cyan'}}
        onChange={(e)=> setRestuarentName(e.target.value)}
      type="text"  className="form-control"  id="exampleInputEmail1"  aria-describedby="emailHelp"  />
     </div>
     <div className='mb-3'>
      <label htmlFor='formFile' className='form_label'> 
        Restuarent Image
      </label>
      <input className='form-control' 
      
      style={{color:'cyan'}} onChange={(e) => setRestuarentImage(e.target.files[0])} type='file' id='formFile' />
     </div>

     <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Address
    </label>
    <input value={Adress} style={{color:'cyan'}}
        onChange={(e)=> setAddress(e.target.value)}
      type="text"  className="form-control"  id="exampleAddres"   />
     </div>

     <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      City
    </label>
    <input value={City} style={{color:'cyan'}}
        onChange={(e)=> setCity(e.target.value)}
      type="text"  className="form-control"  id="exampleCity"   />
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

export default RestuarentModal