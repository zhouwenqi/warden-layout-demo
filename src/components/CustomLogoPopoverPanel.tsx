import { Avatar,List,theme,Flex } from "antd"
import {getLocale} from "umi"
import { SvgIcon, useConfigContext } from "warden-layout"
const {useToken} = theme

const CustomLogoPopoverPanel=()=>{
    const locale = getLocale()
    const {setLogoPopoverOpen} = useConfigContext()
    const projectData = locale == "en-US" ? [
        {id:'1',name:'Calf school',code:'P208823',color:'#ff6600',icon:'/svg/project/p1.svg',createDate:'2022/12/8 23:22',description:'Creating value for corporate ...',memberCount:4,speedCount:86,testCount:19},
        {id:'2',name:'CodeMonkey horde',code:'P442323',color:'#2e78ff',icon:'/svg/project/p2.svg',createDate:'2022/12/8 23:22',description:'Code Monkey horde APP is a ...',memberCount:12,speedCount:59,testCount:51},
        {id:'3',name:'Tea on Front-End',code:'A02342',color:'#ac36ca',icon:'/svg/project/p3.svg',createDate:'2022/12/8 23:22',description:'The front-end tea APP Naixue ...',memberCount:6,speedCount:38,testCount:67},
        {id:'4',name:'Product Speeder',code:'A093823',color:'#57ad2d',icon:'/svg/project/p4.svg',createDate:'2022/12/8 23:22',description:'Only for the product manager ...',memberCount:22,speedCount:93,testCount:31},
        {id:'5',name:'Test takeaway',code:'C324222',color:'#16b7da',icon:'/svg/project/p5.svg',createDate:'2022/12/8 23:22',description:'Test my sister\'s hand-stir-fried...',memberCount:18,speedCount:49,testCount:76}
    ] : [
        {id:'1',name:'牛犊子学堂',code:'P208823',color:'#ff6600',icon:'/svg/project/p1.svg',createDate:'2022/12/8 23:22',description:'为企业客户创造价值是牛犊子...',memberCount:4,speedCount:86,testCount:19},
        {id:'2',name:'代码猴部落',code:'P442323',color:'#2e78ff',icon:'/svg/project/p2.svg',createDate:'2022/12/8 23:22',description:'代码猴部落APP是一款注册方便...',memberCount:12,speedCount:59,testCount:51},
        {id:'3',name:'前端的茶',code:'A02342',color:'#ac36ca',icon:'/svg/project/p3.svg',createDate:'2022/12/8 23:22',description:'前端的茶APP奈雪要打造的是...',memberCount:6,speedCount:38,testCount:67},
        {id:'4',name:'产品飞车',code:'A093823',color:'#57ad2d',icon:'/svg/project/p4.svg',createDate:'2022/12/8 23:22',description:'只为产品经理服务，其它人不...',memberCount:22,speedCount:93,testCount:31},
        {id:'5',name:'测试外卖',code:'C324222',color:'#16b7da',icon:'/svg/project/p5.svg',createDate:'2022/12/8 23:22',description:'测试妹子亲手炒的菜并配送...',memberCount:18,speedCount:49,testCount:76}
    ]
    const popoverTitle = locale == "en-US" ? "Project change" : "切换项目"


    const bgColor = useToken().token.colorBgLayout
    return(
        <>
        <div style={{width:"300px"}}>
            <List
                itemLayout="horizontal"
                dataSource={projectData}
                header={<Flex justify="space-between"><h4 style={{margin:"0px",padding:"0px 0px 0px 10px",lineHeight:"1rem"}}>{popoverTitle}</h4></Flex>}
                renderItem={(item, index) => (                
                    <List.Item data-selected={item.id=="2"} onClick={()=>{setLogoPopoverOpen(false)}} style={{color:bgColor,padding:"8px 10px",cursor:"pointer"}} className="warden-choose-project-item" extra={<label className="project-icon" style={{color:useToken().token.colorPrimary}}><SvgIcon src="/svg/check.svg" width={16} height={16} /></label>}>
                        <List.Item.Meta
                        avatar={<Avatar src={item.icon} />}
                        title={<label>{item.name}</label>}
                        description={item.description}
                        />
                    </List.Item>                
                )}
            />
        </div>
        </>
    )
}

export default CustomLogoPopoverPanel