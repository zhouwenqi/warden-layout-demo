import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{
    const layoutAttrPre=`
// Full screen switch icon, it receives an array, and the exit icon is placed in front of it
const screenIcons:JSX.Element[] = [        
    <SvgIcon src="/svg/menu/main-screen-in.svg" style={{width:"16px",height:"16px"}} />,
    <SvgIcon src="/svg/menu/main-screen-out.svg" style={{width:"16px",height:"16px"}} />
]

return(
    <WardenLayout 
        config={config}
        logoPopover={<CustomLogoPopoverPanel />}
        toolbarUserPanel={<CustomToolbarUserPanel />} 
        toolbarButtons={[
        <GithubButton key="githubButton" />,
        <CustomBellButton key="bellButton" />,
        <CustomThemeButton key="themeButton" />]}
        screenIcons={screenIcons}
        footer={<FooterPanel />}
        />
)
    `

    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>布局属性组件</Title>
                <Paragraph>
                需要挂载在布局中的组件，可以通过布局属性挂载进去，例如：<Text code>Toolbar</Text>工具样，还有与用户相关的弹出面版，通常是一些全局组件。
                </Paragraph>
                <Paragraph>
                    使用方法：
                    <pre>
                        {layoutAttrPre}
                    </pre>
                </Paragraph>
                <Title level={4}>具体属性列表</Title>
                <Paragraph>
                    <ul>
                    <li>footer<Text code type="secondary">JSX.Element</Text>- 全局容器页脚</li>
                    <li>toolbarButtons<Text code type="secondary">JSX.Element[]</Text>- 工具栏按钮</li>
                    <li>avatarPopover<Text code type="secondary">JSX.Element</Text>- 用户形象弹出面版</li>
                    <li>logoPopover<Text code type="secondary">JSX.Element</Text>- Logo悬停弹出面版</li>             
                    <li>leftExpandPanel<Text code type="secondary">JSX.Element</Text> - 左侧栏底部扩展面版</li>
                    <li>screenIcons<Text code type="secondary">JSX.Element[]</Text> - 全屏切换图标</li>                    
                    <li>wardenMenuData<Text code type="secondary">IMenuData[] - 菜单数据</Text></li>
                    </ul>
                </Paragraph>
                <Paragraph type="secondary">
                💡请尽量使用ant组件设计面版，它会自动响应主题模式，例如dark和light的响应
                </Paragraph>
            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>Layout attribute component</Title>
                <Paragraph>
                Components that need to be mounted in the layout can be mounted through layout properties, such as:< Text code>Toolbar</Text>tool samples, as well as user related pop-up panels, typically consisting of global components.
                </Paragraph>
                <Paragraph>
                    usage method:
                    <pre>
                        {layoutAttrPre}
                    </pre>
                </Paragraph>
                <Title level={4}>Specific attribute list</Title>
                <Paragraph>
                    <ul>
                    <li>footer<Text code type="secondary">JSX.Element</Text>- Global container footer</li>
                    <li>toolbarButtons<Text code type="secondary">JSX.Element[]</Text>- toolbar button</li>
                    <li>avatarPopover<Text code type="secondary">JSX.Element</Text>- User information pop-up page</li>
                    <li>logoPopover<Text code type="secondary">JSX.Element</Text>- Logo hover pop-up version</li>             
                    <li>leftExpandPanel<Text code type="secondary">JSX.Element</Text> - Bottom expansion panel on the left side column</li>
                    <li>screenIcons<Text code type="secondary">JSX.Element[]</Text> - Full screen switching icon</li>                    
                    <li>wardenMenuData<Text code type="secondary">IMenuData[] - Menu data</Text></li>
                    </ul>
                </Paragraph>
                <Paragraph type="secondary">
                💡Please try to use the ant component to design the panel, as it will automatically respond to theme patterns such as dark and light
                </Paragraph>
            </Typography>
    )

    return(
        <Container mode="panel" hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}