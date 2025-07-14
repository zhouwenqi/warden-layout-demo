import { IMenuMessageEvent } from "warden-layout"

/**
 * 发送框架菜单消息
 * @param e 消息数据
 */
const sendMenuMessage=(e:IMenuMessageEvent)=>{
    const sender = new CustomEvent("menu-message",{detail:e})
    window.dispatchEvent(sender)

}

export {sendMenuMessage}