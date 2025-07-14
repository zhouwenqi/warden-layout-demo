import { ToolbarButton,useConfigContext } from "warden-layout"

const CustomThemeButton=()=>{
    const {config,setConfig} = useConfigContext()

    let svgSrc = "", tipText = ""
    if(config.theme == "light"){
        svgSrc = "/svg/menu/main-light.svg"
        tipText = "light"
    }else{
        svgSrc = "/svg/menu/main-dark.svg"
        tipText = "dark"
    } 

    const onClickHandler=()=>{
        console.log(config.theme)
        if(config.theme == "light"){
            setConfig({...config,systemTheme:false,theme:"dark"})
        }else{
            setConfig({...config,systemTheme:false,theme:"light"})
        }
    }

    return(        
        <ToolbarButton onClick={onClickHandler} icon={svgSrc} />
    )
}
export default CustomThemeButton