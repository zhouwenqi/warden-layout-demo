import React, { useEffect } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space,App} from 'antd';
import { Container} from 'warden-layout';
import {useIntl} from 'umi';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://microwarp.com',
  title: `warden layout part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    'This is a demonstration of using containers',
  content:
    'The built-in Container component of warden layout allows for autonomous control of margin styles, breadcrumb menus, titles, and more',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ContainerPage=() => {
    const staticApp = App.useApp()
    const intl = useIntl()
    
    useEffect(()=>{
        showNotification()
    },[])
    const showNotification=()=>{
        staticApp.notification.success({
            message:intl.formatMessage({id:"main.discover.general.container.toast.title"}),
            description:intl.formatMessage({id:"main.discover.general.container.toast.content"}),
            placement:"bottomRight"
        })
    }

    return(
        <Container mode="panel">
            <List
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={data}            
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}                
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
    </Container>)
}

export default ContainerPage;