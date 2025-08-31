import CustomBellButton from '@/components/CustomBellButton'
import CustomLogoPopoverPanel from '@/components/CustomLogoPopoverPanel'
import CustomThemeButton from '@/components/CustomThemeButton'
import {UserPopoverPanel} from '@/components/CustomToolbarUserPanel'
import FooterPanel from '@/components/FooterPanel'
import GithubButton from '@/components/GithubButton'
import {useModel,useLocation} from 'umi'
import WardenLayout,{SvgIcon,  Warden} from 'warden-layout'
import React, { useEffect, useState } from 'react'
import { getSkin } from '@/utils/skinUtil'
import { LeftContactMePanel } from '@/components/LeftExpandPalel'

// 布局配置
const defaultLayoutConfig:Warden.IConfig = {
    "theme":"dark",
    "systemTheme":true,
    "layoutType":"headMenu",
    "primaryColor":"#417ffb",
    "compact":false,
    "leftMenuInline":true,
    "backgroundBlur":true,
    "leftEmptyHidden":true,
    "menuSplit":true,
    "hideBreadcrumb":false,
    "hideTitleBar":true,
    "hideFooter":false,
    "brandLogo":"svg@/images/logo2.svg",
    "brandTitle":"app.main.brandTitle",
    "rootItemMenuGroup":false,
    "logoNavigateRoute":"/main",
    "localeEnabled":true,
    "menuIconVariant":["-outlined","-filled"]
}

/**
 *  自定义布局(/main)  - demo
 * 
 *  1）菜单图标全部换了
 *  2) 全屏图标也换了
 *  3）头部用户信息组件也换了
 *  4) 头部还增加了一些button
 *  
 * */ 
export default ()=>{

    const loginSkinState = localStorage.getItem("loginConfig")
    let layoutConfig = defaultLayoutConfig


    if(loginSkinState){
        const loginConfig = JSON.parse(loginSkinState) as LoginConfig 
        if(loginConfig.skinName){
            const skin = getSkin(loginConfig.skinName)   
            if(skin){
                layoutConfig = {
                    ...layoutConfig,
                    menuSkin:skin.name,
                    primaryColor:skin.primaryColor || layoutConfig.primaryColor,
                    systemTheme:false,
                    headTransparent: true,
                    leftTransparent: true,
                    containerTransparent: true,
                    theme:skin.theme || layoutConfig.theme,
                    layoutType:skin.layoutType || layoutConfig.layoutType,                
                    menuBackgroundStyle:skin.menuBackgroundStyle || layoutConfig.menuBackgroundStyle
                }
            }
        } else {
            layoutConfig = {
                ...layoutConfig,
                menuSkin:undefined,
                systemTheme:false,
                primaryColor:loginConfig.primaryColor || layoutConfig.primaryColor,
                theme:loginConfig.theme || layoutConfig.theme,
            }
            console.log(layoutConfig)
        }
    }  

    console.log(layoutConfig)


    // 它接收一个数组，退出图标放前面
    const screenIcons:JSX.Element[] = [        
        <SvgIcon src="/svg/menu/main-screen-in.svg" style={{width:"16px",height:"16px"}} />,
        <SvgIcon src="/svg/menu/main-screen-out.svg" style={{width:"16px",height:"16px"}} />
    ]

    const {detailsDrawer} = useModel("useDrawerModel",(model)=>({
        detailsDrawer:model.detailsDrawer
    }))
    const frameElements=[detailsDrawer]

    return(      
            <WardenLayout 
                config={layoutConfig}
                frameElements={frameElements.map((frame,index)=>React.cloneElement(frame,{key:'f'+index}))}
                logoPopover={<CustomLogoPopoverPanel />}
                avatarPopover={<UserPopoverPanel />}
                toolbarButtons={[
                <GithubButton key="githubButton" />,
                <CustomBellButton key="bellButton" />,
                <CustomThemeButton key="themeButton" />]}
                leftExpandPanel={<LeftContactMePanel />}
                screenIcons={screenIcons}
                footer={<FooterPanel />}
            />
    )
}