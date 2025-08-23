import { SvgIcon, ToolbarButton } from "warden-layout"

const GithubButton=()=>{
    const onClickHandler=()=>{
        location.href="https://github.com/zhouwenqi/warden-layout"
    }
    return(
        <ToolbarButton onClick={onClickHandler}>
            <SvgIcon width={16} height={16} style={{color:"currentColor",verticalAlign:"middle",height:"16px",width:"16px"}} src="/svg/menu/main-github.svg" />
        </ToolbarButton>    
    )
}
export default GithubButton