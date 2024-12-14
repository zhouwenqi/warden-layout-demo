import { Badge } from "antd"
import { SvgIcon, ToolbarButton,useConfigContext } from "warden-layout"

const CustomBellButton=()=>{
    const {badgeCount} = useConfigContext()
    return(
        <Badge size="small" count={badgeCount} offset={[-8,4]}>
            <ToolbarButton>
                <SvgIcon width={16} height={16} style={{color:"currentcolor",verticalAlign:"middle",height:"16px",width:"16px"}} src="/svg/menu/main-bell.svg" />
            </ToolbarButton>
        </Badge>
    )
}
export default CustomBellButton