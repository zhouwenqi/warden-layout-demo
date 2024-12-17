import React from 'react';
import { Button, Result,GetProp,ColorPickerProps,ColorPicker,Space } from 'antd';
import { Container, useConfigContext } from 'warden-layout';
import {useIntl} from 'umi';
type Color = Extract<GetProp<ColorPickerProps, 'value'>,{ cleared: any }>


export default ()=> {
    const intl = useIntl()
    const {badgeCount,setBadgeCount,config,setConfig} = useConfigContext()
    const increase = () => {
        setBadgeCount(badgeCount + 1);
    };
    
    const decline = () => {
        let newCount = badgeCount - 1;
        if (newCount < 0) {
        newCount = 0;
        }
        setBadgeCount(newCount)
    };

    const random = () => {
        const newCount = Math.floor(Math.random() * 100);
        setBadgeCount(newCount)
    };
    return(
        <Container>
    <Result
        status="success"
        title={intl.formatMessage({id:"main.discover.message.result.title"})}
        subTitle={intl.formatMessage({id:"main.discover.message.result.description"})}
        extra={[
            <Space key="sapce">
                <Button type="primary" onClick={increase} key="increase">{intl.formatMessage({id:"main.discover.message.button.increase"})}</Button>
                <Button key="decline" onClick={decline}>{intl.formatMessage({id:"main.discover.message.button.decline"})}</Button>
                <Button key="random" onClick={random}>{intl.formatMessage({id:"main.discover.message.button.random"})}</Button>
                <ColorPicker value={config.primaryColor} key="color" defaultValue={config.primaryColor} onChange={(value:Color)=>{setConfig({...config,primaryColor:value.toHexString()})}} />
            </Space>        
        ]}
  /></Container>)
}