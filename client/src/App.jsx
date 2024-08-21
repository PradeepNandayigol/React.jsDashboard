import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import { AdminLayout } from './component/layouts/Admin-Layout';
import { AdminUser } from './pages/AdminUser';
import { AdminContact } from './pages/AdminContact';
import  AdminUpdateuser  from "./pages/AdminUpdate"



const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='*' element={<Error/>}/>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='users' element={<AdminUser/>} />
            <Route path='contacts' element={<AdminContact/>} />
            <Route path='/admin/users/:id/edit' element={<AdminUpdateuser/>} />
           
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
