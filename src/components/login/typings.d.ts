declare interface LoginBoxProps {
    layoutType?:LoginLayoutType
    onLogin?:Function;
    onRegister?:MouseEventHandler<HTMLImageElement>;
    captchaUrl:string;
    loading:boolean;
    onRefreshCaptcha?:MouseEventHandler<HTMLImageElement>;
}
declare interface LoginConfig  {
    skinName?:string,
    primaryColor?:string,
    layoutType:LoginLayoutType,
    theme:"light"|"dark"
}

declare type LoginLayoutType = 'normal' | 'cardColumn' | 'fullColumn'