import {useState} from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";


import { useAuth } from "../firebase/auhContext";

export default function Register() {
  
  
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const auth = useAuth();
  const handleRegister = (e)=> {
    e.preventDefault();
    auth.register(usuario,pass)

  }


  return (
    <div className='login-card'>
      
      <IoPersonCircleOutline className='login-icon person-icon'/>
      <FaLock className='login-icon lock'/>
      <h1 className='login'>Register</h1>
      <form className='form'>
        <label htmlFor="" className='label-login'>Name</label>
        <input type="text" className='input-login' onChange={(e) => setUsuario(e.target.value)}/>
        <label htmlFor="" className='label-login'>Last Name</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login'>Email</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login' onChange={(e) => setPass(e.target.value)}>Password</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login'>Repeat Password</label>
        <input type="text" className='input-login' />
       
        <input type="submit" value="Entrar" className="submit-button" onClick={handleRegister}/>
      </form>
      </div>
  )
}
