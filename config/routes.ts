/**
 * 路由
 * 
 */
export default [
    { path: "/", redirect:"/main", name:"Home",  },
    { path: "/docs", component: "docs", name:"Docs" },
    { path: "/404", component: "404", layout:false},
    { path: "/403", component: "403", layout:false},
    { path: "/login", component: "login"},
    { path: "/main", component:"@/layouts/main", name:"Main", routes:[
        { path: "/main/", redirect:"/main/discover"},             
        { path: "/main/discover", name:"Discover", icon:"svg@/svg/menu/main-discover", routes:[
            { path: "/main/discover/", redirect:"/main/discover/introduce"},
            { path: "/main/discover/welcome", component: "./main/discover/welcome/index",name:"Welcome", badge:"10", icon:"svg@/svg/menu/main-welcome"},
            { path: "/main/discover/introduce", component: "./main/discover/introduce",name:"Introduce", tag:"New..", icon:"svg@/svg/menu/main-home"}, 
            { path: "/main/discover/message", component: "./main/discover/message",name:"Message", badge:{position:"left"}, icon:"svg@/svg/menu/main-message"},
            { path: "/main/discover/general", name:"general",icon:"svg@/svg/menu/main-general",routes:[
                { path: "/main/discover/general/", redirect:"/main/discover/general/basic"},
                { path: "/main/discover/general/basic", component:"./main/discover/general/basic",name:"Basic",icon:"svg@/svg/menu/main-basic"},                                
                { path: "/main/discover/general/container", component:"./main/discover/general/container",name:"Container",icon:"svg@/svg/menu/bookmark"},
                { path: "/main/discover/general/dynamic", component:"./main/discover/general/dynamic", name:"Dynamic",icon:"svg@/svg/menu/code"}
            ]},
            { path: "/main/discover/components",name:"Components", icon:"svg@/svg/menu/main-components", routes:[
                { path: "/main/discover/components/", redirect:"/main/discover/components/table"},
                { path: "/main/discover/components/table", component:"./main/discover/components/table", name:"Table", icon:"svg@/svg/menu/main-table"},
                { path: "/main/discover/components/form", component:"./main/discover/components/form", name:"Form", icon:"svg@/svg/menu/main-form"},
                { path: "/main/discover/components/card", component:"./main/discover/components/card", name:"Card", icon:"svg@/svg/menu/main-card"},
                { path: "/main/discover/components/list", component:"./main/discover/components/list", name:"List", icon:"svg@/svg/menu/main-list"}
            ]}           
        ]},
        { path: "/main/guide", name:"Guide", icon:"svg@/svg/menu/main-guide", routes:[
            { path: "/main/guide/layout", component: "./main/guide/layout",name:"Layout", icon:"svg@/svg/menu/main-layout"},
            { path: "/main/guide/toolbar", component: "./main/guide/toolbar",name:"Toolbar", icon:"svg@/svg/menu/main-toolbar"},
            { path: "/main/guide/", redirect:"/main/guide/config"},
            { path: "/main/guide/config",name:"Config", icon:"svg@/svg/menu/main-config", routes:[
                { path: "/main/guide/config/", redirect:"/main/guide/config/file"},
                { path: "/main/guide/config/file", component:"./main/guide/config/file", name:"File", icon:"svg@/svg/menu/main-file"},
                { path: "/main/guide/config/attribute", component:"./main/guide/config/attribute", name:"Attribute", icon:"svg@/svg/menu/main-attr"},
                { path: "/main/guide/config/setting", component:"./main/guide/config/setting", name:"Setting", icon:"svg@/svg/menu/setup-horizontal"}
            ]},            
            { path: "/main/guide/locale", component: "./main/guide/locale",name:"Locale",icon:"svg@/svg/menu/main-locale"},
            { path: "/main/guide/user", component: "./main/guide/user",name:"User",icon:"svg@/svg/menu/users"}
        ]},
        { path: "/main/switch", component: "./main/switch",name:"Switch", icon:"svg@/svg/menu/main-switch",},
    ]},
    { path: "/company", component:"@/layouts/company", name:"Company", routes:[
        { path: "/company/", redirect:"/company/control"},        
        { path: "/company/control", name:"Control", icon:'ReconciliationOutlined', routes:[
            { path: "/company/control/", redirect:"/company/control/dashboard"},
            { path: "/company/control/message", component: "./company/control/message",name:"Message",icon:'BellOutlined'},
            { path: "/company/control/dashboard", name:"Dashboard",icon:"DashboardOutlined", routes:[
                { path: "/company/control/dashboard/", redirect:"/company/control/dashboard/workbench"},
                { path: "/company/control/dashboard/workbench", component: "./company/control/dashboard/workbench",name:"Workbench",icon:"DesktopOutlined"},
                { path: "/company/control/dashboard/monitoring", component: "./company/control/dashboard/monitoring",name:"Monitoring",icon:"FundProjectionScreenOutlined"},
                { path: "/company/control/dashboard/logs", component: "./company/control/dashboard/logs",name:"Logs",icon:"ProfileOutlined"},
            ]},
            { path: "/company/control/report", name:"Report",icon:"BarChartOutlined", routes:[
                { path: "/company/control/report/", redirect:"/company/control/report/payment"},
                { path: "/company/control/report/payment", component: "./company/control/report/payment",name:"Payment",icon:"AccountBookOutlined"},
                { path: "/company/control/report/sms", component: "./company/control/report/sms",name:"SMS", icon:"MessageOutlined"}
            ]}
        ]},
        { path: "/company/transaction", name:"Transaction", icon:"ShopOutlined",routes:[
            { path: "/company/transaction/", redirect:"/company/transaction/action"},
            { path: "/company/transaction/project", component: "./company/transaction/project",name:"Project",icon:"InboxOutlined"},
            { path: "/company/transaction/order", component: "./company/transaction/order",name:"Order",icon:"CarryOutOutlined"},
            { path: "/company/transaction/product", component: "./company/transaction/project",name:"Product",icon:"ProductOutlined"},
            { path: "/company/transaction/action", name:"Action",icon:"GiftOutlined", routes:[
                { path: "/company/transaction/action/", redirect:"/company/transaction/action/task"},
                { path: "/company/transaction/action/task", component: "./company/transaction/action/task",name:"Task",icon:"ProfileOutlined"},
                { path: "/company/transaction/action/coupon", component: "./company/transaction/action/coupon",name:"Coupon",icon:"MoneyCollectOutlined"},
                { path: "/company/transaction/action/ads", component: "./company/transaction/action/ads",name:"Ads",icon:"TrophyOutlined"}
            ]}
        ]},
        { path: "/company/system", name:"System",icon:"SettingOutlined", routes:[
            { path: "/company/system/", redirect:"/company/system/profile"},            
            { path: "/company/system/profile", component: "./company/system/profile",name:"Profile",icon:"UserOutlined"},
            { path: "/company/system/basic", component: "./company/system/basic",name:"Basic",icon:"CodeOutlined"},
            { path: "/company/system/important", name:"Important",icon:"UserOutlined", routes:[
                { path: "/company/system/important/", redirect:"/company/system/important/configuration"}, 
                { path: "/company/system/important/configuration", component: "./company/system/important/configuration",name:"Configuration",icon:"ControlOutlined"},
                { path: "/company/system/important/dept", component: "./company/system/important/dept",name:"Dept",icon:"umi@wallet"},
            ]},
            { path: "/company/system/security", name:"Security",icon:"SafetyOutlined", routes:[
                { path: "/company/system/security/", redirect:"/company/system/security/user"}, 
                { path: "/company/system/security/user", component: "./company/system/security/user",name:"User",icon:"TeamOutlined"},
                { path: "/company/system/security/role", component: "./company/system/security/role",name:"Role",icon:"SolutionOutlined",access:"canRole"},
                { path: "/company/system/security/permission", component: "./company/system/security/permission",name:"Permission",icon:"umi@scale"},
            ]},
            
        ]},
        { path: "/company/switch", component: "./company/switch",name:"Switch",icon:"NodeIndexOutlined"}
        
    ]}
]