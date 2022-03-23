import { Link } from "react-router-dom";

function NavBar({onLogout, userData}){
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/cars/new">New Car</Link>
            {userData.isLoggedIn ? <button onClick={onLogout}>Logout</button> : <button>Login</button>}
        </div>
    )
}

export default NavBar;