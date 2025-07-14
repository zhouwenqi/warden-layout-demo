import { useConfigContext,Warden } from "warden-layout"

const SkinBlueSky=()=>(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/blue-sky-bg.png")',
        backgroundSize:"cover",
    }}>
    </div>
)
const SkinBlueChristmas=()=>(
    
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/blue-christmas-bg.png")',
        backgroundSize:"cover",
    }}>
    </div>
)
const SkinBlueLattice=()=>{
    const {config} = useConfigContext()
    const imgUri = config.layoutType == "leftMenu" ? 'url("/images/skins/blue-lattice-bg-left.png")' : 'url("/images/skins/blue-lattice-bg-top.png")'
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: imgUri,
        backgroundSize:"cover",
    }}>
    </div>)
}
const SkinStarJellyfish=()=>{
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/star-jellyfish-bg.jpg")',
        backgroundSize:"cover",
    }}>
    </div>)
}
const SkinStarNeon=()=>{
    const {config} = useConfigContext()
    const imgUri = config.layoutType == "leftMenu" ? 'url("/images/skins/star-neon-bg-left.jpg")' : 'url("/images/skins/star-neon-bg-top.jpg")'
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: imgUri,
        backgroundSize:"cover",
    }}>
    </div>)
}
const SkinPinkRomantic=()=>{
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/pink-romantic-bg.jpg")',
        backgroundSize:"cover",
    }}>
    </div>)
}
const SkinGreenMountain=()=>{
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/green-mountain-bg.jpg")',
        backgroundSize:"cover",
    }}>
    </div>)
}
const SkinPaintSplashing=()=>{
    const {config} = useConfigContext()
    const imgUri = config.layoutType == "leftMenu" ? 'url("/images/skins/paint-splashing-bg-left.jpg")' : 'url("/images/skins/paint-splashing-bg-top.jpg")'
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: imgUri,
        backgroundSize:"cover"
    }}>
    </div>)
}
const SkinOrangeBubble=()=>{
    return(
    <div style={{
        width:"100%",
        height:"100%",  
        backgroundImage: 'url("/images/skins/orange-bubble-bg.jpg")',
        backgroundSize:"cover",
    }}>
    </div>)
}


const defaultSkins:Warden.IMenuSkin[]=[
     {
        theme:"light",
        primaryColor:"#358cf1",
        name:"blueSky",
        label:"blueSky",
        content:<SkinBlueSky />,          
        icon:"/images/skins/blue-sky-small.png"
    },{
        theme:"light",
        primaryColor:"#3a8ef7",
        name:"blueChristmas",       
        label:"blueChristmas",   
        content:<SkinBlueChristmas />,
        icon:"/images/skins/blue-christmas-small.png"
    },
    {
        theme:"light",
        primaryColor:"#1d63b9",
        name:"blueLattice",
        label:"blueLattice",
        content:<SkinBlueLattice />,
        icon:"/images/skins/blue-lattice-small.png"
    },
    {
        theme:"light",
        primaryColor:"#ff677b",
        name:"pinkRomantic",
        label:"pinkRomantic",
        content:<SkinPinkRomantic />,
        icon:"/images/skins/pink-romantic-small.jpg"
    },
    {
        theme:"light",
        primaryColor:"#4e9c48",
        layoutType:"leftMenu",
        menuByPrimary:false,
        name:"greenMountain",
        label:"greenMountain",
        content:<SkinGreenMountain />,
        icon:"/images/skins/green-mountain-small.jpg"
    },
    {
        theme:"light",
        primaryColor:"#09a7e1",
        menuByPrimary:false,
        name:"paintSplashing",
        label:"paintSplashing",
        content:<SkinPaintSplashing />,
        icon:"/images/skins/paint-splashing-small.jpg"
    },
    {
        theme:"light",
        primaryColor:"#eb591d",
        layoutType:"leftMenu",
        menuByPrimary:false,
        name:"orangeBubble",
        label:"orangeBubble",
        content:<SkinOrangeBubble />,
        icon:"/images/skins/orange-bubble-small.jpg"
    },
    {
        theme:"dark",
        primaryColor:"#3987df",
        name:"starJellyfish",
        menuByPrimary:false,
        label:"starJellyfish",
        content:<SkinStarJellyfish />,
        icon:"/images/skins/star-jellyfish-small.jpg"
    },
    {
        theme:"dark",
        primaryColor:"#e53d32",
        name:"starNeon",
        label:"starNeon",
        content:<SkinStarNeon />,
        icon:"/images/skins/star-neon-small.jpg"
    }
]


export {defaultSkins}
