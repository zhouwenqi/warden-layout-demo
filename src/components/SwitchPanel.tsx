import { Button, Result,Tooltip } from 'antd';
import {useIntl,history} from 'umi'


declare type JumpRoute = "/main" | "/company"

const SwitchPanel = (props:{currentPath:JumpRoute}) => {
    const intl = useIntl()  
    const mainOpen = props.currentPath != "/main"
    const companyOpen = props.currentPath != "/company"
    return(   
        <Result
            status="403"
            title={intl.formatMessage({id:"switch.result.title"})}
            subTitle={intl.formatMessage({id:"switch.result.description"})}    
            extra={[
                <Tooltip key="tooltipMain" title={intl.formatMessage({id:"switch.result.tooltip.main"})} open={mainOpen}><Button type={props.currentPath != "/main" ? "primary" : "dashed"} key="main" onClick={()=>{history.push("/main")}}> go /main </Button></Tooltip>,
                <Tooltip key="tooltipCompany" title={intl.formatMessage({id:"switch.result.tooltip.company"})} open={companyOpen}><Button  type={props.currentPath != "/company" ? "primary" : "dashed"} key="company" onClick={()=>{history.push("/company")}}> go /company </Button></Tooltip>,
            ]}
        />)
}

export default SwitchPanel;