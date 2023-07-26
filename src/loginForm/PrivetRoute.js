import React from 'react';


import { Navigate } from 'react-router-dom';

import useAuth from '../Hooks/Auth';


const PrivetRoutes = ({children}) => {
   
    const {user}=useAuth()
   console.log(user)
  
    
  if(user){
    return children
  }
  return <Navigate to={"/singin"}></Navigate>
     
    
};

export default PrivetRoutes;