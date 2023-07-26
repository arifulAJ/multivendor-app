import React from 'react';


import { Outlet,Navigate } from 'react-router-dom';

import useAuth from '../Hooks/Auth';

const PrivetRoutes = () => {
    
    const auth=useAuth()
  
    return (
      auth?.user?.email?<Outlet/>:<Navigate to="/singin"/>
    );
};

export default PrivetRoutes;

