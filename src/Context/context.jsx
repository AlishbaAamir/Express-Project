import React, { createContext, useEffect, useReducer  } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie";


export const GlobalContext = createContext("Initial Value")

// const DecodeUser = (value) =>{
//     console.log(value)
//     if(value == "undefined"){
//         return undefined
//     }
//     else{
//        return jwt_decode(value)
//     }
// }

let data = {
    user: Cookies.get('token')
    // user: getUsersDetails()

};

export default function GlobalContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(()=>{
        Cookies.set('token', state.user)
    //    const userProfile = DecodeUser(state.user)
    }, [state.user])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}