import React, { useState,  } from 'react'
import BackgroundLogin from "../assets/LoginBG.jpg"
import GoogleImage from "../assets/googleImage.png"
import '../App.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../authentication/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email  : "",
        password : ""
    })

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setData(prev => ({...prev, [name]:value}));
       
    }



    const handleOnSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
            toast.success("Hurrrrrry")
            navigate("/");
        })
        .catch(err => {
            console.log(err)
            if(data.email === "" || data.password === "") 
            {
                toast.error("Fields cannot be empty")
            }
                
        })
    }

  return (
   <section className='section object-cover overflow-hidden h-[100vh] flex'>
    <section className='flex justify-center items-center mx-auto '>
      <form onSubmit={handleOnSubmit} className='bg-[rgba(255,255,255,0.3)] relative w-[500px] h-[640px] flex flex-col gap-4 items-center justify-center'>
        <img src={GoogleImage} className='w-40 relative
        -top-8'/>
          <input type="email" placeholder='Enter your email'   name='email' id='email' onChange={handleOnChange} className='h-14 w-64 rounded-full bg-[rgba(255,255,254,.5)] pl-4'/>
          <input type="password" name="password" id="password" placeholder='Enter your password' onChange={handleOnChange}
          className='h-14 w-64 rounded-full bg-[rgba(255,255,254,.5)] pl-4'
          />
          <button type='submit' className='bg-[#002f5e] h-14 w-64 rounded-full'>Login</button>
      </form>
    </section>
    
   </section>
  )
}

export default Login