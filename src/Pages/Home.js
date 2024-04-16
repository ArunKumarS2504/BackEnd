

import React from 'react'
import { useReducer } from 'react';
import { reducerCallback } from '../utils/Reducer';
import{context} from "../utils/Context"
import Child from './Child';
import { useState } from 'react';

function Home() {
    let [state, callbackDispatch]= useReducer (reducerCallback, {name:"Kishore", age:21, gender:"Male", mail:"kishore2020@gmail.com", number:"8754713258"})
 

  return (<context.Provider value = {state}>
    <div><h2>****USE REDUCER****</h2>
<p>Name:{state.name}</p>
<p>Age:{state.age}</p>
<p>Gender:{state.gender}</p>
<p>E-mail:{state.mail}</p>
<p>Number:{state.number}</p>
<button  onClick={()=>{callbackDispatch({type:"change_age", new_age:state.age+2})}}>Change Age</button>
<button  onClick={()=>{callbackDispatch({type:"onChange_name", name:"Jayen"})}}>Change Name</button>
<button  onClick={()=>{callbackDispatch({type:"onChange_gender", gender:"Female"})}}>Change Gender</button>

<button  onClick={()=>{callbackDispatch({type:"change_mail", mail:"HarishJayen2023@gmail"})}}>Change E-mail</button>

<button  onClick={()=>{callbackDispatch({type:"change_number", number:"9500345426"})}}>Change Number</button>
<hr></hr>
<Child/>

    </div>
    </context.Provider>
  )
}

export default Home


