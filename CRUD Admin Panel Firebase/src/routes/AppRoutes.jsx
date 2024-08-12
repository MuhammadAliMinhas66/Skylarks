import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Create from '../components/Create';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const AppRoutes = () => {
  return (
    <>
    <ToastContainer/>
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
