import { useContext } from "react";
import { context } from "../utils/Context";
import ChildOne from "./ChildOne";

function Child (){
    let state = useContext(context);

    return <div>
        Child Name:{state.name}<br></br>
        Child Age: {state.age}<br></br>
        <hr></hr>
        <ChildOne/>
    </div>
}

export default Child;