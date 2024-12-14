/**
 * 菜单路由
 * 绑定菜单的路由
 */
export default [
    {path:"/main/", redirect:"/main/control"},    
    {path:"/main/control", name:"Control", icon: 'ReconciliationOutlined', routes:[
        {path:"/main/control/",redirect:"/main/control/dashboard"},
        {path:"/main/control/message",component:"@/pages/message/index",name:"Message",icon:'BellOutlined',badge:5},
        {path:"/main/control/dashboard",name:"Dashboard",icon:"DashboardOutlined", routes:[
            {path:"/main/control/dashboard/",redirect:"/main/control/dashboard/workbench"},
            {path:"/main/control/dashboard/workbench",component:"@/pages/dashboard/workbench/index",name:"Workbench",icon:"DesktopOutlined", tag:"New"},
            {path:"/main/control/dashboard/monitoring",component:"@/pages/dashboard/monitoring/index",name:"Monitoring",icon:"FundProjectionScreenOutlined"},
            {path:"/main/control/dashboard/logs",component:"@/pages/dashboard/logs/index",name:"Logs",icon:"ProfileOutlined"}
        ]},
        {path:"/main/control/report",name:"Report", icon:"BarChartOutlined",routes:[
            {path:"/main/control/report/",redirect:"/main/control/report/payment"},
            {path:"/main/control/report/payment",component:"@/pages/report/payment/index",name:"Payment",icon:"AccountBookOutlined"},
            {path:"/main/control/report/visit",component:"@/pages/report/visit/index",name:"Visit",icon:"FunnelPlotOutlined"}
        ]},        
    ]},
    {path:"/main/transaction", name:"Transaction", icon:"ShopOutlined",routes:[
        {path:"/main/transaction/",redirect:"/main/transaction/action/coupon"},
        {path:"/main/transaction/project",component:"@/pages/project/index",name:"Project",icon:"InboxOutlined"},
        {path:"/main/transaction/order",component:"@/pages/order/index",name:"Order",icon:"CarryOutOutlined"},
        {path:"/main/transaction/product",component:"@/pages/product/index",name:"Product",icon:"ProductOutlined"},
        {path:"/main/transaction/action",name:"Action",icon:"GiftOutlined",routes:[
            {path:"/main/transaction/action/",redirect:"/main/transaction/action/ads"},
            {path:"/main/transaction/action/ads",component:"@/pages/action/ads/index",name:"Ads",icon:"TrademarkCircleOutlined"},
            {path:"/main/transaction/action/coupon",component:"@/pages/action/coupon/index",name:"Coupon",icon:"MoneyCollectOutlined"}
        ]}
    ]},
    {path:"/main/system", name:"System",icon:"SettingOutlined",routes:[
        {path:"/main/system/",redirect:"/main/system/profile"},
        {path:"/main/system/profile",component:"@/pages/profile/index",name:"Profile",icon:"UserOutlined"},
        {path:"/main/system/important",name:"Important",access:["admin:help"],icon:"MacCommandOutlined",routes:[
            {path:"/main/system/important/",redirect:"/main/system/important/config"},
            {path:"/main/system/important/config",component:"@/pages/important/config/index",name:"Config",icon:"ControlOutlined"},
            {path:"/main/system/important/dept",component:"@/pages/important/dept/index",name:"Dept",icon:"ApartmentOutlined"},
            {path:"/main/system/important/post",component:"@/pages/important/post/index",name:"Post",icon:"ContactsOutlined"}
        ]},
        {path:"/main/system/security",name:"Security",icon:"SafetyOutlined",routes:[
            {path:"/main/system/security/",redirect:"/main/system/security/user"},
            {path:"/main/system/security/user",component:"@/pages/security/user/index",name:"User",icon:"TeamOutlined"},
            {path:"/main/system/security/role",component:"@/pages/security/role/index",name:"Role",icon:"SolutionOutlined"}
        ]}
    ]},
    {path:"/main/help",component:"@/pages/help/index",name:"Help",access:["admin:help"],icon:"QuestionCircleOutlined"},
    {path:"/main/login",component:"@/pages/login",layout:false},
]