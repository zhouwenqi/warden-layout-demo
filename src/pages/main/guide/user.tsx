import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{

    const preConfigCode = `
import { WardenGlobalThis,Warden.IUser } from "warden-layout"
import { getUserInfo } from "@/request/userService"

/**
 * umi RuntimeConfig 
 * please refer to: https://umijs.org/docs/api/runtime-config
 */
export async function getInitialState():Promise<{
  spin?: JSX.Element;
  getUserInfo?: () => Promise<Warden.IUser | undefined>;
}> {
    const getUserInfo = async() => {      
       fetch ...
    }
    return {
      getUserInfo:getUserInfo  
    }
}
    `
    const preUserCode = `
WardenGlobalThis.currentUser = {
    username:"superman",
    id:"2344234",
    ...
    access:["admin:help","user:list"],
    ...
}
    `
    const preRouteCode = `
reoutes = [
    ...
    {path:"/main/help",name:"Help",component:"@/pages/help/index",access:["admin:help"]},
    {path:"/main/user/create",name:"Create",component:"@/pages/user/create",access:["user:create","user:list]},
    {path:"/main/user/list",name:"List",component:"@/pages/user/list",access:["user:list"]},
    {path:"/main/order",name:"List",component:"@/pages/order/index"},
    ...
]
    `
    const prePopoverCode = `
import UserPopoverPanel from '@/components/UserPopoverPanel'
import WardenLayout,{Warden} from 'warden-layout'

/** layout -  main */   
export default ()=>{
    const config:Warden.IConfig = {
        "theme":"dark",
        ......
        "localeEnabled":true,
    }
    return(
        <WardenLayout config={config} userPopover={<UserPopoverPanel />} />
    )
}
    `
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>当前用户</Title>
                <Paragraph>
                当前用户是指已登录的用户，正常逻辑下进入使用布局页面前用户已经登录，在此之前需要声明一个请求获取用户信息的方法<Text code>getUserInfo</Text>，采用umi的运行时配置<Text code>getInitialState</Text>将方法返回<Text code>useModel数据流</Text>钩子中(采用antd-pro类似做法)，例如：
                </Paragraph>     
                <Paragraph>
                    <Title level={5}>app.tsx</Title>                 
                    <pre>
                        {preConfigCode}
                    </pre>
                    <Text type="secondary">如果不想使用默认loading效果，可自定义一个组件放入<Text code>Spin</Text>和获取用户信息方法一并返回</Text>
                </Paragraph>
                <Title level={4}>➰为何一定要设备当前用户信息？</Title>
                <Paragraph>
                中后台项目一般都不可能匿名访问，作为项目中的布局组件，有太多地方基于用户信息交互：头像展示、资料显示、路由和菜单鉴权等。匿名访问没有意义，当然你一定要匿名组件也可以正常工作，只是用户相关的地方会显示不了。
                </Paragraph>
                <Title level={4}>🔒菜单鉴权</Title>
                <Paragraph>
                这里纯指控制菜单项显示的权限控制（控制路由权限请使用umi的<Text code>@umijs/plugin-access</Text>权限插件）：用户在配置路由和菜单时，配置好菜单项相应需要访问的权限（字段为<Text code>access:string[]</Text>，鉴定规则为全部满足），这个本身就是umi现有的功能，warden-layout读取菜单数据然后与当前用户(字段也是<Text code>access:string[]</Text>)进行校验权限，进一步控制菜单项的显示。列如：
                </Paragraph>
                <Paragraph>
                    <Title level={5}>currentUser</Title>                 
                    <pre>
                        {preUserCode}
                    </pre>
                    <Title level={5}>routes</Title>                 
                    <pre>
                        {preRouteCode}
                    </pre>
                    <Text type="secondary">那么根据上面的配值情况，当前用户的<Text code>Create</Text>菜单项将不显示。</Text>
                </Paragraph>
                <Title level={4}>〽️挂载用户弹出组件</Title>
                <Paragraph>
                在布局顶部用户头像处可以挂载一个自定义的弹出组件<Text code>Popover</Text>,该组件不是配置在config中，而是需要设置给layout组件的props中，如下：
                </Paragraph>   
                <Paragraph>
                    <Title level={5}>@/layout/xxx/index.tsx</Title>                 
                    <pre>
                        {prePopoverCode}
                    </pre>
                    <Text type="secondary">每个布局都可以挂载一个用户弹出组件，或者共用一个。</Text>
                </Paragraph>          
            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>Current user</Title>
                <Paragraph>
                The current user refers to the logged in user. Under normal logic, the user has already logged in before entering the layout page. Before that, a method<Text code>getUserInfo</Text>needs to be declared to request user information. Use umi's runtime configuration<Text code>getInitialState</Text>to return the method to the<Text code>useModel data stream</Text>hook (using a similar approach to antd pro). For example:
                </Paragraph>     
                <Paragraph>
                    <Title level={5}>app.tsx</Title>                 
                    <pre>
                        {preConfigCode}
                    </pre>
                    <Text type="secondary">If you do not want to use the default loading effect, you can customize a component to be placed in<Text code>Spin</Text>and return along with the method for obtaining user information.</Text>
                </Paragraph>
                <Title level={4}>➰Why is it necessary to have the current user information of the device?</Title>
                <Paragraph>
                It is generally not possible to access backend projects anonymously. As a layout component in the project, there are too many places based on user information interaction, such as avatar display, data display, routing, and menu authentication. Anonymous access is meaningless, of course, you must ensure that the anonymous component can work properly, but the user related information will not be displayed.
                </Paragraph>
                <Title level={4}>🔒Menu authentication</Title>
                <Paragraph>
                This purely refers to the permission control that controls the display of menu items (please use umi's<Text code>@ umijs/plugin access</Text>permission plugin to control routing permissions): When configuring routing and menus, users need to configure the corresponding permissions for menu items (field<Text code>access: string[]</Text>， The authentication rule is to satisfy all requirements, which is already an existing feature of umi. The warden layout reads menu data and verifies permissions with the current user (the field is also<Text code>access: string []</Text>) to further control the display of menu items. For example:
                </Paragraph>
                <Paragraph>
                    <Title level={5}>currentUser</Title>                 
                    <pre>
                        {preUserCode}
                    </pre>
                    <Title level={5}>routes</Title>                 
                    <pre>
                        {preRouteCode}
                    </pre>
                    <Text type="secondary">So according to the value allocation above, the current user's<Text code>Create</Text>menu item will not be displayed.</Text>
                </Paragraph>
                <Title level={4}>〽️Mount user pop-up component</Title>
                <Paragraph>
                At the top of the layout, a custom pop-up component<Text code>Popover</Text>can be mounted at the user avatar. This component is not configured in the config, but needs to be set in the props of the layout component, as follows:
                </Paragraph>   
                <Paragraph>
                    <Title level={5}>@/layout/xxx/index.tsx</Title>                 
                    <pre>
                        {prePopoverCode}
                    </pre>
                    <Text type="secondary">Each layout can mount a user pop-up component or share one.</Text>
                </Paragraph>          
            </Typography>
    )

    return(
        <Container mode="panel" hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}