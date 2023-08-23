import React, { useState } from 'react'
import Admin from './Admin/App'
import Users from './Users/index'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import GuestNav from './GuestNav';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from './Context/context';
import jwtDecode from 'jwt-decode';
import RestuarentDetail from './Users/Page/RestuarentDetail';
import Item from './Users/Page/Item';

// export const AppRoutes = 'http://localhost:2500/'
export default function App() {

  const {state, dispatch} = useContext(GlobalContext)
  const [currentUser, setCurrentUser] = useState(undefined)
 
  useEffect(()=>{
    if(state.user == "undefined"){
      return undefined
    }
    else{
      const userdata = jwtDecode(state.user)
      console.log(userdata)
      setCurrentUser(userdata)
    }
  //  console.log(state.user)
   
  }, [state.user])

  const Role = 'guest'
  return (
    <BrowserRouter>
      {
        currentUser?.Role == 'admin' ? (<Admin />)
          :
          (
            currentUser?.Role == 'user' ? (
              <Users/>)
              :
              (
                <>
                <div><GuestNav/></div>
                
                
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<div>Page-404</div>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/singup' element={< SingUp/>} />
                  {/* <Route path='/login' element={<RestuarentDetail/>} />
                  <Route path='/login' element={<Item/>} /> */}
                </Routes>
                </>
              )
          )
      }

    </BrowserRouter>
  )
}