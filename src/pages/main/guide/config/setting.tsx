import { Container } from 'warden-layout';
import {useIntl} from 'umi';
import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default ()=>{
    const configUmiPre=`
export default defineConfig({  
  ...
  define:{
    'process.env.ENABLE_SETTING':process.env.ENABLE_SETTING
  }
});
    `
    const configEnvPre=`
ENABLE_SETTING = true
        `
    const cnTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>SettingDrawer组件</Title>
                <Paragraph>
                配置组件就是指<Text code>SettingDrawer组件</Text>组件，此组件专门开发环境用于调试配置参数时使用，开发者在开发环境调试好想要的效果后复制当前配置到代码配置中，生产（编译）环境是不会展示的，一个标准产品正常来讲不会随意动态调整布局和主题颜色的，虽然我们不鼓励这么做，但如果真有这种需求，开发者可以自行开发相关功能，例如国际化、高亮模式等，但请不要直接使用warden-layout中自带的SettingDrawer组件。如果不使用SettingDrawer调试，可以参考本demo中使用<Text code>useConfigContext</Text>钩子的方法修改配置。
                </Paragraph>   
                <Paragraph type="secondary">
                💡如果一定要使用这个组件，可以通过环境变量配置<Text code>ENABLE_SETTING</Text>= true来开启它。
                </Paragraph>
                <Paragraph>
                    umi配置(<Text code>config.ts</Text>|<Text code>.umirc.ts</Text>)
                    <pre>
                        {configUmiPre}
                    </pre>
                    环境变量(<Text code>.env</Text>)
                    <pre>
                        {configEnvPre}
                    </pre>
                    开发环境不用配置。
                </Paragraph>

            </Typography>
    )
    const enTypography = (
        <Typography style={{margin:"0px"}}>
                <Title style={{marginTop:"0px"}} level={2}>SettingDrawer component</Title>
                <Paragraph>
                The configuration component refers to the<Text code>SettingDrawer</Text>component, which is specifically designed for debugging configuration parameters in the development environment. After debugging the desired effect in the development environment, developers copy the current configuration into the code configuration. The production (compilation) environment will not display it. A standard product normally does not dynamically adjust the layout and theme color at will. Although we do not encourage this, if there is such a need, developers can develop related functions on their own, such as internationalization, highlighting mode, etc., but please do not directly use the SettingDrawer component that comes with the warden layout. If debugging is not done using SettingDrawer, developers can refer to the method of using the<Text code>useConfig Context</Text>hook in this demo to modify the configuration,
                </Paragraph>   
                <Paragraph type="secondary">
                💡Every time the configuration is set, it will be saved to storage. If debugging is not done using SettingDrawer, developers can refer to the method of using the<Text code>useConfig Context</Text>hook in this demo to modify the configuration
                </Paragraph>  
                <Paragraph>
                    umi configuration(<Text code>config.ts</Text>|<Text code>.umirc.ts</Text>)
                    <pre>
                        {configUmiPre}
                    </pre>
                    environment variable(<Text code>.env</Text>)
                    <pre>
                        {configEnvPre}
                    </pre>
                </Paragraph>
                The development environment does not require configuration.
            </Typography>
    )

    return(
        <Container mode="panel" hideTitle={true}>
            {useIntl().locale == "zh-CN" ? cnTypography : enTypography}
        </Container>
    )
}