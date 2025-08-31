import { defaultSkins } from "@/components/AppSkin";

const getSkin=(name:string) => {
    for(var i=0;i<defaultSkins.length;i++){
        if(defaultSkins[i].name == name){
            return defaultSkins[i]
        }
    }
}

export {getSkin}