import styled from "styled-components";
import styles from "./LoginBlueChristams.less";
import { Carousel,Flex, Form, Input, Button, Divider } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight, LoginLazyBox, SpinBox, useLazyImages } from "./LoginElements";

const LoginBlueChristams=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }

    const {loading:adLoading} = useLazyImages(["/images/login/sd_frame_1.png","/images/login/sd_frame_2.png","/images/login/sd_frame_3.png"])
    const {loading:leftMaskLoading} = useLazyImages(["/images/login/splashing_mask_8.png","/images/login/splashing_mask_11.png","/images/login/sd_mask_1.png"])

    let panel = (                
                <>
                <MaskBox>
                    <LoginLazyBox backimgUrl="/images/login/sd_mask_1.png" style={{
                        position:"absolute",  
                        width:"100%",
                        height:"700px", 
                        left:"0px",
                        top:"0px",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center top",
                    }} />
                </MaskBox>
                <div className={styles.loginNormalBox}>
                <div className={styles.loginNormalTitle}>
                    <img src="/images/login/sd_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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
                <CopyRight color="#666" />
            </div>
            </>
        )
    
    if(props.layoutType=="cardColumn"){
        panel = (              
                <>
                <MaskBox>
                    <LoginLazyBox backimgUrl="/images/login/sd_mask_1.png" style={{
                        position:"absolute",  
                        width:"100%",
                        height:"700px", 
                        left:"0px",
                        top:"0px",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center top",
                    }} />
                    <BodyBlurBox />
                </MaskBox>
                <div className={styles.loginCardBox}>
                
                <div className={styles.formCardBox}>                    
                    <div className={styles.formLeft}>    
                        <div className={styles.loginCardTitle}>
                            <img src="/images/login/sd_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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
                    <div className={styles.formRight}>
                        {adLoading ? <SpinBox /> :
                        <Carousel fade={true} effect="fade" dotPosition="bottom" autoplay={true}>
                            <img src="/images/login/sd_frame_1.png" alt="1" />
                            <img src="/images/login/sd_frame_2.png" alt="2" /> 
                            <img src="/images/login/sd_frame_3.png" alt="2" /> 
                        </Carousel>}
                    </div>
                </div>                
            </div>
            </>)
    } else if(props.layoutType=="fullColumn"){
            panel = (<MaskBox> 
                    <LoginLazyBox backimgUrl="/images/login/sd_mask_2.png" style={{
                        position:"absolute",  
                        width:"606px",
                        height:"240px",  
                        left:"0px",
                        bottom:"0px",  
                        backgroundRepeat:"no-repeat",
                        backgroundPosition: "bottom right",
                    }} />
                    <LoginLazyBox backimgUrl="/images/login/splashing_mask_10.png" style={{
                            position:"absolute",
                            width:"50%",
                            height:"380px", 
                            textAlign:"right",  
                            left:"0px",
                            bottom:"0px", 
                            backgroundRepeat:"no-repeat",
                            backgroundPosition: "bottom right",
                            transform: "scale(0.9)",
                            transformOrigin: "bottom center"
                        }}>
                        <label style={{fontSize:"60px",color:"#5694bb"}}>Rich layout styles</label><br />
                        <label style={{fontSize:"36px",color:"#5694bb",opacity:"0.7",lineHeight:"40px"}}>Multi tenant</label><br />
                        <label style={{fontSize:"36px",color:"#5694bb",opacity:"0.7",lineHeight:"40px"}}>SpringCloud + React</label><br />
                    </LoginLazyBox>  
                    <>
                    <div className={styles.fullBox}>
                        <div className={styles.fullLeft}>
                            {leftMaskLoading ? <></> :
                            <div style={{padding:"40px"}}>
                                <label style={{fontSize:"96px",lineHeight:"100px"}}>320+</label><br />
                                <label style={{fontSize:"24px",opacity:"0.7"}}>Colorful theme styles</label><br />
                                <img style={{display:"inline-block",marginTop:"20px",marginRight:"20px"}} src="/images/login/splashing_mask_8.png" alt="warden theme" />
                                <img style={{display:"inline-block",marginTop:"20px",opacity:"0.4"}} src="/images/login/splashing_mask_11.png" alt="warden charts" />
                            </div>}                     
                        </div>
                        <div className={styles.fullRight}>
                            <div className={styles.loginFullTitle}>
                                <img src="/images/login/sd_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
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
    background-color: #e0f6fe;    
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
    background:rgba(255, 255, 255, 0.2);    
    -webkit-transform: translateZ(0);
    -webkit-backdrop-filter: blur(4px);
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
        background: linear-gradient(135deg, #8bd2fd, #d296a6);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
    
    }
    &:hover::before {
        background: linear-gradient(135deg, #78b9e0, #df90a5);
        opacity: 0.7;
    }
    &:active::before{
        opacity: 0.9;
        background: linear-gradient(135deg, #4599ce, #af4d66);
    }
    &:disabled::before{
        opacity:0.1;
    }
`

export default LoginBlueChristams