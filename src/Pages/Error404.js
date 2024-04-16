import { Link } from "react-router-dom"
import Login from "./Login"


const Error404 = () => {
  return (
   <h1>*** ERROR 404?? Go To <Link  to={Login}>  </Link>HomePage***</h1>
  )
}

export default Error404