import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{

    const preDefaultCode = `
import WardenLayout,{Warden} from 'warden-layout'

/** index - layout */    
export default ()=>{
    const config:Warden.IConfig = {
        "theme":"light",
        "systemTheme":true,
        "layoutType":"LeftMenu",
        ...
    }
    return(
        <WardenLayout config={config} />
    )
}
    `
    const preConfigCode = `
// @/layouts/booker/index.tsx

export default ()=>{
    const config:Warden.IConfig = {
        "theme":"light",
        "systemTheme":true,
        "layoutType":"LeftMenu",
        ...
    }
    return(
        <WardenLayout config={config} />
    )
}

-------------

// @/layouts/business/index.tsx

export default ()=>{
    const config:Warden.IConfig = {
        "theme":"dark",
        "systemTheme":false,
        "layoutType":"TopMenu",
        "primaryColor":"#ff6600",
        ...
    }
    return(
        <WardenLayout config={config} />
    )
}
    `
    const preRouteCode = `
// routes.tsx

export default [
    { path: "/", component: "index", name:"Home",  },
    { path: "/docs", component: "docs", name:"Docs" },  
    { path: "/booker", name:"Booker", component:"@/layouts/booker", routes:[
        { path: "/booker/blog", name:"Blog", component:"@/pages/booker/blog" },
        { path: "/booker/file", name:"File", component:"@/pages/booker/file" },
    ]},
    { path: "/business", name:"Business",component:"@/layouts/business", routes:[
        { path: "/business/dept", name:"Dept", component:"@/pages/business/Dept" },
        { path: "/business/project", name:"Project", component:"@/pages/business/project" },
    ]}
]
    `
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>布局的使用</Title>
                <Paragraph>
                非常简单，umi原本会默认采用<Text code>@/layouts/index.(tsx|tx)</Text>布局，直接在此页面中使用<Text code>warden-layout</Text>就行了，如果你的项目需要针对不同的路由配置不同的布局，就在layouts目录下创建子目录，并在路由布局中指定component即可。
                </Paragraph>     
                <Paragraph>
                    <Title level={4}>默认布局</Title>
                    不用改动路由配置文件，直接修改@/layouts/index.tsx
                    <pre>
                        {preDefaultCode}
                    </pre>
                </Paragraph>
                <Paragraph>
                    <Title level={4}>多个布局</Title>
                    需要先删除默认配置文件<Text code type="danger">@/layouts/index.(tsx|tx)</Text>，然后在layouts目录下创建子目录或组件，直接创建文件的话不能用index.了。可以创建多套布局，布局的配置方向与默认布局一样，只是额外需要在路由配置中指向。
                </Paragraph>
                <Paragraph>
                    如果想给<Text code>/booker</Text>和<Text code>/business</Text>配置不同的，先创建@/layouts/booker/index.tsx和@/layouts/business/index.tsx布局文件。
                    <pre>
                        {preConfigCode}
                    </pre>
                    然后在路由配置中在需要使用布局的路由中指向布局文件的component即可生效
                    <pre>
                        {preRouteCode}
                    </pre>
                    💡强烈建议只给一级路由使用布局
                </Paragraph>     
            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>The use of layout</Title>
                <Paragraph>
                Very simple, umi originally used<Text code>@/layouts/index(tsx | tx)</Text> by default layout, simply use<Text code>warden layout</Text>on this page. If your project needs to configure different layouts for different routes, create subdirectories in the layouts directory and specify components in the routing layout.
                </Paragraph>     
                <Paragraph>
                    <Title level={4}>Default Layout</Title>
                    No need to modify the routing configuration file, just modify @/layouts/indexes. tsx
                    <pre>
                        {preDefaultCode}
                    </pre>
                </Paragraph>
                <Paragraph>
                    <Title level={4}>Multiple layouts</Title>
                    The default configuration file<Text code type="danger">@/layouts/index (tsx|tx) needs to be deleted first</Text>， Then create subdirectories or components in the layouts directory. If you create files directly, you cannot use index That's it. Multiple layouts can be created, and the configuration direction of the layout is the same as the default layout, except that it needs to be pointed to in the routing configuration.
                </Paragraph>
                <Paragraph>
                    If the configuration of<Text code>/booker</Text>and<Text code>/business</Text>is inconsistent, please use the layout files @/layouts/booker/index.tsx and @/layout/business/index. tsx
                    <pre>
                        {preConfigCode}
                    </pre>
                    Then in the routing configuration, point to the component of the layout file in the route that requires layout to take effect
                    <pre>
                        {preRouteCode}
                    </pre>
                    💡Strongly recommend using layout only for first level routing
                </Paragraph>              
            </Typography>
    )
    return(
        <Container mode="panel" hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}