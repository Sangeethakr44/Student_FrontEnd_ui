import React ,{ useState } from 'react'
import {FaUser,FaLock,FaEnvelope,FaAddressCard,FaMapMarkerAlt,FaMobileAlt,FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Enrollment = () => {
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[city,setCity]=useState("");
    const[phone,setPhone]=useState("");
    const[pinCode,setPinCode]=useState("");
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const handleSubmit = async (e) =>{

        // e.preventDefault();
      
        // console.log("fghj")
      
      
        // const errors = validate();
      
        // if(Object.keys(errors).length > 0){
        //   console.log("erro",errors)
      
        //   setError(errors);
        //   return;
        // }
        try{
          console.log("test")
      
          const response = await axios.post(
            "https://localhost:7138/api/Master/create-user",
            {
              name,
              email,
              address,
              city,
              phone,
              pinCode,
              userName,
              password,
      
            }
          );
          console.log("test")
      
          navigate("/");
        }catch(err){
      
          console.log(err)
        }
      };
       
  return (
    <div className='body'>
    <div className='wrapper'>
    <form action='' onSubmit={handleSubmit}>
      <h1>Enrollment Now</h1>
      <div className='input-box'>
        <input form=''  type='text' value={name} onChange={(e) => setName(e.target.value) } placeholder='Student' required />
        <FaUser className='icon'/>
      </div>
      <div className='input-box'>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Course' required />    
               <FaEnvelope className='icon'/>
      </div>
      <div className='input-box'>
        <input type='date'value={address} onChange={(e) => setAddress(e.target.value)}  placeholder='Date' required />
        <FaAddressCard  className='icon'/>
      </div>
      
    
      
      <Link to={'/'}><button type='submit'>Register</button></Link>
    </form>
   </div>
   </div>
  )
}

export default Enrollment