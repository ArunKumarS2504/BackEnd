

import {  useDispatch, useSelector } from "react-redux";
import { userUpdate} from "../utils/ReduxState";


 const Signup = (props) =>{

  const name = useSelector ((state) => state.baseVal.name)
  const dispatch = useDispatch();

  const nameChange = () =>{
    dispatch(userUpdate({type: "nameChange", name:"Harish Jayen"}))
  }

  return <div>
    <h2>Name: {name}</h2>
    <button onClick={()=> {nameChange()}}>Name Change</button>
  </div>
};

export default Signup;
