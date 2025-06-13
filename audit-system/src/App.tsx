import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

//IMPORT PAGES
import Database from "../src/pages/Login-Page"

import Login from "../src/pages/Login-Page"
import Dashboard from "../src/pages/Login-Page"
import Audit from "../src/pages/Login-Page"
import Report from "../src/pages/Login-Page"
import Log from "../src/pages/Login-Page"
import Profile from "../src/pages/Login-Page"

//

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=''>
              <Route index element={<Login />}/>
              <Route path='Login' element={<Login />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/dashboard' element={<Dashboard />}/>
              <Route path='/audit' element={<Audit />}/>
              <Route path='/report' element={<Report />}/>
              <Route path='/log' element={<Log />}/>
              <Route path='/profile' element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
