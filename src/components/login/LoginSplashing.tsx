import styled from "styled-components";
import styles from "./LoginSplashing.less";
import { Carousel,Flex, Form, Input, Button, Divider } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight, LoginLazyBox, SpinBox, useLazyImages } from "./LoginElements";

const LoginSplashing=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }

    const {loading:adLoading} = useLazyImages(["/images/login/splashing_frame_1.png","/images/login/splashing_frame_2.png","/images/login/splashing_frame_3.png"])
    const {loading:leftMaskLoading} = useLazyImages(["/images/login/splashing_mask_8.png","/images/login/splashing_mask_11.png","/images/login/splashing_mask_12.png"])

    let panel = (<MaskBox>
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_3.png" style={{
                    position:"absolute",
                    width:"160px",
                    height:"465px",
                    top:"0px",
                    left:"0px",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(0.6)",
                    transformOrigin: "top left"
                }} />
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_4.png" style={{
                    position:"absolute",
                    width:"736px",
                    height:"156px",
                    bottom:"0px",
                    left:"0px",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(0.6)",
                    transformOrigin: "bottom left"
                }} />
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_5.png" style={{
                    position:"absolute",
                    width:"384px",
                    height:"536px",
                    top:"0px",
                    right:"0px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    transform: "scale(0.6)",
                }} />
                <>
                <div className={styles.loginBox}>
                <div className={styles.loginNormalTitle}>
                    <img src="/images/login/splashing_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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
        </MaskBox>)
    
    if(props.layoutType=="cardColumn"){
        panel = (<MaskBox>
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_3.png" style={{
                    position:"absolute",
                    width:"160px",
                    height:"465px",
                    top:"0px",
                    left:"0px",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(0.6)",
                    transformOrigin: "top left"
                }} />
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_4.png" style={{
                    position:"absolute",
                    width:"736px",
                    height:"156px",
                    bottom:"0px",
                    left:"0px",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(0.6)",
                    transformOrigin: "bottom left"
                }} />
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_5.png" style={{
                    position:"absolute",
                    width:"384px",
                    height:"536px",
                    top:"0px",
                    right:"0px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    transform: "scale(0.6)",
                    transformOrigin: "top right"

                }} />               
                <>
                <div className={styles.loginBox}>
                <div className={styles.loginCardTitle}>
                    <img src="/images/login/splashing_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                    <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                    <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                </div>
                <div className={styles.formCardBox}>
                    <div className={styles.formLeft}>
                        {adLoading ? <SpinBox /> :
                        <Carousel effect="fade" dotPosition="bottom" autoplay={true}>
                            <img src="/images/login/splashing_frame_1.png" alt="1" />
                            <img src="/images/login/splashing_frame_2.png" alt="2" /> 
                            <img src="/images/login/splashing_frame_3.png" alt="3" />
                        </Carousel>}
                    </div>
                    <div className={styles.formRight}>                        
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
                    </div>
                </div>
                <CopyRight />
            </div>
            </>
        </MaskBox>)
    }else if(props.layoutType=="fullColumn"){
        panel = (<MaskBox> 
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_5.png" style={{
                    position:"absolute",
                    width:"384px",
                    height:"536px",
                    top:"0px",
                    right:"0px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    transform: "scale(0.6)",
                    transformOrigin: "top right"
                }} />               
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_7.png" style={{
                    position:"absolute",
                    width:"50%",
                    height:"517px",
                    left:"0px",
                    bottom:"0px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    transform: "scale(0.9)",
                    transformOrigin: "bottom right"
                }} />  
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_10.png" style={{
                    position:"absolute",
                    width:"50%",
                    height:"380px",
                    textAlign:"right",  
                    left:"0px",
                    bottom:"0px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    transform: "scale(0.9)",
                    transformOrigin: "bottom center"
                }}>
                    <label style={{fontSize:"60px",color:"white"}}>Rich layout styles</label><br />
                    <label style={{fontSize:"36px",color:"white",opacity:"0.7",lineHeight:"40px"}}>Multi tenant</label><br />
                    <label style={{fontSize:"36px",color:"white",opacity:"0.7",lineHeight:"40px"}}>SpringCloud + React</label><br />
                </LoginLazyBox>          
                <LoginLazyBox backimgUrl="/images/login/splashing_mask_9.png" style={{
                    position:"absolute",
                    width:"50%",
                    height:"314px",
                    left:"90px",
                    bottom:"-30px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    transform: "scale(0.8)",
                    transformOrigin: "bottom right"
                }} />
                <>
                <div className={styles.fullBox}>
                    <div className={styles.fullLeft}> 
                        {leftMaskLoading ? <></> : 
                        <div className={styles.fullLeftBox}>                
                        <div style={{padding:"40px"}}>
                            <label style={{fontSize:"96px",lineHeight:"100px"}}>320+</label><br />
                            <label style={{fontSize:"24px",opacity:"0.7"}}>Colorful theme styles</label><br />
                            <img style={{display:"inline-block",marginTop:"20px",marginRight:"20px"}} src="/images/login/splashing_mask_8.png" alt="warden theme" />
                            <img style={{display:"inline-block",marginTop:"20px",opacity:"0.4"}} src="/images/login/splashing_mask_11.png" alt="warden charts" />
                        </div>  
                        </div>}   
                    </div>
                    <div className={styles.fullRight}>
                        <div className={styles.loginCardTitle}>
                            <img src="/images/login/splashing_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                            <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                            <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
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

const PrimaryButton = styled(Button)`
    background: transparent;
    & > span {
        position: relative;
    }
    &::before {
        content: '';
        background: linear-gradient(135deg, #efa5d6, #09b9fd);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
    
    }
    &:hover::before {
        background: linear-gradient(135deg, #09b9fd, #efa5d6);
        opacity: 0.7;
    }
    &:active::before{
        opacity: 0.9;
        background: linear-gradient(135deg, #09a7e1, #d0a5ca);
    }
    &:disabled::before{
        opacity:0.1;
    }
`

export default LoginSplashing