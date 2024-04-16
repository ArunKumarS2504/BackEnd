// import React from 'react'



// const Dashboard = () => {
//   return (
//     <>
//    <h1>Here Comes your Dashboard</h1>

//    </>
//   )
// }

// export default Dashboard




import { useSelector } from "react-redux";

const Dashboard = (props)=>{
const name = useSelector ((state) => state.baseVal.name);

return<div>
  Dashboard
  <h2>Name:{name}</h2>
</div>
}

export default Dashboard;







{/* 
{JSON.stringify(param)}
    {/* <p>{JSON.stringify(searchParams.length("name"))}</p> */}
    {/* <p>name:{name}</p>
    <p>age:{name}</p>
    <p>gender:{name}</p>
    </div> */}
{/* 
import{useParams, useSearchParams}  from "react-router-dom"

const Dashboard = (props) => {
let param = useParams();
let [searchParams] = useSearchParams();


let name = searchParams.get("name")
let age = searchParams.get("age")
let gender = searchParams.get("gender")  */}
