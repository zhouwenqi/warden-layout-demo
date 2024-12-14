import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{

    const preToolbarCode = `
const CustomToolbarUserPanel = (props:{popover?:JSX.Element})=>{
    const{token} = useToken()  
    const {config} = useConfigContext()  

    const user = WardenGlobalThis.currentUser
    const topDark = config.menuByPrimary && (config.theme == "dark" || config.layoutType == "HeadMenu")

    return(
        <Popover placement="bottomRight" content={props.popover || <UserPopoverPanel />}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                <Avatar style={{background:token.colorBgLayout}} src={user?.headImgUrl} >
                    {user?.username}
                </Avatar>
                <label style={{color:topDark ? 'white' : token.colorTextTertiary,marginLeft:"8px"}}>{user?.username}</label>
            </div> 
        </Popover>
    )
}
    `
    const preButtonCode = `
import { Badge } from "antd"
import { SvgIcon, ToolbarButton,useConfigContext } from "warden-layout"

const CustomBellButton=()=>{
    const {badgeCount} = useConfigContext()
    return(
        <Badge count={badgeCount} offset={[-8,4]}>
            <ToolbarButton>
                <SvgIcon width={16} height={16} style={{color:"currentcolor",verticalAlign:"middle",height:"16px",width:"16px"}} src="/svg/menu/main-bell.svg" />
            </ToolbarButton>
        </Badge>
    )
}
export default CustomBellButton
    `
    const preIconsCode = `
// It receives an array and places the exit icon in front of it
const screenIcons = [        
    <SvgIcon src="/svg/menu/main-screen-in.svg" width={16} height={16} style={{width:"16px",height:"16px"}} />,
    <SvgIcon src="/svg/menu/main-screen-out.svg" width={16} height={16} style={{width:"16px",height:"16px"}} />
]

return(
    <WardenLayout 
        config={config} 
        toolbarUserPanel={<CustomToolbarUserPanel />} 
        toolbarButtons={[<GithubButton key="githubButton" />,<CustomBellButton key="bellButton" />,<CustomThemeButton />]}
        screenButtons={screenIcons}
        footer={<FooterPanel />}
    />
)
    `
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>顶部工具栏</Title>
                <Paragraph>
                布局顶部右侧可以添加一些button和自定义用户弹出菜单，如：<Text code>User</Text>，<Text code>Badge</Text>，<Text code>Locale</Text>等，可以在布局props<Text code>toolbarUserPanel</Text>中挂载进去，warden-layout提供了一些默认的组件，此工程此也有自定义demo。
                </Paragraph>     
                <Paragraph>
                    <Title level={4}>用户信息</Title>
                    默认是用<Text code>ToolbarUserPanel</Text>组件，这个组件读取<Text code>WardenGlobalThis</Text>中当前用户信息，此demo<Text code>CustomToolbarUserPanel</Text>中的自定义案例也是参考此组件重新设计。
                    <pre>
                        {preToolbarCode}
                    </pre>                    
                </Paragraph>
                <Paragraph>
                    <Title level={4}>工具栏按钮</Title>
                    工栏具可以添加多个button，用了适配风格，可以使用<Text code>ToolbarButton</Text>包裹起来，然后挂载进<Text code>toolbarButtons</Text>中。这是一个自定义带有<Text code>Badge</Text>的bell组件
                    <pre>
                        {preButtonCode}
                    </pre>
                </Paragraph>
                <Paragraph>
                    <Title level={4}>全屏切换图标</Title>
                    全屏切换图标也可以更改，注意是svg(<Text code>SvgIcon</Text>组件)，挂载在<Text code>screenIcons</Text>中，也是一个数组（2个）。
                    <pre>
                        {preButtonCode}
                    </pre>
                    然后在路由配置中在需要使用布局的路由中指向布局文件的component即可生效
                    <pre>
                        {preIconsCode}
                    </pre>
                    💡建议参考demo来开发，因为这个地方灵活性较大，因为挤乱布局。
                </Paragraph>              
            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>Top Toolbar</Title>
                <Paragraph>
                You can add some buttons and custom user pop-up menus on the top right side of the layout, such as:< Text code>User</Text>,<Text code>Badge</Text>,<Text code>Locale</Text>, etc. can be mounted in the layout props<Text code>toolbarUserPanel</Text>. The warden layout provides some default components, and there is also a custom demo for this project.
                </Paragraph>     
                <Paragraph>
                    <Title level={4}>user bar</Title>
                    The default is to use the<Text code>ToolbarUserPanel</Text>component, which reads the current user information in<Text code>WardenGlobalThis</Text>. The custom case in this demo<Text code>Custom ToolbarUserPanel</Text>is also redesigned based on this component.
                    <pre>
                        {preToolbarCode}
                    </pre>                    
                </Paragraph>
                <Paragraph>
                    <Title level={4}>toolbar button</Title>
                    Multiple buttons can be added to the toolbar tool using an adaptive style. It can be wrapped in<Text code>ToolbarButton</Text>and then mounted into<Text code>toolbarButtons</Text>. This is a custom bell component with<Text code>Badge</Text>
                    <pre>
                        {preButtonCode}
                    </pre>
                </Paragraph>
                <Paragraph>
                    <Title level={4}>Full screen switching icon</Title>
                    The full screen switching icon can also be changed, note that it is an SVG (<Text code>SvgIcon</Text>component) mounted in<Text code>screenIcons</Text>, which is also an array (2).
                    <pre>
                        {preIconsCode}
                    </pre>
                    💡It is recommended to refer to the demo for development, as this area has greater flexibility due to the cluttered layout.
                </Paragraph>              
            </Typography>
    )
    return(
        <Container mode="Panel" hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}