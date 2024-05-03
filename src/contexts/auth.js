import React,{ createContext, useState} from "react";

export const AuthContext = createContext ({});

function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome: 'Hermes Teste '

    });

   async function SignUp(email, password, nome){
    console.log('email digitado: ', email)
   }




    return(
        <AuthContext.Provider value={{ user, SignUp }}>
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider;