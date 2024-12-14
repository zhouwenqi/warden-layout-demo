import { Tooltip } from "antd"
import { ToolbarButton,useConfigContext } from "warden-layout"

declare type ThemeMode = "light" | "dark" | "auto"

const CustomThemeButton=()=>{
    const {config,setConfig} = useConfigContext()

    let themeMode:ThemeMode = "auto"
    let svgSrc = "", tipText = ""
    if(config.theme == "light"){
        svgSrc = "/svg/menu/main-light.svg"
        tipText = "light"
        themeMode = "light"
    }else{
        svgSrc = "/svg/menu/main-dark.svg"
        tipText = "dark"
        themeMode = "dark"
    }
    if(config.systemTheme){
        tipText = "auto"
    }

    const onClickHandler=()=>{
        switch(config.theme){
            case "light":
                setConfig({...config,systemTheme:false,theme:"dark"})
                break;
            case "dark":
                setConfig({...config,systemTheme:true})
                break;
            case "auto":
                setConfig({...config,systemTheme:true,theme:"light"})
                break;
        }

    }

    return(
        
        <ToolbarButton onClick={onClickHandler} icon={svgSrc} />
        
    )
}
export default CustomThemeButton