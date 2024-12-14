import CustomBellButton from '@/components/CustomBellButton'
import CustomThemeButton from '@/components/CustomThemeButton'
import CustomToolbarUserPanel from '@/components/CustomToolbarUserPanel'
import FooterPanel from '@/components/FooterPanel'
import GithubButton from '@/components/GithubButton'
import WardenLayout,{SvgIcon, Warden} from 'warden-layout'


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

    // 布局配置
    const config:Warden.IConfig = {
        "theme":"dark",
        "systemTheme":true,
        "layoutType":"HeadMenu",
        "primaryColor":"#417ffb",
        "compact":false,
        "leftMenuInline":true,
        "leftEmptyHidden":true,
        "menuSplit":true,
        "hideBreadcrumb":false,
        "hideTitleBar":true,
        "hideFooter":false,
        "brandLogo":"svg_/images/logo2.svg",
        "brandTitle":"app.main.brandTitle",
        "rootItemMenuGroup":false,
        "menuByPrimary":true,
        "logoNavigateRoute":"/main",
        "localeEnabled":true,
    }

    // 它接收一个数组，退出图标放前面
    const screenIcons:JSX.Element[] = [        
        <SvgIcon src="/svg/menu/main-screen-in.svg" width={16} height={16} style={{width:"16px",height:"16px"}} />,
        <SvgIcon src="/svg/menu/main-screen-out.svg" width={16} height={16} style={{width:"16px",height:"16px"}} />
    ]

    return(
        <WardenLayout 
            config={config} 
            toolbarUserPanel={<CustomToolbarUserPanel />} 
            toolbarButtons={[<GithubButton key="githubButton" />,<CustomBellButton key="bellButton" />,<CustomThemeButton key="themeButton" />]}
            screenIcons={screenIcons}
            footer={<FooterPanel />}
         />
    )
}