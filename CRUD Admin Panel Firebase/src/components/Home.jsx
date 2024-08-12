import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../authentication/FirebaseConfig'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  
  return (
    <>
    <Navbar/>
    <div>
      <h1>Welcome Home </h1>
    </div>
    </>
  )
}

export default Home