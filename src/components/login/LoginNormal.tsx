import styled from "styled-components";
import styles from "./LoginNormal.less";
import { Carousel,Flex, Form, Input, Button, Divider,theme } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight } from "./LoginElements";
import { SvgIcon } from "warden-layout";
const {useToken} = theme

const LoginNormal=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const {token} = useToken()
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }
    console.log(token.colorPrimary)


    let panel = (                
                <>
                <MaskBox style={{background:token.colorBgLayout}}>
                </MaskBox>
                <div className={styles.loginNormalBox}>
                <div className={styles.loginNormalTitle}>
                    <SvgIcon src="/images/logo2.svg" width="100" height="100" style={{color:token.colorPrimary}} />
                    <h2 style={{color:token.colorText}}>{intl.formatMessage({id:"pages.login.title"})}</h2>
                    <h3 style={{color:token.colorTextSecondary}}>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                </div>
                <div className={styles.formNormalBox} style={{background:token.colorBgContainer}}>                      
                    <Form                                              
                        name="basic" 
                        onFinish={onFinishHandler}                      
                        initialValues={{ remember: true }} >
                        <Form.Item
                            name="username"                                                                
                            rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.username"}) }]}>
                            <Input placeholder={intl.formatMessage({id:"pages.login.placeholder.username"})} prefix={<Icon icon="local:user-outlined" style={{width:"16px",height:"16px"}} />} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.password"}) }]}>
                            <Input.Password placeholder={intl.formatMessage({id:"pages.login.placeholder.password"})} prefix={<Icon icon="local:lock-closed-outlined" style={{width:"16px",height:"16px"}} />} />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify="space-between">
                                <Form.Item
                                    name="captcha"  
                                    style={{"marginRight":"8px"}}                                                              
                                    rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.captcha"}) }]}>
                                    <Input maxLength={6} placeholder={intl.formatMessage({id:"pages.login.placeholder.captcha"})} prefix={<Icon icon="local:variable" style={{width:"16px",height:"16px"}} />} />
                                </Form.Item>
                                <img onClick={props.onRefreshCaptcha} src={props.captchaUrl} alt="captcha" style={{width:"90px",height:"30px",cursor:"pointer"}} />
                            </Flex>
                        </Form.Item>
                    
                        <Form.Item>
                            <Button type="primary" loading={props.loading} block htmlType="submit">
                            {intl.formatMessage({id:"pages.login.button.login"})}
                            </Button>
                            
                            <Divider plain>{intl.formatMessage({id:"app.global.or"})}</Divider>
                            <Button block onClick={props.onRegister} disabled={props.loading}>
                            {intl.formatMessage({id:"pages.login.button.register"})}
                            </Button>                                
                        </Form.Item>
                    </Form>
                </div>
                <CopyRight />
            </div>
            </>
        )
    
    if(props.layoutType=="cardColumn"){
        panel = (              
                <>
                <MaskBox style={{background:token.colorBgLayout}}>
                </MaskBox>
                <div className={styles.loginCardBox} style={{background:token.colorBgContainer}}>
                
                <div className={styles.formCardBox}>
                    <div className={styles.formLeft}>
                        <Carousel fade={true} effect="fade" dotPosition="bottom" autoplay={true}>
                            <AdBoxGradient $color2={token.colorPrimaryHover} $color1={token.colorPrimaryActive}>
                                <img src="/images/login/normal_frame_1.png" alt="1" />
                            </AdBoxGradient>
                            <AdBoxGradient $color2={token.colorPrimaryHover} $color1={token.colorPrimaryActive}>
                                <img src="/images/login/normal_frame_2.png" alt="2" /> 
                            </AdBoxGradient>
                            <AdBoxSolid $color={token.colorPrimaryHover}>
                                <img src="/images/login/normal_frame_3.png" alt="2" /> 
                            </AdBoxSolid>
                        </Carousel>
                    </div>
                    <div className={styles.formRight}>    
                        <div className={styles.loginCardTitle}>
                            <SvgIcon src="/images/logo2.svg" width="100" height="100" style={{color:token.colorPrimary}} />
                            <h2 style={{color:token.colorText}}>{intl.formatMessage({id:"pages.login.title"})}</h2>
                            <h3 style={{color:token.colorTextSecondary}}>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                        </div>                    
                        <Form
                            className={styles.loginForm}                                                
                            name="basic"    
                            
                            onFinish={onFinishHandler}                      
                            initialValues={{ remember: true }} >
                            <Form.Item
                                name="username"                                                                
                                rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.username"}) }]}>
                                <Input placeholder={intl.formatMessage({id:"pages.login.placeholder.username"})} prefix={<Icon icon="local:user-outlined" style={{width:"16px",height:"16px"}} />} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.password"}) }]}>
                                <Input.Password placeholder={intl.formatMessage({id:"pages.login.placeholder.password"})} prefix={<Icon icon="local:lock-closed-outlined" style={{width:"16px",height:"16px"}} />} />
                            </Form.Item>
                            <Form.Item>
                                <Flex justify="space-between">
                                    <Form.Item
                                        name="captcha"  
                                        style={{"marginRight":"8px"}}                                                              
                                        rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.captcha"}) }]}>
                                        <Input maxLength={6} placeholder={intl.formatMessage({id:"pages.login.placeholder.captcha"})} prefix={<Icon icon="local:variable" style={{width:"16px",height:"16px"}} />} />
                                    </Form.Item>
                                    <img onClick={props.onRefreshCaptcha} src={props.captchaUrl} alt="captcha" style={{width:"90px",height:"30px",cursor:"pointer"}} />
                                </Flex>
                            </Form.Item>
                        
                            <Form.Item>
                                <Button type="primary" loading={props.loading} block htmlType="submit">
                                {intl.formatMessage({id:"pages.login.button.login"})}
                                </Button>
                                
                                <Divider plain>{intl.formatMessage({id:"app.global.or"})}</Divider>
                                <Button block onClick={props.onRegister} disabled={props.loading}>
                                {intl.formatMessage({id:"pages.login.button.register"})}
                                </Button>                                
                            </Form.Item>
                        </Form>
                        <CopyRight />
                    </div>
                </div>                
            </div>
            </>)
    } else if(props.layoutType=="fullColumn"){
            panel = (<MaskBox style={{background:token.colorBgLayout}}> 
                    <FullLeftRight />  
                    <FullLayoutBottom>
                        <label style={{fontSize:"60px",color:"white"}}>Rich layout styles</label><br />
                        <label style={{fontSize:"36px",color:"white",opacity:"0.7",lineHeight:"40px"}}>Multi tenant</label><br />
                        <label style={{fontSize:"36px",color:"white",opacity:"0.7",lineHeight:"40px"}}>SpringCloud + React</label><br />
                    </FullLayoutBottom>     
                    <>
                    <div className={styles.fullBox}>
                        <FillLeftBox className={styles.fullLeft} $color1={token.colorPrimaryHover} $color2={token.colorPrimary}>                        
                            <div style={{padding:"40px"}}>
                                <label style={{fontSize:"96px",lineHeight:"100px"}}>320+</label><br />
                                <label style={{fontSize:"24px",opacity:"0.7"}}>Colorful theme styles</label><br />
                                <img style={{display:"inline-block",marginTop:"20px",marginRight:"20px"}} src="/images/login/splashing_mask_8.png" alt="warden theme" />
                                <img style={{display:"inline-block",marginTop:"20px",opacity:"0.4"}} src="/images/login/splashing_mask_11.png" alt="warden charts" />
                            </div>                        
                        </FillLeftBox>
                        <div className={styles.fullRight}>
                            <div className={styles.loginFullTitle}>
                                <SvgIcon src="/images/logo2.svg" width="100" height="100" style={{color:token.colorPrimary}} />
                                <h2 style={{color:token.colorText}}>{intl.formatMessage({id:"pages.login.title"})}</h2>
                                <h3 style={{color:token.colorTextSecondary}}>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                            </div>
                            <div className={styles.fullFormBox}>                     
                                <Form
                                    className={styles.fullLoginForm}                                                
                                    name="basic" 
                                    onFinish={onFinishHandler}    
                                    size="large"                  
                                    initialValues={{ remember: true }} >
                                    <Form.Item
                                        name="username"                                                                
                                        rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.username"}) }]}>
                                        <Input placeholder={intl.formatMessage({id:"pages.login.placeholder.username"})} prefix={<Icon icon="local:user-outlined" style={{width:"16px",height:"16px"}} />} />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.password"}) }]}>
                                        <Input.Password placeholder={intl.formatMessage({id:"pages.login.placeholder.password"})} prefix={<Icon icon="local:lock-closed-outlined" style={{width:"16px",height:"16px"}} />} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Flex justify="space-between">
                                            <Form.Item
                                                name="captcha"  
                                                style={{"marginRight":"8px"}}                                                              
                                                rules={[{ required: true, message: intl.formatMessage({id:"pages.login.require.captcha"}) }]}>
                                                <Input maxLength={6} placeholder={intl.formatMessage({id:"pages.login.placeholder.captcha"})} prefix={<Icon icon="local:variable" style={{width:"16px",height:"16px"}} />} />
                                            </Form.Item>
                                            <img onClick={props.onRefreshCaptcha} src={props.captchaUrl} alt="captcha" style={{width:"100px",height:"36px",cursor:"pointer"}} />
                                        </Flex>
                                    </Form.Item>
                                
                                    <Form.Item>
                                        <Button type="primary" loading={props.loading} block htmlType="submit">
                                        {intl.formatMessage({id:"pages.login.button.login"})}
                                        </Button>                                        
                                        <Divider plain>{intl.formatMessage({id:"app.global.or"})}</Divider>
                                        <Button block onClick={props.onRegister} disabled={props.loading}>
                                        {intl.formatMessage({id:"pages.login.button.register"})}
                                        </Button>                                
                                    </Form.Item>
                                </Form>
                            </div>
                            <CopyRight />  
                        </div>                              
                    </div>
                    </>
            </MaskBox>)
        }

    return(
        <BodyBox>
            {panel}                                
        </BodyBox>
    )
}


const BodyBox=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;
const MaskBox=styled.div`
    left:0px;
    top:0px;
    right:0px;
    bottom: 0px;
    overflow: hidden;
    position: absolute;    
`;
const AdBoxSolid=styled.div<{$color:string}>`  
    background-color: ${props=>props.$color};
`;
const AdBoxGradient=styled.div<{$color1?:string, $color2?: string}>`  
    background: linear-gradient(0deg, ${props=>props.$color1}, ${props=>props.$color2});
`;
const FillLeftBox=styled.div<{$color1?:string, $color2?: string}>`  
    background: linear-gradient(135deg, ${props=>props.$color1}, ${props=>props.$color2});
`;
const FullLayoutBottom=styled.div`  
    position:absolute;  
    width:50%;
    height:380px; 
    text-align:right;  
    left:0px;
    bottom:0px;
    background-image: url("/images/login/splashing_mask_10.png");    
    background-repeat: no-repeat;
    background-position: bottom right;
    transform: scale(0.9);
    transform-origin: bottom center;
`;
const FullLeftRight=styled.div`  
    position:absolute;  
    width:50%;
    height:517px;   
    left:0px;
    bottom:0px;
    background-image: url("/images/login/blue_sky_mask_2.png");    
    background-repeat: no-repeat;
    background-position: bottom right;
    transform: scale(0.9);
    transform-origin: bottom right;
`;

export default LoginNormal