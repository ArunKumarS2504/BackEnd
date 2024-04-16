import { useContext } from "react";
import { context } from "../utils/Context";



function ChildOne() {

    let state = useContext(context);

  return (
     <div>
        Child Mail :{state.mail}<br></br>
        Child Number: {state.number}<br></br>
        
     </div>
  )
}

export default ChildOne