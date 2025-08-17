import { Col,Row,Card,Space,Flex,theme,Button,Tag, List,Typography,Avatar } from 'antd'
import {CaretUpOutlined,MoreOutlined,FlagOutlined,CaretDownOutlined} from '@ant-design/icons';
import {useIntl,getLocale} from 'umi'
import AppChart from '@/components/AppChart';
import { hexToRgbaString, useConfigContext } from 'warden-layout/dist/esm';
const {Text} = Typography;

const {useToken} = theme
const GridPanel=()=>{
    const intl = useIntl()
    const data:GridInfo[] = [
        {id:1,title:intl.formatMessage({id:'workbench.card.registrations.title'}),tag:intl.formatMessage({id:'workbench.card.registrations.tag'}),total:'629',iconName:'member1',iconColor:"#61aa4b",rate:'50%',rateType:'rise'},
        {id:2,title:intl.formatMessage({id:'workbench.card.orders.title'}),tag:intl.formatMessage({id:'workbench.card.orders.tag'}),total:'1198',iconName:'order1',iconColor:"#c96079",rate:'10%', rateType:'drop'},
        {id:3,title:intl.formatMessage({id:'workbench.card.sales.title'}),tag:intl.formatMessage({id:'workbench.card.sales.tag'}),total:'$10938.64',iconName:'payment1',iconColor:"#289cf5",rate:'32%',rateType:'rise'},
        {id:4,title:intl.formatMessage({id:'workbench.card.todos.title'}),tag:intl.formatMessage({id:'workbench.card.todos.tag'}),total:'32',iconName:'ring2',iconColor:"#fa583e",rate:'12',rateType:'flag'},
    ]
    
    const option1 = {
        dataset:{
            source:[{'week':'Monday','value':200},{'week':'Tuesday','value':1200},{'week':'Wednesday','value':800},{'week':'Thursday','value':1460},{'week':'Friday','value':560},{'week':'Saturday','value':790},{'week':'Sunday','value':410}],
            dimensions:['week','value']
        },
        tooltip: {
            trigger: 'axis',
            borderWidth: 0
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show:false,
        },
        yAxis: {
          type: 'value',
          show:false
        },
        grid: {
            show:false
        },        
        series: [
          {
            type: 'line',
            smooth: true,
            showSymbol: false,
            color:['#20b523'],
            areaStyle: {
                color:{
                    type:'linear',
                    x:0,
                    y:0,
                    x2:0,
                    y2:1,
                    colorStops:[
                        {offset:0,color:'rgba(32,181,35,0.6)'},
                        {offset:0.5,color:'rgba(32,181,35,0.2)'},
                        {offset:0.9,color:'rgba(32,181,35,0)'},
                    ]
                }
            }
          }
        ]
    }
    const option2 = {
        dataset:{
            source:[{'date':'2022-11-01','value':140},{'date':'2022-11-02','value':450},{'date':'2022-11-03','value':1960},{'date':'2022-11-04','value':370},{'date':'2022-11-05','value':1750},{'date':'2022-11-06','value':790}],
            dimensions:['date','value']
        },
        tooltip: {
            trigger: 'axis',
            borderWidth: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show:false,
        },
        yAxis: {
          type: 'value',
          show:false
        },
        grid: {
            show:false
        },        
        series: [
          {
            type: 'line',
            smooth: true,
            showSymbol: false,
            color:['#5d90f6'],
            areaStyle: {
                color:{
                    type:'linear',
                    x:0,
                    y:0,
                    x2:0,
                    y2:1,
                    colorStops:[
                        {offset:0,color:'rgba(93,144,246,0.6)'},
                        {offset:0.5,color:'rgba(93,144,246,0.2)'},
                        {offset:0.9,color:'rgba(93,144,246,0)'},
                    ]
                }
            }
          }
        ]
    }

    const option3 = {
        dataset:{
            source:[{'month':'2022-06','value':90},{'month':'2022-07','value':780},{'month':'2022-08','value':490},{'month':'2022-09','value':1270},{'month':'2022-10','value':530},{'month':'2022-11','value':780},{'month':'2022-12','value':419}],
            dimensions:['month','value']
        },
        tooltip: {
            trigger: 'axis',
            borderWidth: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show:false,
        },
        yAxis: {
          type: 'value',
          show:false
        },
        grid: {
            show:false
        },        
        series: [
          {
            type: 'line',
            smooth: true,
            showSymbol: false,
            color:['#5d90f6']
          }
        ]
    }

    const chartBoxStyle:React.CSSProperties = {
        position: "absolute",
        bottom:"8px",
        right:"8px",
        height:"70px",
        width:"160px",
    }
    
    return(
        <Row>            
            <TotalCard data={data[0]} memoElement={<div style={chartBoxStyle}><AppChart option={option1} style={{width:"100%",height:"100%"}} /></div>} moreElement={<Button type="text" style={{padding:"8px",margin:"0px"}}><MoreOutlined /></Button>} />
            <TotalCard data={data[1]} memoElement={<div style={chartBoxStyle}><AppChart style={{width:'100%',height:'100%'}} option={option2} /></div>} moreElement={<Button type="text" style={{padding:"8px",margin:"0px"}}><MoreOutlined /></Button>} />
            <TotalCard data={data[2]} memoElement={<div style={chartBoxStyle}><AppChart style={{width:'100%',height:'100%'}} option={option3} /></div>} />
            <TotalCard data={data[3]} memoElement={<img style={{position: "absolute",bottom:"18px",right:"18px", height:"70%"}} src="/images/visitiors.png" alt="visitiors" />} />
            <LogsPanel />
        </Row>
    )

}

const TotalCard=(props:GridCardProps)=>{
    const {token} = useToken()
    const {config} = useConfigContext()    
   
    let tagIcon = (<CaretUpOutlined />)
    switch(props.data.rateType){
        case "drop":
            tagIcon = (<CaretDownOutlined />)
            break
        case "flag":
            tagIcon = (<FlagOutlined />)
            break
        default:
            break
    }
    const pd = config.compact ? "6px" : "10px"
    const bgColor = hexToRgbaString(token.colorBgContainer,0.6)
    const cardClass = config.backgroundBlur ? "warden-layout-blur" : "" 
    return(        
      <Col
      xs={24}
      sm={24}
      md={12}
      lg={12}
      xl={12}>
        <Card style={{margin:pd,background:bgColor}} bordered={!config.hideBorder} className={cardClass}>
          <Flex justify="space-between">
            <Space direction="vertical" size={14}>
              <label style={{fontSize:token.fontSizeHeading5,color:token.colorTextSecondary}}>{props.data.title}</label>                            
              <label style={{fontSize:token.fontSizeHeading1}}>{props.data.total}</label>
              <label style={{color:token.colorTextTertiary,fontSize:token.fontSize}}><Tag bordered={false} color={props.data.rateType == "rise" ? "green" : "error"} icon={tagIcon}>{props.data.rate}</Tag>{props.data.tag}</label>
            </Space>
            {props.moreElement}
            {props.memoElement}
          </Flex>
        </Card>
      </Col>
    )
  }

const LogsPanel=()=>{
    const intl = useIntl()
    const {config} = useConfigContext()
    const pd = config.compact ? "6px" : "10px"
    const {token} = useToken()
    
    const cnData = [
        {id:1,name:'Apple',face:'1',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:(<><Text strong>Apple </Text><Text type="success">审核</Text><Text> 了一张订单： </Text><Text type="secondary">PSN204823422</Text></>)},
        {id:2,name:'Microsoft',face:'2',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Microsoft </Text><Text type="danger">删除</Text><Text> 了订单： </Text><Text type="secondary" delete>PSN49837246</Text></>},
        {id:3,name:'Google',face:'3',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Google </Text><Text type="warning">修改</Text><Text> 了用户(173****234)的 </Text><Text type="secondary">登录密码</Text></>},    
        {id:4,name:'Facebook',face:'4',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Facebook </Text><Text> 使用手机端APP </Text><Text type="success">登录</Text><Text type="secondary"> 沃登后台管理系统</Text></>},  
        {id:5,name:'Sumsang',face:'5',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Sumsang </Text><Text type="success">发布</Text><Text> 商品信息 </Text><Text type="secondary"> 沃登多功能无人机</Text></>},  
        {id:6,name:'Oracle',face:'6',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Oracle </Text><Text type="success">加入</Text><Text> 项目 </Text><Text type="secondary"> 产品飞车</Text></>}, 
        
      ]
      const enData = [
        {id:1,name:'Apple',face:'1',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:(<><Text strong>Apple </Text><Text type="success">Verify</Text><Text> an order： </Text><Text type="secondary">PSN204823422</Text></>)},
        {id:2,name:'Microsoft',face:'2',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Microsoft </Text><Text type="danger">Delete</Text><Text> an order： </Text><Text type="secondary" delete>PSN49837246</Text></>},
        {id:3,name:'Google',face:'3',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Google </Text><Text type="warning">Modify</Text><Text> user(173****234) is </Text><Text type="secondary">login password</Text></>},    
        {id:4,name:'Facebook',face:'4',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Facebook </Text><Text> use mobile-app </Text><Text type="success">Login</Text><Text type="secondary"> warden system</Text></>},  
        {id:5,name:'Sumsang',face:'5',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Sumsang </Text><Text type="success">Publish</Text><Text> product info </Text><Text type="secondary"> warden intelligent UAVs</Text></>},  
        {id:6,name:'Oracle',face:'6',createDate:'2022/12/8 23:24',modifyDate:'2022/12/8 23:24',action:'DELETE',terminal:'MOBILE',appType:'IOS',ip:'192.168.4.52',content:<><Text strong>Oracle </Text><Text type="success">Join</Text><Text> project </Text><Text type="secondary"> PM fly up</Text></>}, 
        
      ]
      
    const data = getLocale()=='en-US' ? enData : cnData
    const bgColor = config.headTransparent || config.leftTransparent ? hexToRgbaString(token.colorBgContainer,0.6) : token.colorBgContainer
    const cardClass = config.backgroundBlur ? "warden-layout-blur" : "" 
    return(
        <Col span={24}>
            <Card className={cardClass} style={{margin:pd,background:bgColor}} bordered={!config.hideBorder} title={intl.formatMessage({id:'workbench.card.logs.title'})}  extra={<Button type="text" style={{padding:"8px",margin:"0px"}}><MoreOutlined /></Button>}>
            <List itemLayout="horizontal" dataSource={data} renderItem={(item)=>(
                <List.Item actions={[<a>{intl.formatMessage({id:'global.button.view'})}</a>]}>
                <List.Item.Meta
                avatar={<Avatar size={30} src={"https://api.dicebear.com/7.x/miniavs/svg?seed=" + item.face} alt={item.name} />}
                title={<a>{item.name}</a>}
                description={item.createDate}  
                key={item.id}          
                />          
                <div>{item.content}</div>
                </List.Item>
            )} />
          </Card>
        </Col>
    )
}

export default GridPanel