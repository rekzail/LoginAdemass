import  auth  from "./firebaseConfig";
import { createContext, useContext, useState, useEffect} from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("no ingreso contexto");
  }
  return context;
};

export function AuthProvider({ children }) {
 /*  const [user,setUser] = useState("")
  useEffect(() => {
    const subcribed = onAuthStateChanged(auth, (currentUser)=>{
      if (!currentUser) {
          console.log("no hay usuario");
          setUser("")
      }else {
        setUser(currentUser);
      }
      return ()=> subcribed()
    },[])
  
    
  }) */
  
  
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        logout,
        
      }}
    >
      {children}
    </authContext.Provider>
  );
}
