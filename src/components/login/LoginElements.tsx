import React, { useState,useEffect } from 'react';
import {useIntl} from 'umi';
import {Spin, Flex} from 'antd';
import "./LoginElements.less";

// 异步加载图片例如
const useLazyImages=(imgs:string[])=>{  
  const [loading,setLoading] = useState<boolean>(false)
  useEffect(()=>{
      setLoading(true);
      let loaded = 0;
      imgs.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loaded++;
          if(loaded === imgs.length){
            setLoading(false);
          }
        };
        img.onerror=()=>{
          loaded++;
          if(loaded === imgs.length){
            setLoading(false);
          }
        }
      });    
  },[])
  return {
    loading
  }
}

// 图片居中加载
const SpinBox=()=>{
  return(
    <Flex vertical justify="center" align="center" style={{height:"100%"}}>
      <Spin size="small" />
    </Flex>
  )
}

// 版权信息
const CopyRight=(props:{color?:string})=>{
    const {color="#999"} = props
    const intl = useIntl()
    const styles:React.CSSProperties = {
        textAlign: "center",
        color:color,
        fontSize: "12px",
    }

    return(
        <div style={styles}>
            <div style={{padding:"10px 0px"}}>{intl.formatMessage({id:"app.copyright.info"})}</div>
        </div>
    )
}

/**
 * 登录框body背景
 * @param props 
 * @returns 
 */
const LoginLazyBox=(props:React.HTMLAttributes<HTMLDivElement>&{backimgUrl?:string})=>{
  const [displaySrc, setDisplaySrc] = useState<string | null>(null);
  useEffect(() => {
      if(props.backimgUrl){
        setDisplaySrc(null);
        const img = new Image();
        img.src = props.backimgUrl
        img.onload = () => {
            setDisplaySrc(props.backimgUrl!);
        }
        return () => {
          img.onload = null;
        }
      }
  }, [props.backimgUrl])

  let styles:React.CSSProperties={
    opacity: displaySrc ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    backgroundImage:displaySrc ? `url(${displaySrc})` :"none"
  }

  styles = {
    ...styles,
    ...props.style
  }
  
  return(
    <div style={styles} className={props.className}>{props.children}</div>
  )
}

function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const clone = { ...obj };
  for (const key of keys) {
    delete clone[key];
  }
  return clone;
}


export {CopyRight,SpinBox,useLazyImages,LoginLazyBox}