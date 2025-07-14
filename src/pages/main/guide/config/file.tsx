import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{
    var codeConfig = `const config:Warden.IConfig = {
    "theme":"dark",
    "systemTheme":true,
    "layoutType":"HeadMenu",
    "primaryColor":"#409f46",
    "compact":false,
    ......
}
return(
    <WardenLayout config={config} />
)`
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
            <Title style={{marginTop:"0px"}} level={2}>配置文件</Title>
            <Paragraph>
            布局配置基于<Text code>Warden.IConfig</Text>类型，默认使用<Text code>context.defaultConfig</Text>，调用setConfig方法（或用SettingDarwer组件手动设置）后，配置会保存在storage中，之后将直接从storage读取。配置示例：
            </Paragraph>
            <Paragraph>
                <pre>
                {codeConfig}
                </pre>
            </Paragraph>
            <Title level={4}>配置项说明</Title>
            <Paragraph>
                <ul>
                    <li>theme<Text code type="secondary">string</Text> - 明暗模式</li>
                    <li>systemTheme<Text code type="secondary">boolean</Text> - theme是否跟随系统</li>
                    <li>layoutType<Text code type="secondary">LayoutType</Text> - 布局类型</li>
                    <li>primaryColor<Text code type="secondary">string</Text> - 主题颜色</li>   
                    <li>menuSkin<Text code type="secondary">string</Text> - 主题皮肤</li>
                    <li>menuTransparent<Text code type="secondary">boolean</Text> - 菜单背景透明</li>
                    <li>backgroundBlur<Text code type="secondary">boolean</Text> - 菜单背景模糊</li>
                    <li>containerTransparent<Text code type="secondary">boolean</Text> - 容器组件透明</li>
                    <li>menuByBackground<Text code type="secondary">boolean</Text> - 容器跟随菜单效果</li>
                    <li>compact<Text code type="secondary">boolean</Text> - 紧凑模式</li>                    
                    <li>menuByPrimary<Text code type="secondary">boolean</Text> - 隐藏线条</li>
                    <li>menuSplit<Text code type="secondary">boolean</Text> - 分隔菜单</li>
                    <li>leftEmptyHidden<Text code type="secondary">boolean</Text> - 左侧菜单为空隐藏</li>
                    <li>subItemMenuTransparent<Text code type="secondary">boolean</Text> - 子菜单背景透明</li>
                    <li>leftMenuInline<Text code type="secondary">boolean</Text> - 左侧菜单内联模式</li>
                    <li>rootItemMenuGroup<Text code type="secondary">boolean</Text> - 左侧菜单一级分组</li>
                    <li>hideFooter<Text code type="secondary">boolean</Text> - 全局隐藏页脚</li>
                    <li>hideBreadcrumb<Text code type="secondary">boolean</Text> - 全局隐藏面包屑</li>
                    <li>hideTitleBar<Text code type="secondary">boolean</Text> - 全局隐藏标题栏</li>   
                    <li>brandLogo<Text code type="secondary">string</Text> - 品牌Logo</li>
                    <li>brandTitle<Text code type="secondary">string</Text> - 品牌标题</li> 
                    <li>localeEnabled<Text code type="secondary">boolean</Text> - 启用国际化(布局)</li>                    
                    <li>logoNavigateRoute<Text code type="secondary">string</Text> - 点击logo导航路由</li>   
                    <li>avatarNavigateRoute<Text code type="secondary">string</Text> - 形象导航路由</li> 
                    <li>avatarReplaceBrand<Text code type="secondary">boolean</Text> - 形象替换品牌Logo</li>                    
                    <li>menuIconVariant<Text code type="secondary">boolean | string[]</Text> - 菜单图标启用激活状态</li>                               
                </ul>
            </Paragraph>
            <Title level={4}>💡提示</Title>
            <Paragraph>
            <Text type="secondary">一直配置信息存入storage，下次将从storage读取，所以此时开发过程中在代码中修改配置是无效的，开发过程中建议使用SettingDrawer进行调整，然后复制到代码配置中，这是推荐做法，另外有3种办法也可以解决：</Text>
                <blockquote>                        
                    <ol>
                        <li>不触发setConfig事件：不使用<Text code>SettingDrawer</Text>不做任何保存</li>
                        <li>删除storage信息：手动或用代码逻辑删除</li>
                        <li>修改配置后执行钩子setConfig保存配置信息</li>                            
                    </ol>
                </blockquote>
            </Paragraph>
            <Text type="secondary">menuIconVariant启用后图标名称默认后缀会加上<Text code>Filled</Text>和<Text code>Outlined</Text>，或者传下自定义数组<Text code>['line','solid']</Text></Text>
        </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
            <Title style={{marginTop:"0px"}} level={2}>Configuration file</Title>
            <Paragraph>
            Layout configuration is based on <Text code>Warden.IConfig</Text>type, default to<Text code>context. defaultConfig</Text>. After calling the setConfig method (or manually setting it with the SettingDarwer component), the configuration will be saved in storage and then directly read from storage. Configuration example:
            </Paragraph>
            <Paragraph>
                <pre>
                {codeConfig}
                </pre>
            </Paragraph>
            <Title level={4}>Configuration Item Description</Title>
            <Paragraph>
                <ul>
                <li>Theme<Text code type="secondary">string</Text>- Light and Shadow Mode</li>
                <li>SystemTheme<Text code type="secondary">boolean</Text>- Does the theme follow the system</li>
                <li>LayoutType<Text code type="secondary">LayoutType</Text>- Layout type</li>
                <li>Primary Color<Text code type="secondary">string</Text>- Theme color</li>
                <li>menuSkin<Text code type="secondary">string</Text> - Theme skin</li>
                <li>menuTransparent<Text code type="secondary">boolean</Text> - Menu background transparent</li>
                <li>backgroundBlur<Text code type="secondary">boolean</Text> - Menu background blur</li>
                <li>containerTransparent<Text code type="secondary">boolean</Text> - Container transparent</li>
                <li>menuByBackground<Text code type="secondary">boolean</Text> - Container follow menu effect</li>
                <li>Compact<Text code type="secondary">boolean</Text>- Compact mode</li>
                <li>MenuPrePrimary<Text code type="secondary">boolean</Text>- Hide lines</li>
                <li>MenuSplit<Text code type="secondary">boolean</Text>- Separate menu</li>
                <li>LeftEmptyHidden<Text code type="secondary">boolean</Text>- The left menu is empty and hidden</li>
                <li>SubitemMenuTransparent<Text code type="secondary">boolean</Text>- Submenu background transparent</li>
                <li>LeftMenuInline<Text code type="secondary">boolean</Text>- Left menu inline mode</li>
                <li>RootItemMenuGroup<Text code type="secondary">boolean</Text>- Left menu first level grouping</li>
                <li>HideFooter<Text code type="secondary">boolean</Text>- Global hidden footer</li>
                <li>HideBreadcrumb<Text code type="secondary">boolean</Text>- Global hidden breadcrumbs</li>
                <li>HideTitleBar<Text code type="secondary">boolean</Text>- Hide the title bar globally</li>
                <li>BrandLogo<Text code type="secondary">string</Text>- Brand Logo</li>
                <li>BrandTitle<Text code type="secondary">string</Text>- Brand Title</li>     
                <li>LocaleEnable<Text code type="secondary">boolean</Text>- Enable internationalization (layout)</li>                    
                <li>LogoNavigateRoute<Text code type="secondary">string</Text>- Click on the logo to navigate the route</li>
                <li>avatarNavigateRoute<Text code type="secondary">string</Text> - Click on the avatar navigate the route</li> 
                <li>avatarReplaceBrand<Text code type="secondary">boolean</Text> - Avatar replacement brand logo</li>                    
                <li>menuIconVariant<Text code type="secondary">boolean | string[]</Text> - Enable menu icon activation status</li>            
                </ul>
            </Paragraph>
            <Title level={4}>💡prompt</Title>
            <Paragraph>
            <Text type="secondary">Continuously storing configuration information in storage will result in it being read from storage next time. Therefore, modifying the configuration in the code during the development process is ineffective. It is recommended to use SettingDrawer to make adjustments and then copy it to the code configuration. This is the recommended approach, and there are three other methods to solve this problem:</Text>
                <blockquote>                        
                    <ol>
                        <li>Do not trigger setConfig event: Do not use<Text code>SettingDrawer</Text>, do not save anything</li>
                        <li>Delete storage information: manually or using code logic to delete</li>
                        <li>After modifying the configuration, execute the hook setConfig to save the configuration information</li>                         
                    </ol>
                </blockquote>
            <Text type="secondary">When menuIconVariant is enabled, the default suffix for icon names will be added with<Text code>Filled</Text>and<Text code>Outlined</Text>, or a custom array<Text code>['line ',' solid ']</Text></Text>
            </Paragraph>
        </Typography>
    )
    return(
        <Container mode="box" hideBreadcrumb={true} hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}