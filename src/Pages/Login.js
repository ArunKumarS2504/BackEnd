import { useNavigate } from "react-router-dom";
import {TOKEN} from "../utils/AppContrains"

const Login = () =>{
    let navigate = useNavigate()
    const loginclick = () =>{
      localStorage.setItem(TOKEN,"dasfasdewdfwqcsacasdwedsadcsacwe" )
      alert(localStorage.getItem(TOKEN))
      navigate ("/")
    }

    return <div>
      Login
      <button onClick={()=>{loginclick()}}>Login</button>
    </div>

}

export default Login;
