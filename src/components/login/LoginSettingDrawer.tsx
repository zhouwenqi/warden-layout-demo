import React, { useState,useEffect } from 'react';
import {useIntl,getLocale,setLocale} from 'umi';
import {Drawer,Space,Button,FloatButton,Segmented,Spin,Tooltip,Radio,theme} from 'antd';
import type {RadioChangeEvent} from 'antd'
import { SettingOutlined,MoonOutlined,SunOutlined } from '@ant-design/icons';
import {AppIcon, Warden} from "warden-layout";
import { useLoginContext } from './LoginContext';
import "./LoginElements.less";
import { getSkin } from '@/utils/skinUtil';

const {useToken} = theme

export declare interface ColorBoxProps extends Warden.IColor {
    selected?: boolean;
    onSelectItem: Function;
}

export declare type ColorBoxGroupProps = {
    onSelect: Function;
    color: string;
}

// 登录布局皮肤数据
const skinsRecord:Record<string,string[]>={
  "normal":["blueSky","blueChristmas","paintSplashing","blueLattice","pinkRomantic","greenMountain","orangeBubble","starJellyfish","starNeon"],
  "cardColumn":["blueSky","blueChristmas","paintSplashing","pinkRomantic","greenMountain","orangeBubble","starJellyfish","starNeon"],
  "fullColumn":["blueSky","blueChristmas","paintSplashing","starJellyfish","starNeon"]
}
// 登录主题颜色数据
const ThemeColors: Warden.IColor[] = [
  { color: '#417ffb', id: 'login.theme.color.blue' },
  { color: '#f21934', id: 'login.theme.color.red' },
  { color: '#99572b', id: 'login.theme.color.brown' },
  { color: '#f8512a', id: 'login.theme.color.orange' },
  { color: '#f8ac2f', id: 'login.theme.color.yellow' },
  { color: '#25c3c1', id: 'login.theme.color.cyan' },
  { color: '#409f46', id: 'login.theme.color.green' },
  { color: '#e857a9', id: 'login.theme.color.pink' },
  { color: '#712fce', id: 'login.theme.color.purple' },
]
// 登录布局国际化语言数据
const Languages: Array<Warden.IRegion> = [
    { language: 'zh-CN', name: '简体中文' },
    { language: 'en-US', name: 'English' },
]

// 登录布局设置抽屉组件
const LoginSettingDrawer=(props:{onMorePress:Function})=>{  
    const intl = useIntl()
    const [open,setOpen] = useState(false)
    const locale = getLocale()
    const {loginConfig,setLoginConfig} = useLoginContext()
    const [colorMode,setColorMode]=useState("skin")

    // 选择主题
    const onChangeTheme = (value:"light"|"dark")=>{
        setLoginConfig({
          ...loginConfig,
          theme:value
        }) 
    }

    // 选择语言
    const onChnageLanguageHandler=(value:string)=>{
        setLocale(value,false)
    }
    // 选择布局类型
    const onChangeLoginLayoutHandler=(layoutType:LoginLayoutType)=>{
      setLoginConfig({
        ...loginConfig,
        layoutType:layoutType
      })
    }

    // 选择颜色事件
    const onSelectColorHandler=(color:string)=>{
      setLoginConfig({
        ...loginConfig,
        primaryColor:color,
        skinName:undefined
      })    
    }

    // 语言列表
    let languages:any[] = []    
    Languages.forEach((region,index)=>{
        languages.push({
            label:region.name,
            value:region.language
        })
    })

    // 皮肤和纯色切换
    const colorModePanel = colorMode == "skin" ? (<SkinGroupBox />) : (<Space><ColorBoxGroup
      color={loginConfig.primaryColor!}
      onSelect={onSelectColorHandler}
    /></Space>)

    return(
        <>
        <FloatButton tooltip={intl.formatMessage({id:"login.setting.drawer.title"})} onClick={()=>{setOpen(true)}} icon={<SettingOutlined />}></FloatButton>
        <Drawer
        title={intl.formatMessage({id:"login.setting.drawer.title"})}
        open={open}    
        footer={<Space>
          <Button onClick={()=>{setOpen(false);props.onMorePress()}} key="edit" type="primary">{intl.formatMessage({id:"login.setting.button.goto.main"})}</Button>
          </Space>}
        onClose={()=>{setOpen(false);}}
        >            
            <div className="wardenSettingLabelBox">            
                <label>{intl.formatMessage({id:"login.setting.layout.title"})}</label>
                <LoginLayoutGroup
                  layout={loginConfig.layoutType}
                  onSelect={onChangeLoginLayoutHandler}
                />
            </div>
            <div className="wardenSettingLabelBox">            
                <label>{intl.formatMessage({id:"login.setting.theme.mode.title"})}</label>
                <Segmented
                    disabled={loginConfig.skinName!=undefined && loginConfig.skinName!=null}
                    defaultValue={loginConfig.theme}
                    onChange={onChangeTheme}
                    options={[
                        { value: 'light', icon: <SunOutlined /> },
                        { value: 'dark', icon: <MoonOutlined /> },
                    ]}
                    />            
            </div>
            <div className="wardenSettingLabelBox">
                <Space style={{marginBottom:"8px"}}>
                  <Radio.Group onChange={(e:RadioChangeEvent)=>{setColorMode(e.target.value)}} value={colorMode}>
                    <Radio value="color">{intl.formatMessage({id:"login.setting.color.title"})}</Radio>
                    <Radio value="skin">{intl.formatMessage({id:"login.setting.skin.title"})}</Radio>
                  </Radio.Group>              
                </Space>            
                {colorModePanel}       
            </div>            
            <div className="wardenSettingLabelBox">            
                <label>{intl.formatMessage({id:"login.setting.language.title"})}</label>
                <Segmented
                    defaultValue={locale}
                    onChange={onChnageLanguageHandler}
                    options={languages}
                    />            
            </div>            
        </Drawer>        
        </>
    )

}

/**
* Theme color selector
* @param props Color parameters
* @returns
*/
const ColorBoxGroup = (props: ColorBoxGroupProps) => {
  let elements: JSX.Element[] = []   
  const intl = useIntl() 
  
  // init colors
  ThemeColors.forEach((item, index) => {
    item.name = intl.formatMessage({ id: item.id });
    elements.push(
      <ColorBox
        selected={item.color == props.color}
        key={'coloritem' + index}
        color={item.color}
        name={item.name}
        onSelectItem={(color: string) => {
          props.onSelect(color);
        }}
      />
    )      
  })   
  return (
    <>
      <div className="wardenSettingColorBoxGroup">{elements}</div>
    </>
  )
}


/**
* color component
* @param props 
* @returns 
*/
const ColorBox = (props: ColorBoxProps) => {
  let cls = 'wardenSettingColorBoxItem';
  if (props.selected) {
    cls += ' ' + 'wardenSettingColorBoxSelected';
  }
  const sty = {
    backgroundColor: props.color,
  }
  return (
    <Tooltip title={props.name}>
      <label
        onClick={() => {
          props.onSelectItem(props.color);
        }}
        className={cls}
        style={sty}
      >
        <AppIcon name="checked" size={12} />
      </label>
    </Tooltip>
  )
}

/**
 * skin group
 * @returns 
 */
const SkinGroupBox=()=>{
  const {loginConfig,setLoginConfig} = useLoginContext()
    const onSelectHandler=(e:Warden.IMenuSkin)=>{
        setLoginConfig({
          ...loginConfig,
          skinName:e.name,
          primaryColor:e.primaryColor,
          theme:e.theme || loginConfig.theme
        })   
  }

  let items:JSX.Element[]=[]
  
  let skins = skinsRecord[loginConfig.layoutType]

  skins.forEach((item,index)=>{
    const skin = getSkin(item)
    items.push(<SkinBox onSelect={onSelectHandler} key={"skin"+index} skin={skin!} selected={item == loginConfig.skinName} />)
  })

  return(
    <div>
      <Space wrap>
        {items}
      </Space>
    </div>
  )
}

/**
 * skin - item
 * @param props 
 * @returns 
 */
const SkinBox=(props:{skin:Warden.IMenuSkin,selected:boolean,onSelect:(value:Warden.IMenuSkin)=>void})=>{
  const intl = useIntl()
  const borderStyle = "2px solid " + (props.selected ? useToken().token.colorPrimary : useToken().token.colorBgLayout)

  let boxStyle:React.CSSProperties ={
    background: useToken().token.colorBgLayout,
    border:borderStyle    
  }  

  return(
    <div onClick={()=>{props.onSelect(props.skin)}} style={boxStyle} className="layoutSkinBoxItem">
      <SkinImage skin={props.skin} /><br />
      <span>
        {intl.formatMessage({id: 'skin.'+ props.skin.name+".label"})}
      </span>
    </div>)
}

/**
 * skin - image
 * @param props 
 * @returns 
 */
const SkinImage=(props:{skin:Warden.IMenuSkin})=>{  
    const {skin} = props;
    const [displaySrc, setDisplaySrc] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setDisplaySrc(null);
        const img = new Image();
        img.src = skin.icon!;
        img.onload = () => {
            setDisplaySrc(skin.icon!);
            setLoading(false);
        };
        return () => {
            img.onload = null;
            setLoading(false)
        };
    }, [skin]);

    return(
      <>
      {loading ? <label><Spin size="small" /></label> : <img src={skin.icon} alt={skin.name} />}
      </>
    )
}

const LoginLayoutGroup = (props: {
    layout: LoginLayoutType;
    onSelect: Function;
}) => {
  const intl = useIntl();
  let itemStyle1 = 'wardenSettingLayoutBoxItem' + ' ' + 'loginLayoutForNormal';
  let itemStyle2 = 'wardenSettingLayoutBoxItem' + ' ' + 'loginLayoutForCardColumn';
  let itemStyle3 = 'wardenSettingLayoutBoxItem' + ' ' + 'loginLayoutForFullColumn';
  switch (props.layout) {
    case 'cardColumn':
      itemStyle2 += ' ' + 'wardenSettingItemChecked';
      break;
    case 'fullColumn':
      itemStyle3 += ' ' + 'wardenSettingItemChecked';
      break;
    case 'normal':
    default:
      itemStyle1 += ' ' + 'wardenSettingItemChecked';
      break;
  }

  return (
    <>
      <div className="wardenSettingLayoutBoxGroup">
        <Tooltip
          title={intl.formatMessage({ id: 'login.setting.layout.type.normal' })}
        >
          <div
            className={itemStyle1}
            style={{color:useToken().token.colorPrimary}}
            onClick={() => {
              props.onSelect('normal');
            }}
          >            
            <AppIcon name="checked" size={14} key="topchecked" />
          </div>
        </Tooltip>
        <Tooltip
          title={intl.formatMessage({ id: 'login.setting.layout.type.card.column' })}
        >
          <div
            className={itemStyle2}
            style={{color:useToken().token.colorPrimary}}
            onClick={() => {
              props.onSelect('cardColumn');
            }}
          >
            <AppIcon name="checked" size={14} key="leftchecked" />
          </div>
        </Tooltip>
        <Tooltip
          title={intl.formatMessage({ id: 'login.setting.layout.type.full.column' })}
        >
          <div
            className={itemStyle3}
            style={{color:useToken().token.colorPrimary}}
            onClick={() => {
              props.onSelect('fullColumn');
            }}
          >
            <AppIcon name="checked" size={14} key="leftchecked" />
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default LoginSettingDrawer