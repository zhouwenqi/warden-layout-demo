import React from 'react';
import dayjs from 'dayjs';
import {
  Avatar,
  Col,
  Tag,
  Row,
  Space,
  theme,
  Divider,
} from 'antd';
import {useIntl} from 'umi';
import { useConfigContext, WardenGlobalThis } from 'warden-layout';
import GridPanel from './GridPanel';
import ProjectPanel from './ProjectPanel';

const {useToken} = theme

const App: React.FC = () => {
  const {token} = useToken()
  const {config} = useConfigContext()
  const intl = useIntl()
  const user = WardenGlobalThis.currentUser
  const pd = config.compact ? "6px" : "10px"  

  const hour = dayjs().hour()    
    var weltag = ''
    if(hour > 6 && hour < 11){
      weltag = intl.formatMessage({id:'workbench.welcome.time.morning'})
    }
    else if(hour > 11 && hour < 14){
      weltag = intl.formatMessage({id:'workbench.welcome.time.goodnoon'})  
    }else if(hour > 14 && hour < 18){
      weltag = intl.formatMessage({id:'workbench.welcome.time.afternoon'})
    }else{
      weltag = intl.formatMessage({id:'workbench.welcome.time.evening'})
    }
  
  return(    
    <>
        <Row justify="space-between" align="stretch" style={{
          padding:token.paddingLG,
          background:token.colorBgContainer,
          marginTop: config.hideBorder ? "2px" : "0",
          marginLeft: config.hideBorder ?"1px": "0"
          }}>
          <Col>
            <Space size={10}>
              <Avatar style={{background:token.colorBgLayout}} size={config.compact? 60 :80} src={user?.headImgUrl}/>
              <Space direction="vertical">
                <label style={{fontSize:token.fontSizeHeading5}}>{weltag}，<a>{user?.username}</a>，{intl.formatMessage({id:'workbench.welcome.title'})}</label>
                <Space>
                  <Tag bordered={false} color="processing">{user?.dept}</Tag>
                  <Tag bordered={false} color="cyan">{user?.post}</Tag>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col>
            <Space align="center" size={config.compact ? 24 : 30} split={<Divider type="vertical" style={{height:config.compact ? "24px" : "30px"}} />}>
              <div style={{textAlign:"right"}}>
                  <label style={{color:token.colorTextTertiary}}>{intl.formatMessage({id:'workbench.welcome.account.id'})}</label><br />
                  <label style={{fontSize:token.fontSizeHeading4}}>193804829832</label>
              </div>
              <div style={{textAlign:"right"}}>
                  <label style={{color:token.colorTextTertiary}}>{intl.formatMessage({id:'workbench.welcome.account.mobile'})}</label><br />
                  <label style={{fontSize:token.fontSizeHeading4}}>189*****384</label>
              </div>
              <div style={{textAlign:"right"}}>
                  <label style={{color:token.colorTextTertiary}}>{intl.formatMessage({id:'workbench.welcome.account.signin.total'})}</label><br />
                  <label style={{fontSize:token.fontSizeHeading4}}>8825</label>
              </div>
            </Space>
          </Col>
        </Row>
        
        <Row style={{padding:pd}}>     
          <Col 
          xs={24}
          sm={24}
          md={24}
          lg={18}
          xl={18}>
            <GridPanel />
          </Col>
          <Col 
          xs={24}
          sm={24}
          md={24}
          lg={6}
          xl={6}>
            <ProjectPanel />
          </Col>
        </Row>
    </>
  )
};




export default App;