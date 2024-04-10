import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Login  from "./components/Login"; 
import  Register  from "./components/Register";
import  ForgotPassword  from "./components/ForgotPassword"; 

import { AuthProvider } from './firebase/auhContext';





function App() {


  return (
    <>
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route exact path='/recovery' element={ <ForgotPassword/> }/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
    
      
    </>
  )
}

export default App
