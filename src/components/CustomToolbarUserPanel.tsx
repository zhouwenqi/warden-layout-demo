import { Avatar, Button , Divider, Flex, Space, Tag, theme, Popover, Typography , Tooltip } from "antd"
import {EditOutlined,EllipsisOutlined,LogoutOutlined} from '@ant-design/icons'
import {useIntl,history} from 'umi'
import { WardenGlobalThis,useConfigContext } from "warden-layout";
const { Title, Paragraph, Text } = Typography;

const {useToken} = theme;  

/**
 * 自定义toolbar用户信息(demo)
 * @param props 
 * @returns 
 */
const CustomToolbarUserPanel = (props:{popover?:JSX.Element})=>{
    const{token} = useToken()  
    const {config,collapsed} = useConfigContext()
    const user = WardenGlobalThis.currentUser
    const menuBgDark = config.menuBackgroundStyle == "black" || config.menuBackgroundStyle == "primary"
    const topDark = menuBgDark && (config.theme == "dark" || config.layoutType == "headMenu")

    const imgSize = collapsed ? 30 : 90
    let txtStyle = {fontSize:"18px",fontWeight:"500", color:token.colorTextBase}    

    if(config.compact){
        txtStyle = {...txtStyle, fontSize:"16px"}
    }
    
    // 用户信息面版   
    let avatarPanel = (
        <>        
        <Popover placement="rightTop" content={props.popover || <UserPopoverPanel />}>
            <Avatar src={user?.headImgUrl} size={imgSize} />
        </Popover>
        {collapsed ? <></> : <><label style={txtStyle}>{user?.username}</label><label style={{...txtStyle,fontSize:token.fontSize,fontWeight:"initial",opacity:"0.8"}}>{user?.createDate}</label></>}
        </>
    )

    if(!config.avatarReplaceBrand){
        avatarPanel = (<>
            <Popover placement="bottomRight" content={props.popover || <UserPopoverPanel />}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                <Avatar style={{background:token.colorBgLayout}} src={user?.headImgUrl} >
                    {user?.username}
                </Avatar>
                <label style={{color:topDark ? 'white' : token.colorTextTertiary,marginLeft:"8px"}}>{user?.username}</label>
            </div> 
        </Popover>
        </>
        )
    }
    return(
        avatarPanel
    )
}

/**
 * 头部用户信息弹出面板(demo)
 * @returns 
 */
const UserPopoverPanel=()=>{
    const{token} = useToken()
    const intl = useIntl()        
    const {setAvatarPopoverOpen} = useConfigContext()
    const user = WardenGlobalThis.currentUser
    const onClickHandler=()=>{
        setAvatarPopoverOpen(false)
    }

    const onExitHandler=()=>{
        setAvatarPopoverOpen(false)
        history.push("/login")
    }

    return(
        <div>
            <Flex>
                <Avatar src={user?.headImgUrl} shape="square" size={64} style={{background:token.colorBgLayout,marginRight:"8px"}} />
                <Space size={[0,2]} direction="vertical">
                    <Paragraph style={{margin:"0px",padding:"0px"}}>
                        <Title style={{margin:"0px"}} level={5}>{user?.username}</Title>
                    </Paragraph>
                    <Flex gap={"4px 0"} style={{margin:"4px 0"}}>
                        <Tag bordered={false} color="processing">{user?.dept}</Tag>
                        <Tag bordered={false} color="cyan">{user?.post}</Tag>
                    </Flex>  
                </Space>
            </Flex>
            <Paragraph style={{marginTop:"10px"}}>
                <ul>
                    <li><Paragraph  style={{margin:"0px",padding:"0px"}} copyable><Text strong>{user!.nickName}</Text></Paragraph></li>
                    <li><Text code>{user!.userType}</Text></li>
                    <li><label><a style={{color:token.colorTextTertiary}} href={"mailto:"+user!.email} target="_blank">{user!.email}</a></label></li>
                    <li><label>{user!.createDate}</label></li>
                </ul>  
            </Paragraph>            
            <Divider style={{margin:"14px 0px 8px 0px"}} />
            <Space direction="horizontal" split={<Divider type="vertical" />}>              
                <Tooltip title={intl.formatMessage({id:"global.button.edit"})}>
                    <Button onClick={onClickHandler} type="text"><EditOutlined /></Button>
                </Tooltip>
                <Tooltip title={intl.formatMessage({id:"global.button.exit"})}>
                    <Button onClick={onExitHandler} type="text"><LogoutOutlined /></Button>
                </Tooltip>
                <Tooltip title={intl.formatMessage({id:"global.button.more"})}>
                    <Button onClick={onClickHandler} type="text"><EllipsisOutlined /></Button>
                </Tooltip>            
            </Space>
        </div>
    )
}
export default CustomToolbarUserPanel
export {UserPopoverPanel}