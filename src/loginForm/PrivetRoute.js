import React from 'react';


import { Navigate } from 'react-router-dom';

import useAuth from '../Hooks/Auth';
import useFirebase from '../firebase/FirebaseAuth';


const PrivetRoutes = ({children}) => {
  const {loading}=useFirebase()
   
    const {user}=useAuth()
   console.log(user)
  
   if(loading)return <div><h1>loading ........</h1></div>
    
  if(user){
    return children
  }
  return <Navigate to={"/singin"}></Navigate>
     
    
};

export default PrivetRoutes;