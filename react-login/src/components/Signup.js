import React, { useState } from 'react'
import  axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8000/signup',{email,password})
            .then(res=>{
                if(res.data=='Exist'){
                    alert('User Already Exists')
                }
                else if(res.data='NotExist'){
                    navigate('/home',{state:{id:email}})
                }
            })
            .catch(e=>{
                alert('Wrong Details')
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
}


  return (
    <div className='signup'>
    <h1>Signup Page</h1>
    <form action='post'>
        <input type='email' placeholder='Enter Email'
         onChange={(e)=>setEmail(e.target.value)}/><br /><br />
         <input type='password' placeholder='Enter Password'
         onChange={(e)=>setPassword(e.target.value)}/><br /><br />
         <input type='submit' onClick={handleSubmit}/>
    </form>
    <br /><br />
    <p>OR</p>
    <br /><br />
    <Link to='/' >Login</Link>
</div>
  )
}

export default Signup