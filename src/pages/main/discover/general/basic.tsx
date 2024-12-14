import React, { useEffect } from 'react';
import { Avatar, List, App } from 'antd';
import {useIntl} from 'umi';
const data = [
  {
    title: 'This is just a demonstration record - 1',
  },
  {
    title: 'This is just a demonstration record - 2',
  },
  {
    title: 'This is just a demonstration record - 3',
  },
  {
    title: 'This is just a demonstration record - 4',
  },
  {
    title: 'This is just a demonstration record - 5',
  }
]
export default ()=> {
    const intl = useIntl()
    const staticApp = App.useApp()
    useEffect(()=>{
      showNotification()
    },[])
    const showNotification=()=>{
      
        staticApp.notification.info({
        message:intl.formatMessage({id:"main.discover.general.basic.toast.title"}),
        description:intl.formatMessage({id:"main.discover.general.basic.toast.content"}),
        placement:"bottomRight"
    })
  }
  return(
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={<a href="https://microwarp.com" target="_blank">{item.title}</a>}
            description="This list is just a demonstration, and this page does not use a container layout"
            />
        </List.Item>
        )}
    />)
}
