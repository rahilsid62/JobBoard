import {Link} from "react-router-dom";

const HomeLayout = ()=>{ 
    return (
        <div>
            <h1>This Homepage is being opened through the file</h1>
            <h2>Sorry, through the external file</h2>
            <Link to = '/register'> Register here </Link> <br></br>
            <Link to = '/login'> Login here </Link> <br></br>
            <Link to = '/dashboard'> Dashboard here </Link> <br></br>
            <Link to = '/landing'>Landing</Link>
        </div>
    )
}

export default HomeLayout;