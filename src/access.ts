import { WardenGlobalThis,Warden } from "warden-layout"
export default function(initialState:{currentUser:Warden.IUser | undefined}) {    
    const currentUser = initialState.currentUser    
    WardenGlobalThis.currentUser = currentUser
    return {
        canRole: currentUser?.authorities.includes("admin:help")
    }
}