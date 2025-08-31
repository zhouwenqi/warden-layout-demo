import styled from "styled-components";
import styles from "./LoginStarJellyfish.less";
import { Carousel,Flex, Form, Input, Button, Divider } from 'antd';
import {useIntl,Icon} from 'umi';
import { CopyRight } from "./LoginElements";

const LoginStarJellyfish=(props:LoginBoxProps)=>{
    const intl = useIntl()    
    const onFinishHandler=(values:any)=>{
        props.onLogin!(values)        
    }
    

    let panel = (                
                <>
                <MaskBox>
                    <FormBackgroundBox />
                </MaskBox>
                <div className={styles.loginNormalBox}>
                <div className={styles.loginNormalTitle}>
                    <img src="/images/login/star_jellyfish_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                    <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                    <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                </div>
                <div className={styles.formNormalBox}>                      
                    <Form                                              
                        name="basic" 
                        onFinish={onFinishHandler}   
                        variant="filled"                   
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
                <BodyBackground>
                   
                </BodyBackground>
                </MaskBox>
                <div className={styles.loginCardBox}>
                
                <div className={styles.formCardBox}>
                    <div className={styles.formLeft}>
                        <Carousel fade={true} effect="fade" dotPosition="bottom" autoplay={true}>
                            <img src="/images/login/star_jellyfish_frame_1.png" alt="1" />
                            <img src="/images/login/star_jellyfish_frame_2.png" alt="2" /> 
                            <img src="/images/login/star_jellyfish_frame_3.png" alt="3" /> 
                        </Carousel>
                    </div>
                    <div className={styles.formRight}>    
                        <div className={styles.loginCardTitle}>
                            <img src="/images/login/star_jellyfish_logo.png" style={{width:"100px",height:"100px"}} alt="logo" />
                            <h2>{intl.formatMessage({id:"pages.login.title"})}</h2>
                            <h3>{intl.formatMessage({id:"pages.login.welcome"})}</h3>
                        </div>                    
                        <Form
                            className={styles.loginForm}                                                
                            name="basic"    
                            variant="filled"
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
    } else if(props.layoutType=="fullColumn"){
            panel = (<MaskBox> 
                    <FullLeftRight />  
                    <FullLayoutBottom>
                        <label style={{fontSize:"60px",color:"#76b5f3"}}>Rich layout styles</label><br />
                        <label style={{fontSize:"36px",color:"#f6cfef",opacity:"0.7",lineHeight:"40px"}}>Multi tenant</label><br />
                        <label style={{fontSize:"36px",color:"#f6cfef",opacity:"0.7",lineHeight:"40px"}}>SpringCloud + React</label><br />
                    </FullLayoutBottom>                      
                    <>
                    <div className={styles.fullBox}>
                        <div className={styles.fullLeft}>                        
                            <div style={{padding:"40px"}}>
                                <label style={{fontSize:"96px",lineHeight:"100px"}}>320+</label><br />
                                <label style={{fontSize:"24px",opacity:"0.7"}}>Colorful theme styles</label><br />
                                <img style={{display:"inline-block",marginTop:"20px",marginRight:"20px"}} src="/images/login/splashing_mask_8.png" alt="warden theme" />
                                <img style={{display:"inline-block",marginTop:"20px",opacity:"0.4"}} src="/images/login/splashing_mask_11.png" alt="warden charts" />
                            </div>                        
                        </div>
                        <div className={styles.fullRight}>
                            <div className={styles.loginFullTitle}>
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
                                    variant="filled"               
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
    background-color: #000000;    
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
    background-image: url("/images/skins/star-jellyfish-bg.jpg");      
    background-repeat: no-repeat;   
`;
const FormBackgroundBox=styled.div`
    left:0px;
    top:0px;
    right:0px;
    bottom: 0px;
    overflow: hidden;
    position: absolute;     
    background-image: url("/images/login/star_jellyfish_mask_1.png");      
    background-repeat: no-repeat; 
    background-position: center center;  
`;
const BodyBlurBox=styled.div`
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.6);    
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
    height:364px;   
    left:0px;
    bottom:0px;
    background-image: url("/images/login/star_jellyfish_mask_3.png");    
    background-repeat: no-repeat;
    background-position: bottom right;
    transform: scale(0.9);
    transform-origin: bottom right;
`;
const PrimaryButton = styled(Button)`
    background: transparent;
    & > span {
        position: relative;
    }
    &::before {
        content: '';
        background: linear-gradient(135deg, #9697d2, #467a9f);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
    
    }
    &:hover::before {
        background: linear-gradient(135deg, #a1a2da, #5286ac);
        opacity: 0.7;
    }
    &:active::before{
        opacity: 0.9;
        background: linear-gradient(135deg,  #5286ac,#b5b6ef);
    }
    &:disabled::before{
        opacity:0.1;
    }
`

export default LoginStarJellyfish