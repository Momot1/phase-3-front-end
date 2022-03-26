import { Link } from "react-router-dom";

function NavBar({onLogout, userData}){
    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/cars/new">New Car</Link>
            {userData.logged_in ? <button onClick={onLogout}>Logout</button> : <Link to="/login">Login</Link>}
            {userData.logged_in ? <Link to={`/users/${userData.id}/about`}>My Profile</Link> : null}
        </div>
    )
}

export default NavBar;