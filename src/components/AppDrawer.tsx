import { Drawer,Descriptions,Badge,Space,Button } from "antd"
import { useIntl } from "umi";
import type { DescriptionsProps } from 'antd';

const AppDrawer=(props:IDrawerProps<string>)=>{
    const intl = useIntl()
    const {record,open,setOpen} = props
    const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: intl.formatMessage({id:"drawer.demo.user.label.product"}),
        children: 'Cloud Database',
    },
    {
        key: '2',
        label: intl.formatMessage({id:"drawer.demo.user.label.billing.mode"}),
        children: 'Prepaid',
    },
    {
        key: '3',
        label: intl.formatMessage({id:"drawer.demo.user.label.automatic.renewal"}),
        children: 'YES',
    },
    {
        key: '4',
        label: intl.formatMessage({id:"drawer.demo.user.label.order.time"}),
        children: '2018-04-24 18:00:00',
    },
    {
        key: '5',
        label: intl.formatMessage({id:"drawer.demo.user.label.usage.time"}),
        span: 2,
        children: '2019-04-24 18:00:00',
    },
    {
        key: '6',
        label: intl.formatMessage({id:"drawer.demo.user.label.status"}),
        span: 3,
        children: <Badge status="processing" text="Running" />,
    },
    {
        key: '7',
        label: intl.formatMessage({id:"drawer.demo.user.label.negotiated.amount"}),
        children: '$80.00',
    },
    {
        key: '8',
        label: intl.formatMessage({id:"drawer.demo.user.label.discount"}),
        children: '$20.00',
    },
    {
        key: '9',
        label: intl.formatMessage({id:"drawer.demo.user.label.official.receipts"}),
        children: '$60.00',
    },
    {
        key: '10',
        label: intl.formatMessage({id:"drawer.demo.user.label.config.info"}),
        children: (
        <>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
        </>
        ),
    },
    ];
    
    return(
        <>
            <Drawer
            width={560}
            title={intl.formatMessage({id:"drawer.demo.title"})}
            open={open}    
            extra={<Space><Button key="edit" type="primary">{intl.formatMessage({id:"drawer.demo.user.button.edit"})}</Button></Space>}
            onClose={()=>{setOpen(false);}}
            >
                <Descriptions bordered layout="vertical" title={intl.formatMessage({id:"drawer.demo.user.title"})} items={items} />
            </Drawer>
        </>
    )
}
export default AppDrawer