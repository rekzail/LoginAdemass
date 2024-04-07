
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLock,FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

export default function ForgotPassword() {
  return (
    <div className='login-card'>
      
      <IoPersonCircleOutline className='login-icon person-icon'/>
      <FaLock className='login-icon lock'/>
      <h1 className='login'>Forgot Password?</h1>
      
      <form className='form'>
        <label htmlFor="" className='label-login'>Email</label>
        <input type="text" className='input-login' placeholder="Email Address"/>
        <input type="submit" value="Reset Password" className="submit-button"/>
      </form>
     
      <div className='social-net'>
        <FaFacebookF className='social'/>
        <FaGoogle  className='social'/>
        <LuInstagram className='social'/>
      </div>
      
      

      
      
      </div>
  )
}
