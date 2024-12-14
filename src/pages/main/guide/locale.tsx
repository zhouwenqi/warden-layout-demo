import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{

    const preCnCode = `
'menu.':"首页",
'menu.docs':"文档",
'menu.main':"入口",
'menu.main.switch': '切换路由',
'menu.main.discover': '发现',
'menu.main.discover.welcome': '欢迎',
'menu.main.discover.introduce': '介绍',
......
    `
    const preEnCode = `
'menu.':"Home",
'menu.docs':"Docs",

'menu.main':"Main", 
'menu.main.switch': 'Switch',
'menu.main.discover': 'Discover',
'menu.main.discover.welcome': 'Welcome',
'menu.main.discover.introduce': 'Introduce',
......
    `
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>国际化</Title>
                <Paragraph>
                warden-layout采用umi的国际化钩子对布局进行自动国际化，只需要配置好相应的语言就好，可参考本demo中的locale配置结构即可，并且配置结构采用类似umi和antd-pro类似的通用做法。
                </Paragraph>   
                <Paragraph>
                    通常国际化配置放在<Text code>src/locale/*</Text>下，然后用语言和模块再细进行一步细分，菜单的内容放在menu(.ts|tsx)中，配置项key都以<Text code>menu.</Text>开头,后面再跟着用路由或菜单key进行切割，列如：<Text code>/user/order</Text>路由或菜单key对应的locale中的key就是 <Text code>menu.user.order</Text>，以此类推。例如：
                </Paragraph>                   
                <Paragraph>
                    <Title level={5}>zh-CN.ts</Title>                 
                    <pre>
                        {preCnCode}
                    </pre>
                    <Title level={5}>en-US.ts</Title>                 
                    <pre>
                        {preEnCode}
                    </pre>
                </Paragraph>  
                <Title style={{marginTop:"0px"}} level={4}>💡提示</Title>           
                <Paragraph>
                    <ul>
                        <li>根路径菜单(<Text code>/</Text>)的国际化key就是<Text code>menu.</Text>，注意后面有个. </li>
                        <li>关闭菜单国际化：将布局配置项<Text code>localeEnabled</Text> = false 即可，这只对布局有效。</li>
                    </ul>
                </Paragraph>
            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>Locale</Title>
                <Paragraph>
                The warden layout uses the internationalization hook of umi to automatically internationalize the layout, and only needs to configure the corresponding language. You can refer to the local configuration structure in this demo, and the configuration structure adopts a common approach similar to umi and antd pro.
                </Paragraph>   
                <Paragraph>
                Usually, internationalization configuration is placed under<Text code>src/scale/*</Text>, and then further subdivided by language and module. The menu content is placed in menu (. ts | tsx), and the configuration item keys are all start with <Text code>menu</Text>, followed by cutting with routing or menu key, for example:The key in the local area corresponding to the routing or menu key in <Text code>/user/order</Text>is<Text code>menu. user. order</Text>, and so on. For example:
                </Paragraph>    
                <Paragraph>
                    <Title level={5}>zh-CN.ts</Title>                 
                    <pre>
                        {preCnCode}
                    </pre>
                    <Title level={5}>en-US.ts</Title>                 
                    <pre>
                        {preEnCode}
                    </pre>
                </Paragraph>   
                <Title style={{marginTop:"0px"}} level={4}>💡Prompt</Title>           
                <Paragraph>
                    <ul>
                        <li>The internationalization key for the root path menu (<Text code>/</Text>) is the<Text code>menu</ Text>， Pay attention to the one behind</ li>
                        <li>Turn off menu internationalization: Set the layout configuration option<Text code>localeEnable</Text>to false, which is only valid for layouts</ li>
                    </ul>
                </Paragraph>
            </Typography>
    )

    return(
        <Container mode="Panel"  hideTitle={true}>
        {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
    </Container>
    )
}