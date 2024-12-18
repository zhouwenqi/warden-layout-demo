import {theme} from 'antd'
const {useToken}=theme
/**
 * 左侧底部扩展面版
 * @returns 
 */
const LeftExpandPanel=()=>{
    const {token} = useToken()
    return(
        <ul style={{padding:"0px",margin:"0px",listStyle:"none"}}>
            <li><a href="#">Help</a></li>
            <li><a href="#">Docs</a></li>
            <li><label style={{color:token.colorTextTertiary}}>Version：v1.3.7</label></li>
        </ul>
    )
}
export default LeftExpandPanel