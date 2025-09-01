import React,{useEffect, useState} from 'react';
import { ConfigProvider, App, Space, theme,message } from 'antd';
import {useIntl,history} from 'umi';
import LoginBlueSky from '@/components/login/LoginBlueSky';
import { LoginContext } from '@/components/login/LoginContext';
import LoginSplashing from '@/components/login/LoginSplashing';
import LoginBlueChristams from '@/components/login/LoginBlueChristams';
import LoginBlueLattice from '@/components/login/LoginBlueLattice';
import LoginPinkRomantic from '@/components/login/LoginPinkRomantic';
import LoginGreenMountain from '@/components/login/LoginGreenMountain';
import LoginOrangeBubble from '@/components/login/LoginOrangeBubble';
import LoginStarJellyfish from '@/components/login/LoginStarJellyfish';
import LoginStarNeon from '@/components/login/LoginStarNeon';
import LoginNormal from '@/components/login/LoginNormal';
import LoginSettingDrawer from '@/components/login/LoginSettingDrawer';


/**
 * page - 登录
 * @returns 
 */
const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [imgUrl,setImgUrl] = useState<string>('')

  let defaultLoginConfig:LoginConfig = {layoutType:"cardColumn",primaryColor:"#358cf1",theme:"light",skinName:"blueSky"}
  const loginConfigState = localStorage.getItem("loginConfig")
  if(loginConfigState){
    defaultLoginConfig = JSON.parse(loginConfigState) as LoginConfig
  }
  

  const [loginConfig,setLoginConfig] = useState<LoginConfig>(defaultLoginConfig)
  const [loading,setLoading] = useState<boolean>(false)
  const msgKey = 'loginMsg';
  const intl = useIntl()
  useEffect(()=>{               
        refreshCaptcha()
  },[])

  useEffect(()=>{
    localStorage.setItem("loginConfig",JSON.stringify(loginConfig))
  },[loginConfig])

  // 刷新验证码
  const refreshCaptcha=() => {
      setImgUrl(process.env.API_URI+"/captcha/image/B6C33F745C72B2430382FCCB5F483F9D?backcolor=transparent&rnd=" + Math.random()*0.01)
  }

  // 登录处理
  const loginHandler=async (values:any)=>{
    console.log(values)
    setLoading(true)
    // 模拟登录
    try{                
        messageApi.open({
            key:msgKey,
            type:"loading",
            content:intl.formatMessage({id:"pages.login.message.logging"})
        })    
        // 堵塞登录
        await asyncDelayedFunction()  
        messageApi.open({
            key:msgKey,
            type:"success",
            content:intl.formatMessage({id:"pages.login.message.success"}),
            duration:1,
            onClose:()=>{
                setLoading(false)
                gotoMainRoute()
            }
        })            
    }catch(e){
        setLoading(false)
        messageApi.destroy(msgKey)
    }finally{            
        refreshCaptcha()            
    }
  }


  // 注册跳转
  const registerHandler=()=>{
    gotoMainRoute()
  }

  const gotoMainRoute=()=>{
    localStorage.removeItem("/main")
    localStorage.setItem("loginConfig",JSON.stringify(loginConfig))
    history.push("/main")
  }

  let algorithm = loginConfig.theme == "dark" ? [theme.darkAlgorithm] : [theme.defaultAlgorithm]

  // 模拟堵塞登录
  async function asyncDelayedFunction() {
    console.log("Waiting for 5 seconds...");
    await delay(3000); // 等待2秒（2000毫秒）
    console.log("3 seconds have passed!");
  }
  function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let panel = <LoginNormal layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />


  switch(loginConfig.skinName){
    case "paintSplashing":
      panel = <LoginSplashing layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break;
    case "blueChristmas":
      panel = <LoginBlueChristams layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "blueLattice":
      panel = <LoginBlueLattice layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "pinkRomantic":
      panel = <LoginPinkRomantic layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break;   
    case "greenMountain":
      panel = <LoginGreenMountain layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "orangeBubble":
      panel = <LoginOrangeBubble layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "starJellyfish":
      panel = <LoginStarJellyfish layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "starNeon":
      panel = <LoginStarNeon layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    case "blueSky":
      panel = <LoginBlueSky layoutType={loginConfig.layoutType} onRegister={()=>{registerHandler()}} loading={loading} onLogin={loginHandler} captchaUrl={imgUrl} onRefreshCaptcha={refreshCaptcha} />
      break; 
    default:
      break;
  }
  
  return (
    <ConfigProvider theme={{
      token:{colorPrimary:loginConfig.primaryColor},      
      algorithm:algorithm}}
      >
        <App>
          <LoginContext.Provider value={{loginConfig,setLoginConfig}}>
            <>
            {contextHolder}            
            <LoginSettingDrawer onMorePress={()=>{gotoMainRoute()}} />
            {panel}
            </>
          </LoginContext.Provider>
        </App>
    </ConfigProvider>
  );
};

export default LoginPage;
