import AppDrawer from "@/components/AppDrawer"
import { useState } from "react"

export default()=>{    
    const [openDetails,setOpenDetails]=useState<boolean>(false)
    const [details,setDetails]=useState<string>()
    const showDetails = (record?:string)=>{
        setDetails(record)      
        setOpenDetails(true)
    }
    const detailsDrawer = <AppDrawer open={openDetails} setOpen={setOpenDetails} record={details} />
    return {showDetails,detailsDrawer}
}