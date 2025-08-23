import LeftExpandPanel from '@/components/LeftExpandPalel'
import WardenLayout,{Warden} from 'warden-layout'

/** 自定义布局 - company */    
export default ()=>{
    const config:Warden.IConfig = {
        "theme": "light",
        "systemTheme": false,
        "layoutType": "leftMenu",
        "primaryColor": "#5179ca",
        "compact": false,
        "leftMenuInline": true,
        "leftEmptyHidden": true,
        "menuSplit": true,
        "hideBreadcrumb": false,
        "hideTitleBar": true,
        "hideFooter": false,
        "brandLogo": "svg@/images/logo2.svg",
        "brandTitle": "app.company.brandTitle",
        "rootItemMenuGroup": false,
        "logoNavigateRoute": "/company",
        "localeEnabled": true,
        "menuSkin": "blueLattice",
        "leftTransparent": true,
        "containerTransparent": true,
        "backgroundBlur": true,
        "page403":"/403"
    }
    return(
        <WardenLayout config={config} leftExpandPanel={<LeftExpandPanel />} />
    )
}