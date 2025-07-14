import { Badge } from "antd"
import { SvgIcon, ToolbarButton,useConfigContext,IMenuMessageEvent } from "warden-layout"

const CustomBellButton=()=>{
    // const {setMenuExtraBadge} = useConfigContext()
    // const extraBadge:IMenuMessageEvent = setMenuExtraBadge()
    // let badgeCount = 0;
    // if(extraBadge.data.path == "/main/discover/message"){
    //     badgeCount = extraBadge.data.count;
    // }
    
    return(
        <Badge size="small" count={0} offset={[-8,4]}>
            <ToolbarButton>
                <SvgIcon width={16} height={16} style={{color:"currentcolor",verticalAlign:"middle",height:"16px",width:"16px"}} src="/svg/menu/main-bell.svg" />
            </ToolbarButton>
        </Badge>
    )
}
export default CustomBellButton