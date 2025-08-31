import styled from "styled-components";
import styles from "./LoginOrangeBubble.less";
import { Carousel,Flex, Form, Input, Button, Divider } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight } from "./LoginElements";

const LoginOrangeBubble=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }
    

    let panel = (                
                <>
                <MaskBox>
                
                </MaskBox>
                <div className={styles.loginNormalBox}>
                <div className={styles.loginNormalTitle}>
                    <img src="/images/login/orange_bubble_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                    <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                    <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                </div>
                <div className={styles.formNormalBox}>                      
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
                            <PrimaryButton type="primary" loading={props.loading} block htmlType="submit">
                            {intl.formatMessage({id:"pages.login.button.login"})}
                            </PrimaryButton>                            
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
                <MaskBox>
                </MaskBox>
                <div className={styles.loginCardBox}>
                
                <div className={styles.formCardBox}>
                    <div className={styles.formLeft}>
                        <Carousel fade={true} effect="fade" dotPosition="bottom" autoplay={true}>
                            <img src="/images/login/orange_bubble_frame_1.png" alt="1" />
                            <img src="/images/login/orange_bubble_frame_2.png" alt="2" /> 
                            <img src="/images/login/orange_bubble_frame_3.png" alt="2" /> 
                        </Carousel>
                    </div>
                    <div className={styles.formRight}>    
                        <div className={styles.loginCardTitle}>
                            <img src="/images/login/orange_bubble_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                            <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                            <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
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
                                <PrimaryButton type="primary" loading={props.loading} block htmlType="submit">
                                {intl.formatMessage({id:"pages.login.button.login"})}
                                </PrimaryButton>
                                
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
    background-color: #eef1f7;    
`;
const MaskBox=styled.div`
    left:0px;
    top:0px;
    right:0px;
    bottom: 0px;
    overflow: hidden;
    position: absolute;    
`;
const BodyBackground=styled.div`
    left:0px;
    top:0px;
    right:0px;
    bottom: 0px;
    overflow: hidden;
    position: absolute;     
    background-image: url("/images/skins/orange-bubble-bg.jpg");      
    background-repeat: no-repeat;   
`;
const BodyBlurBox=styled.div`
    width:100%;
    height:100%;
    background:rgba(255, 255, 255, 0.6);    
    -webkit-transform: translateZ(0);
    -webkit-backdrop-filter: blur(8px);
    transform: translateZ(0);
    backdrop-filter: blur(8px);  
`

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

const FullLeftPeople=styled.div`  
    position:absolute;  
    width:50%;
    height:314px;   
    left:90px;    
    bottom:-30px;
    background-image: url("/images/login/splashing_mask_9.png");    
    background-repeat: no-repeat;
    background-position: bottom right;
    transform: scale(0.8);    
    transform-origin: bottom right;
`;

const PrimaryButton = styled(Button)`
    background: transparent;
    & > span {
        position: relative;
    }
    &::before {
        content: '';
        background:  #d86a43;
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
    
    }
    &:hover::before {
        background: #ee8956;
        opacity: 0.7;
    }
    &:active::before{
        opacity: 0.9;
        background: #ca4626;
    }
    &:disabled::before{
        opacity:0.1;
    }
`

export default LoginOrangeBubble