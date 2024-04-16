
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Error404 from "./Pages/Error404";
import  Home  from "./Pages/Home";
import Header from "./components/Header";
import ProtectedRouter from "./utils/ProtectedRouter";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
      {/* <ul>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/signup'>Signup</Link></li>          1.) First Step instead we have create a file and link all the path to the header file and import the file above the Routes..
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul> */}

      <Header/>
      </div>  
        <Routes>
          <Route path="/" element={<Login/>}      ></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          {/* <Route path="/dashboard/:id" element={<LoginOne/>}></Route> */}
     
          <Route path="/home" element={<ProtectedRouter> <Home/> </ProtectedRouter>}  ></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;


