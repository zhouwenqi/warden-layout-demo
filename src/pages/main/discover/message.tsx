import React from 'react';
import { Button, Result,GetProp,ColorPickerProps,ColorPicker,Space, Dropdown } from 'antd';
import type {MenuProps} from 'antd';
import { Container, useConfigContext,IExtraBadgeProps, IExtraTagProps } from 'warden-layout';
import {useIntl} from 'umi';
import { sendMenuMessage } from '@/utils/messageUtil';
type Color = Extract<GetProp<ColorPickerProps, 'value'>,{ cleared: any }>

/**
 * page - message
 * 
 * @author zhouwenqi
 */
export default ()=> {
    const intl = useIntl()
    const {config,setConfig} = useConfigContext()

    const randomMessage = () => {        
        const newCount = Math.floor(Math.random() * 100);
        const badgeData:IExtraBadgeProps = {
            filterKey:"path",
            filterValue:"/main/discover/message",
            data:{
                count:newCount,                
                position:"left",
                dot:false,
                color:"red",
            }
        }
        sendMenuMessage({id:"badge",data:badgeData})         
    };
    const randomWelcome = () => {        
        const newCount = Math.floor(Math.random() * 100);  
        const badgeData:IExtraBadgeProps = {
            filterKey:"path",
            filterValue:"/main/discover/welcome",
            data:{
                count:newCount,
                dot:false,
                color:"red",
            }
        }
        sendMenuMessage({id:"badge",data:badgeData})
    };
    const clearMenuBadge=(path:string)=>{ 
        const badgeData:IExtraBadgeProps = {
            filterKey:"path",
            filterValue:path,
            data:{
                count:0,
            }
        }
        sendMenuMessage({id:"badge",data:badgeData})
    };

    const setMenuTag=(data:any)=>{
        const path = "/main/discover/introduce"
        const tagData:IExtraTagProps = {
            filterKey:"path",
            filterValue:path,
            data
        }
        sendMenuMessage({id:"tag",data:tagData});        
    }
    

    const badgeItems: MenuProps['items'] = [
        {
          key: 'message',
          label: intl.formatMessage({id:"main.discover.message.badge.random.message"}),
        },
        {
            key:'welcome',
            label:intl.formatMessage({id:"main.discover.message.badge.random.welcome"}),
        },
        {
            type: 'divider',
        },
        {
            key: 'clear',
            label: intl.formatMessage({id:"main.discover.message.badge.clear.all"}),
        },
    ]
    const onBadgeClick: MenuProps['onClick'] = ({ key }) => {
        console.log(key)
        switch(key){
            case 'message':
                randomMessage()
                break
            case 'welcome':
                randomWelcome();
                break
            case 'clear':
                clearMenuBadge("/main/discover/message")    
                clearMenuBadge("/main/discover/welcome")  
                break
        }
    };

    const tagsItems: MenuProps['items'] = [
        {
            key: 'green',
            label: intl.formatMessage({id:"main.discover.message.tag.green"}),
        },
        {
            key:'blue',
            label:intl.formatMessage({id:"main.discover.message.tag.blue"}),
        },
        {
            key:'red',
            label:intl.formatMessage({id:"main.discover.message.tag.red"}),
        },
        {
            type: 'divider',
        },
        {
            key: 'clear',
            label: intl.formatMessage({id:"main.discover.message.tag.clear"}),
        },
    ]
    const onTagClick: MenuProps['onClick'] = ({ key }) => {
        console.log(key)
        switch(key){
            case 'green':
                setMenuTag({color:"success",text:"Success"})
                break
            case 'blue':
                setMenuTag({color:"blue",bordered:false,text:"Blue!"})
                break
            case 'red':
                setMenuTag({color:"red",bordered:false,text:"Hot"})
                break
            case 'clear':
                setMenuTag(undefined)
                break
        }
    };

    return(
        <Container mode="panel">
            <Result
                status="success"
                title={intl.formatMessage({id:"main.discover.message.result.title"})}
                subTitle={intl.formatMessage({id:"main.discover.message.result.description"})}                
                extra={[
                    <Space key="sapce">    
                        <Dropdown menu={{items:badgeItems,onClick:onBadgeClick}}>
                            <Button key="Badge">{intl.formatMessage({id:"main.discover.message.button.badge"})}</Button>
                        </Dropdown>  
                        <Dropdown menu={{items:tagsItems,onClick:onTagClick}}>
                            <Button key="Tag">{intl.formatMessage({id:"main.discover.message.button.tag"})}</Button>
                        </Dropdown>
                        <ColorPicker value={config.primaryColor} key="color" defaultValue={config.primaryColor} onChange={(value:Color)=>{setConfig({...config,primaryColor:value.toHexString()})}} />
                    </Space>        
                ]}
        /></Container>)
}