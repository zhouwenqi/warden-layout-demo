
import { WardenGlobalThis } from "warden-layout"
/**
 * umi 运行时配置
 * 请参考 https://umijs.org/docs/api/runtime-config
 */
export async function getInitialState(){
    WardenGlobalThis.currentUser = {
      username:"zhouwenqi",
      nickName:"Kick-Ass 2025",
      id:"2344234",
      headImgUrl:"https://api.dicebear.com/7.x/miniavs/svg?seed=" + Math.floor(Math.random()*40+1),
      dept:"R&D",
      post:"Developer",
      email:"zhouwenqi1982@live.com",
      access:["admin:help","admin:user","admin:create"],
      roles:["role:admin"],
      userType:"Tenant",
      createDate:"2024/12/20 18:27",
      modifyDate:"2024/12/24 13:19"
    }
}