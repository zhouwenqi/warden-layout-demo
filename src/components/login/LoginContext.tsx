import React, { useContext } from "react";


interface LoginContextDispatcher {
    loginConfig:LoginConfig,
    setLoginConfig:(config:LoginConfig)=>void
}
const LoginContext = React.createContext<LoginContextDispatcher>({
    loginConfig:{
        layoutType:"normal",
        theme:"light"     
    },    
    setLoginConfig:(config:LoginConfig)=>{}
})
export const useLoginContext=()=>useContext(LoginContext)
export {LoginContext}