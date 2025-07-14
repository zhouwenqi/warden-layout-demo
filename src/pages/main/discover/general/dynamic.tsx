
import {Container,useConfigContext, ContainerMode,ContainerStretch } from 'warden-layout';
import { Checkbox, Divider, Result, Segmented, Space } from 'antd';
import { useState } from 'react';

const DynamicPage=()=>{  
  const {config} = useConfigContext();
  const [mode,setMode]= useState<ContainerMode>()
  const [stretch,setStretch] = useState<ContainerStretch>()

  const [hideTitle,setHideTitle]= useState(config.hideTitleBar)
  const [hideBreadcrumb,setHideBreadcrumb] = useState(config.hideBreadcrumb)
  const [hideFooter,setHideFooter] = useState(config.hideFooter)

  return(
    <Container mode={mode} stretch={stretch} hideTitle={hideTitle} hideBreadcrumb={hideBreadcrumb} hideFooter={hideFooter}>
        <Result
        status="info"
        title="Set container style!"
        subTitle="Each<Container/>component can have three basic styles and can display the title bar and breadcrumb navigation separately."
        extra={[
            <Segmented key="mode_segmented" defaultValue={mode} options={["none","box","panel"]} onChange={(e)=>{setMode(e as ContainerMode)}} />
        ]} />
        <div style={{textAlign:"center",padding:"0px 0px 20px 0px"}}>
        <h4>Set container stretch for height</h4>
            <div>
                <Space>
                    <Segmented disabled={mode!="panel"} key="stretch_segmented" defaultValue={stretch} options={["none","auto","fill"]} onChange={(e)=>{setStretch(e as ContainerStretch)}} />
                </Space>
            </div> 
            <h4>Set the display of breadcrumbs, title, and footer for the current page separately</h4>
            <div style={{display:"flex",justifyContent:"center"}}>
                <Space>              
                    <Checkbox defaultChecked={!hideFooter} checked={!hideFooter} onClick={()=>{setHideFooter(!hideFooter)}}>Footer</Checkbox>
                    <Checkbox defaultChecked={!hideBreadcrumb} checked={!hideBreadcrumb} onClick={()=>{setHideBreadcrumb(!hideBreadcrumb)}}>Breadcrumb</Checkbox>
                    <Checkbox defaultChecked={!hideTitle} checked={!hideTitle} onClick={()=>{setHideTitle(!hideTitle)}}>Title</Checkbox>                    
                </Space>                 
            </div>
             
        </div>      
    </Container>
    )
}

export default DynamicPage;