import { useState } from 'react'
import Signup from './Signup'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Login from './Login'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>

  
      
    
  )
}

export default App
