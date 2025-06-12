import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

//IMPORT PAGES

import Login from "../src/pages/Login-Page"

//

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=''>
              <Route index element={<Login />}/>
              <Route path='Login' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
