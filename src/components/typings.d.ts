declare interface AppChartProps extends React.HTMLAttributes<HTMLDivElement> {    
    ready?:Function
    finished?:Function
    option?:any
}
declare interface IDrawerProps<T> {
    open:boolean;    
    setOpen:Function;
    record?:T;
}