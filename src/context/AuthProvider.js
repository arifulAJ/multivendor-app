import React, { createContext } from 'react';
import useFirebase from '../firebase/FirebaseAuth';
// import useFireBase from '../Firebase/FireBaseAuth';
export const AuthContext=createContext();
const AuthProvider = ({ children}) => {
    const allContent=useFirebase();
    
    return (
        <AuthContext.Provider value={allContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;