// import React from 'react';

import {  createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firease/firebase.config";


 export const AuthContext = createContext(null);

 const auth = getAuth(app);
const Authprovider = ({children}) => {
    const user = {displayName: 'Dvive'}

    const authInfo = {

        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;