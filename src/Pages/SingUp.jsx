import React from 'react'
import { useState } from 'react';
import axios from 'axios';



function SingUp() {
    const [Name, setName] = useState("");
    const [Email, setEmail] =useState("");
    const [Password, setPassword] = useState("");
    
  const singupUser = (e) => {
    e.preventDefault();
    const payload = {Email, Password, Name}
    console.log(payload)
    axios.post('http://localhost:2500/api/singup', payload)
     .then(json => {console.log(json.data)})
    .catch(err => console.log(err))
  }

  return (
    <div className='login_container'>
        <form onSubmit={singupUser}>
        <div className="login_form_container">
  <div className="login_form">
    <h2>SingUp</h2>
    <div className="input_group">
      <i className="fa fa-user" />
      <input type="text" placeholder="Username" className="input_text" 
       value={Name}
       onChange={(e) => setName(e.target.value)}
      />
    </div>
    {/* <div className="input_group">
      <i className="fa fa-user" />
      <input type="text" placeholder="Last Name" className="input_text" />
    </div> */}
    <div className="input_group">
      <i className="fa fa-envelope" />
      <input type="email" placeholder="Email" className="input_text"
      value={Email}
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="input_group">
      <i className="fa fa-unlock-alt" />
      <input type="password" placeholder="Password" className="input_text"
       value={Password}
       onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="button_group" id="login_button">
    <button type='submit'>Submit</button>
    </div>
    <div className="fotter">
      <a>Login</a>
    </div>
  </div>
</div>
</form>
    </div>
  )
}

export default SingUp