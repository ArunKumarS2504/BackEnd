import { Navigate, useLocation } from "react-router-dom";
import {TOKEN} from "./AppContrains"



const ProtectedRouter = ({children})=>{

    let local = useLocation();
    let token = localStorage.getItem(TOKEN)

    if(!token){
        return <Navigate to ="/login" state ={{from:local}} />
    }
    return children
}

export default ProtectedRouter