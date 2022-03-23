function NavBar({onLogout, userData}){
    console.log(userData)

    if(userData.isLoggedIn){
        return (<button onClick={onLogout}>Logout</button>)
    } else{
        return (<button onClick={onLogout}>Login</button>)
    }
}

export default NavBar;