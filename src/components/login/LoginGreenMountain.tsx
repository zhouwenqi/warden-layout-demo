import styled from "styled-components";
import styles from "./LoginGreenMountain.less";
import { Carousel,Flex, Form, Input, Button, Divider } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight, LoginLazyBox, SpinBox, useLazyImages } from "./LoginElements";

const LoginGreenMountain=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }    

    const {loading} = useLazyImages(["/images/login/green_mountain_frame_1.png","/images/login/green_mountain_frame_2.png","/images/login/green_mountain_frame_3.png"])

    let panel = (                
                <>
                <MaskBox>
                    <LoginLazyBox backimgUrl="/images/login/green_mountain_mask_2.png" style={{
                        position:"absolute",  
                        width:"100%",
                        height:"129px",
                        left:"0px",
                        bottom:"0px",    
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom center"
                    }} />
                </MaskBox>
                <div className={styles.loginNormalBox}>
                <div className={styles.loginNormalTitle}>
                    <img src="/images/login/green_mountain_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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
                    <LoginLazyBox backimgUrl="/images/skins/green-mountain-bg.jpg" style={{
                        left:"0px",
                        top:"0px",
                        right:"0px",
                        bottom: "0px",
                        overflow: "hidden",
                        position: "absolute",             
                        backgroundRepeat: "no-repeat", 
                    }}>
                        <BodyBlurBox />
                    </LoginLazyBox>
                </MaskBox>
                <div className={styles.loginCardBox}>
                
                <div className={styles.formCardBox}>
                    <div className={styles.formLeft}>
                        {loading ? <SpinBox /> :
                        <Carousel fade={true} effect="fade" dotPosition="bottom" autoplay={true}>
                            <img src="/images/login/green_mountain_frame_1.png" alt="1" />
                            <img src="/images/login/green_mountain_frame_2.png" alt="2" /> 
                            <img src="/images/login/green_mountain_frame_3.png" alt="2" /> 
                        </Carousel>}
                    </div>
                    <div className={styles.formRight}>    
                        <div className={styles.loginCardTitle}>
                            <img src="/images/login/green_mountain_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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


const BodyBlurBox=styled.div`
    width:100%;
    height:100%;
    background:rgba(255, 255, 255, 0.6);    
    -webkit-transform: translateZ(0);
    -webkit-backdrop-filter: blur(8px);
    transform: translateZ(0);
    backdrop-filter: blur(8px);  
`

const PrimaryButton = styled(Button)`
    background: transparent;
    & > span {
        position: relative;
    }
    &::before {
        content: '';
        background: linear-gradient(135deg, #7eb378, #65a45e);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
    
    }
    &:hover::before {
        background: linear-gradient(135deg, #9ac397, #589b53);
        opacity: 0.7;
    }
    &:active::before{
        opacity: 0.9;
        background: linear-gradient(135deg, #589b53, #9ac397);
    }
    &:disabled::before{
        opacity:0.1;
    }
`

export default LoginGreenMountain