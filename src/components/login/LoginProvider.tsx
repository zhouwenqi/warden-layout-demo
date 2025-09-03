import React,{useEffect, useState} from 'react';
import { ConfigProvider, App, theme } from 'antd';
import { LoginContext } from './LoginContext';

/**
 * 登录框提供者
 * @param props 
 * @returns 
 */
const LoginProvider=({ children }: { children: React.ReactNode })=>{
    let defaultLoginConfig:LoginConfig = {layoutType:"cardColumn",primaryColor:"#358cf1",theme:"light",skinName:"blueSky"}
    const loginConfigState = localStorage.getItem("loginConfig")
    if(loginConfigState){
        defaultLoginConfig = JSON.parse(loginConfigState) as LoginConfig
    }   
       
    const [loginConfig,setLoginConfig] = useState<LoginConfig>(defaultLoginConfig) 
    useEffect(()=>{
        localStorage.setItem("loginConfig",JSON.stringify(loginConfig))
    },[loginConfig])
    console.log(loginConfig)

    let algorithm = loginConfig.theme == "dark" ? [theme.darkAlgorithm] : [theme.defaultAlgorithm]
    
    return(
        <ConfigProvider theme={{
            token:{colorPrimary:loginConfig.primaryColor},      
            algorithm:algorithm}}
            >
            <App>
                <LoginContext.Provider value={{loginConfig,setLoginConfig}}>                            
                    {children}
                </LoginContext.Provider>
            </App>
        </ConfigProvider>
    )
}

export default LoginProvider