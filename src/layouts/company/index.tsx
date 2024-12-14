import WardenLayout,{Warden} from 'warden-layout'

/** 自定义布局 - company */    
export default ()=>{
    const config:Warden.IConfig = {
        "theme":"light",
        "systemTheme":true,
        "layoutType":"LeftMenu",
        "primaryColor":"#712fce",
        "compact":false,
        "leftMenuInline":true,
        "leftEmptyHidden":true,
        "menuSplit":true,
        "hideBreadcrumb":false,
        "hideTitleBar":true,
        "hideFooter":false,
        "brandLogo":"svg_/images/logo2.svg",
        "brandTitle":"app.company.brandTitle",
        "rootItemMenuGroup":true,
        "menuByPrimary":true,
        "logoNavigateRoute":"/company",
        "localeEnabled":true
    }
    return(
        <WardenLayout config={config} />
    )
}