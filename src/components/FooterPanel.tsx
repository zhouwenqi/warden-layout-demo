import { useConfigContext,AppIcon } from "warden-layout"

export default ()=>{    
    const {config} = useConfigContext()
    return(        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <label>Copyright © 2024</label>
            <AppIcon name="logo" style={{verticalAlign:"middle",margin:"0px 4px"}} color="currentColor" size={config.compact ? 16 : 20} />
            <label>warden.vip All Rights Reserved</label>
        </div>
    )
}