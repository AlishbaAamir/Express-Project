import React from 'react'
import UserNav from './Component/UserNav'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Item from './Page/Item'
import RestuarentDetail from './Page/RestuarentDetail'
import ItemPage from './Page/ItemPage'
import './index.css'
import CategoryPage from './Page/CategoryPage'
import RestuarentItem from './Page/RestuarentItem'


function index() {
  
  return (
      <>

  <section>
    {/* <GuestNav/> */}
    <UserNav/>
   {/* <CategoryCard/> */}
  </section>
  
                    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/item" element={<Item/>} />
      <Route path="/restuarent" element={<RestuarentDetail/>} />
      <Route path="/category/:CategoryName" element={< CategoryPage/>}/>
      <Route path="/item/:_id" element={<ItemPage/>} />
      <Route  path="/restuarent/:RestuarentName" element={<RestuarentItem/>} />
      {/* <Route path="/item" element={<Item/>} /> */}
    </Routes>
                  
  
   
  
  
  </>
  )
}

export default index