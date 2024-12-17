import { Button, Card,List } from "antd"
import {MoreOutlined,TeamOutlined} from "@ant-design/icons"
import {useIntl,getLocale} from "umi"
import { useConfigContext } from "warden-layout"

const ProjectPanel=()=>{
    const {config} = useConfigContext()
    const locale = getLocale()
    const intl = useIntl()
    const projectData = locale == "en-US" ? [
        {id:'1',name:'Calf school',code:'P208823',color:'#ff6600',icon:'/svg/project/p1.svg',createDate:'2022/12/8 23:22',description:'Creating value for corporate customers is the pursuit of the calf academy all along...',memberCount:4,speedCount:86,testCount:19},
        {id:'2',name:'CodeMonkey horde',code:'P442323',color:'#2e78ff',icon:'/svg/project/p2.svg',createDate:'2022/12/8 23:22',description:'Code Monkey horde APP is a real dating software with easy registration...',memberCount:12,speedCount:59,testCount:51},
        {id:'3',name:'Tea on Front-End',code:'A02342',color:'#ac36ca',icon:'/svg/project/p3.svg',createDate:'2022/12/8 23:22',description:'The front-end tea APP Naixue wants to create a lifestyle. Always between product...',memberCount:6,speedCount:38,testCount:67},
        {id:'4',name:'Product Speeder',code:'A093823',color:'#57ad2d',icon:'/svg/project/p4.svg',createDate:'2022/12/8 23:22',description:'Only for the product manager, others do not answer, product speeding...',memberCount:22,speedCount:93,testCount:31},
        {id:'5',name:'Test takeaway',code:'C324222',color:'#16b7da',icon:'/svg/project/p5.svg',createDate:'2022/12/8 23:22',description:'Test my sister\'s hand-stir-fried dishes...',memberCount:18,speedCount:49,testCount:76}
    ] : [
        {id:'1',name:'牛犊子学堂',code:'P208823',color:'#ff6600',icon:'/svg/project/p1.svg',createDate:'2022/12/8 23:22',description:'为企业客户创造价值是牛犊子学堂一直以来的追求，通过丰富的产品矩阵为...',memberCount:4,speedCount:86,testCount:19},
        {id:'2',name:'代码猴部落',code:'P442323',color:'#2e78ff',icon:'/svg/project/p2.svg',createDate:'2022/12/8 23:22',description:'代码猴部落APP是一款注册方便，秒速登录的真人交友软件，最大程度...',memberCount:12,speedCount:59,testCount:51},
        {id:'3',name:'前端的茶',code:'A02342',color:'#ac36ca',icon:'/svg/project/p3.svg',createDate:'2022/12/8 23:22',description:'前端的茶APP奈雪要打造的是一种生活方式。在产品与自然之间始终...',memberCount:6,speedCount:38,testCount:67},
        {id:'4',name:'产品飞车',code:'A093823',color:'#57ad2d',icon:'/svg/project/p4.svg',createDate:'2022/12/8 23:22',description:'只为产品经理服务，其它人不接，产品飞车带您快速进入天堂...',memberCount:22,speedCount:93,testCount:31},
        {id:'5',name:'测试外卖',code:'C324222',color:'#16b7da',icon:'/svg/project/p5.svg',createDate:'2022/12/8 23:22',description:'测试妹子亲手炒的菜并配送...',memberCount:18,speedCount:49,testCount:76}
    ]

    const iconSize = config.compact ? "32px" : "40px"
    const btnPd = config.compact ? "6px 8px" : "8px"

    return(       
        <Card bordered={!config.hideBorder} style={{margin:"8px"}} title={intl.formatMessage({id:'workbench.card.projects.title'})} extra={<Button type="text" style={{padding:btnPd,margin:"0px"}}><MoreOutlined /></Button>}>
            <List itemLayout="horizontal" dataSource={projectData} renderItem={(item)=>(
            <List.Item actions={[<TeamIcon text={''+item.memberCount} />]}>
              <List.Item.Meta
              avatar={<img style={{width:iconSize,height:iconSize}} src={item.icon} alt={item.name} />}
              title={<a>{item.name}</a>}
              description={item.description}
              key={item.id}      
            />
            </List.Item>
          )}>          
          </List>
        </Card>
    )
}
const TeamIcon=(props:{text:string})=>{
    return(
        <Button style={{opacity:"0.5"}} color="default" type="text" icon={<TeamOutlined />}>{props.text}</Button>
    )
}
export default ProjectPanel