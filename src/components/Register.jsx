
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLock,FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

export default function Register() {
  return (
    <div className='login-card'>
      
      <IoPersonCircleOutline className='login-icon person-icon'/>
      <FaLock className='login-icon lock'/>
      <h1 className='login'>Register</h1>
      <form className='form'>
        <label htmlFor="" className='label-login'>Name</label>
        <input type="text" className='input-login'/>
        <label htmlFor="" className='label-login'>Last Name</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login'>Email</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login'>Password</label>
        <input type="text" className='input-login' />
        <label htmlFor="" className='label-login'>Repeat Password</label>
        <input type="text" className='input-login' />
       
        <input type="submit" value="Entrar" className="submit-button"/>
      </form>
      <div className='social-net'>
        <FaFacebookF className='social'/>
        <FaGoogle  className='social'/>
        <LuInstagram className='social'/>
      </div>
      
      

      
      
      </div>
  )
}
