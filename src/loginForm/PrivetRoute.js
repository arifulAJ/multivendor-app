import React from 'react';


import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../Hooks/Auth';
import useFirebase from '../firebase/FirebaseAuth';


const PrivetRoutes = ({children}) => {
  const {loading}=useFirebase()
  const location=useLocation()
 
   
    const {user}=useAuth()

  
   if(loading)return <div><h1>loading ........</h1></div>
    
  if(user){
    return children
  }
  return <Navigate to={"/singin"} state={{from:location}} replace></Navigate>
     
    
};

export default PrivetRoutes;