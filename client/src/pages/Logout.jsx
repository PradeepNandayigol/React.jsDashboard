import React, { useEffect } from 'react';
import {Navigate} from "react-router-dom";
import { useAuth } from '../store/auth';

 const Logout = () => {

    const {logoutUser} = useAuth();
    useEffect(()=>{
        
        // eslint-disable-next-line no-undef
        logoutUser();

    },[logoutUser]);

    
  return <Navigate to="/"/>;
};
export default Logout;

