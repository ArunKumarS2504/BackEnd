import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/',{email,password})
            .then((res)=>{
                if(res.data=='Exist'){
                    navigate('/home',{state:{id:email}})
                }
                else if(res.data='Not Exist'){
                    alert('User have not signed up')
                }
            })
        }
        catch(e){
            alert('Wrong Details')
            console.log(e)
        }
}


  return (

    <div className='login'>
        <h1>Login Page</h1>
        <form action='post'>
            <input type='email' placeholder='Enter Email'
             onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
             <input type='password' placeholder='Enter Password'
             onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
             <input type='submit' onClick={handleSubmit}/>
        </form>
        <br /><br />
        <p>OR</p>
        <br /><br />
        <Link to='/signup' >Signup</Link>
    </div>
  )
}

export default Login