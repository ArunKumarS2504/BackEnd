
import {createSlice} from '@reduxjs/toolkit'


export const personSlice = createSlice({
    name: "Auth",
    initialState:{
        name:"Kishore",
        role:"Developer",
        isAuthentication:false,
        email:"kishorejayen2020@gamil.com"
    },
    reducers:{
        userUpdate: (state, action) =>{
           if (action.payload.type === "nameChange"){
            state.name = action.payload.name
           }
        },
        authUpdate:(state, action)=>{
            alert(JSON.stringify(action))
        }
    }
})

export const {userUpdate, authUpdate} = personSlice.actions

export default personSlice.reducer