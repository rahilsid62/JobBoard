import {Link} from "react-router-dom";
const Login = ()=>{
    return (
        <div>
            <h1>This Login is being opened through the file</h1>
            <h2>Sorry, through the external file</h2>
            <Link to= '/register'>Register here</Link>
        </div>
    )
}

export default Login;