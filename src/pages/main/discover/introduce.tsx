import { Divider, Typography } from 'antd';
import { Container } from 'warden-layout';
import {useIntl} from 'umi';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{
    const intl = useIntl()
    const cnTypography = (
        <Typography>
            <Title style={{marginTop:"0px"}}>介绍</Title>
            <Paragraph>
                warden-layout是一款基于antd和umi开发的强大且灵活的布局组件，支持多种布局和属性交叉组合出美观又个性的UI中后台前端界面，同时支持一个项目中配置多种不同布局的方案，为开发者提供了一个高效、易用的布局工具。无论是对于新手开发者还是资深开发者来说，这款组件都能够成为他们构建前端项目的得力助手。本项目集许多年的项目案例积累打造，现在完全免费开源，欢迎下载使用和反馈，同时期待有供献精神的共同爱好者一起完善它，为开源世界增砖添瓦。
            </Paragraph>
            <Paragraph>
                和warden-antd的区别：<Text code>wardne-layout</Text>是一个布局组件，而<Text code>warden-antd</Text>是一套后台管理前端脚手脚， 你现在所看到的只是基于warden-layout布局组件的demo，如果你想了解warden-antd脚手架可移步 <a href="https://github.com/zhouwenqi/warden-antd" target="_blank">https://github.com/zhouwenqi/warden-antd</a>，
                该项目也是我早期开发的开源产品，但是基于antd 4.x，而warden-layout是基于 antd 5.10+
            </Paragraph>
            <Title level={4}>为何基于umi?</Title>
            <Paragraph>
                umi是一款国内非常优秀的前端应用框架，也是蚂蚁家族的项目，使用它构建<Text code>antd</Text>项目是绝佳首选，warden-layout主要基于umi提供的路由功能进行扩展开发。             
            </Paragraph>
            <Title level={2}>功能及特点</Title>
            <Paragraph>
            wardny-layout初忠专注于解决一个问题 ——— 页面布局，尽可能的不干扰基础框架(<Text code>Antd</Text> and <Text code>Umi</Text>), 利用框架自带路由规则，拦截umi路由分解出菜单数据，设计出轻量又丰富的布局组件，不干涉主页面的业务逻辑，无需重排路由和菜单逻辑，组件会在原有路由结构上进行增强。
            主要特点如下：
            </Paragraph>
            <Paragraph>
            <ul>
                <li>同一项目支持多种布局</li>
                <li>丰富的组件属性交叉配置效果</li>
                <li>支持自定义svg菜单和logo图标</li>
                <li>提供可选的统一风格的容器组件</li>
                <li>配置方便，开箱即用</li>
            </ul>
            </Paragraph>
            <Paragraph type="secondary">
                <blockquote>这是一个使用warden-layout打造的demo，不是技术文档。demo下载：<a href="https://github.com/zhouwenqi/warden-layout-demo">https://github.com/zhouwenqi/warden-layout-demo</a></blockquote>
            </Paragraph>
        </Typography>
    )
    const enTypography = (
        <Typography>
            <Title style={{marginTop:"0px"}}>Introduce</Title>
            <Paragraph>
            Warden layout is a powerful and flexible layout component developed based on antd and umi. It supports the cross combination of multiple layouts and attributes to create beautiful and personalized UI front-end and back-end interfaces. It also supports configuring multiple different layout schemes in a project, providing developers with an efficient and easy-to-use layout tool. This component can be a powerful assistant for both novice and experienced developers to build front-end projects. This project collection is built on years of accumulated project cases and is now completely free and open source. We welcome downloads, usage, and feedback. At the same time, we look forward to collaborating with like-minded enthusiasts to improve it and contribute to the open source world.
            </Paragraph>
            <Paragraph>
            Difference from warden antd:< Text code>warden layout</Text>is a layout component, while<Text code>warden antd</Text>is a set of backend management frontend scaffolding. What you are seeing now is only a demo based on the warden layout component. If you want to learn more about the warden antd scaffolding, you can move it to<a href="https://github.com/zhouwenqi/warden-antd" target="_blank"> https://github.com/zhouwenqi/warden-antd </a>，
This project is also an open-source product that I developed early on, but it is based on antd 4. x, while warden layout is based on antd 5.10+
            </Paragraph>
            <Title level={4}>Why based on umi?</Title>
            <Paragraph>
            Umi is a very excellent front-end application framework in China and also a project of Ant Family. Using it to build<Text code>antd</Text>projects is an excellent choice, and warden layout is mainly developed based on the routing function provided by Umi for extension.            
            </Paragraph>
            <Title level={2}>Function and characteristic</Title>
            <Paragraph>
            Wardny layout Chuzhong focuses on solving a problem - page layout that minimizes interference with the basic framework (<Text code>Antd</Text>and<Text code>Umi</Text>), By utilizing the framework's built-in routing rules, intercepting umi routing to decompose menu data, and designing lightweight and rich layout components that do not interfere with the main page's business logic, there is no need to rearrange routing and menu logic. The components will be enhanced on the original routing structure.
The main features are as follows:
            </Paragraph>
            <Paragraph>
            <ul>
                <li>The same project supports multiple layouts</li>
                <li>Rich component attribute cross configuration effect</li>
                <li>Support custom SVG menus and logo icons</li>
                <li>Provide optional unified style container components</li>
                <li>Easy to configure, ready to use immediately upon receipt</li>
            </ul>
            </Paragraph>
            <Paragraph type="secondary">
                <blockquote>This is a demo created using warden layout, not a technical document. Demo download:<a href="https://github.com/zhouwenqi/warden-layout-demo">https://github.com/zhouwenqi/warden-layout-demo</a></blockquote>
            </Paragraph>
        </Typography>
    )
    return(
        <>
        <Container mode="Box" hideTitle={true} hideBreadcrumb={true}>
            {intl.locale == "zh-CN" ? cnTypography : enTypography}            
            <Divider />    
        </Container>
        </>
    )
}