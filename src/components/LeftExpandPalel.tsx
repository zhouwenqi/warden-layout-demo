import {theme,Space} from 'antd'
import {useIntl} from 'umi'
import {FlagOutlined,FileUnknownOutlined} from '@ant-design/icons'

const {useToken}=theme
/**
 * 左侧底部扩展面版
 * @returns 
 */
const LeftExpandPanel=()=>{
    const {token} = useToken()
    const intl = useIntl()
    return(
        <ul style={{padding:"0px",margin:"0px",listStyle:"none"}}>
           
            <li><Space><FileUnknownOutlined /><a href="#" style={{color:token.colorTextLabel}}>{intl.formatMessage({id:"leftExpand.link.help"})}</a></Space></li>
            <li><label style={{color:token.colorTextQuaternary}}>Version：v1.3.7</label></li>
        </ul>
    )
}
export default LeftExpandPanel