
import { WardenGlobalThis,Warden } from "warden-layout"
import { defaultSkins } from "./components/AppSkin";
/**
 * umi 运行时配置
 * 请参考 https://umijs.org/docs/api/runtime-config
 */
export async function getInitialState():Promise<{
  spin?: JSX.Element;
  skins?:Warden.IMenuSkin[];
  currentUser?:Warden.IUser;
  getUserInfo?: () => Promise<Warden.IUser | undefined>;
}> {
    const getUserInfo = async() => {
      // 伪代码
      const userInfo = {
        username:"zhouwenqi",
        nickName:"Kick-Ass 2025",
        id:"2344234",
        headImgUrl:"https://api.dicebear.com/7.x/miniavs/svg?seed=" + Math.floor(Math.random()*40+1),
        dept:"R&D",
        post:"Developer",
        email:"zhouwenqi1982@live.com",
        authorities:["admin:help"],
        roles:["role:admin"],
        userType:"Tenant",
        createDate:"2024/12/20 18:27",
        modifyDate:"2024/12/24 13:19"
      }
      return userInfo
    }
    return {
      getUserInfo:getUserInfo,
      skins:defaultSkins,
      currentUser:await getUserInfo()
    }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function asyncDelayedFunction() {
  console.log("Waiting for 5 seconds...");
  await delay(5000); // 等待2秒（2000毫秒）
  console.log("5 seconds have passed!");
}