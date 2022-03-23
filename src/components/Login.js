import { Link } from "react-router-dom"
import { useState } from "react"

function Login(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function checkLogin(e){
        e.preventDefault()

        fetch("http://localhost:9292/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(loggedIn => console.log(loggedIn))
    }

    return (
        <div>
            <form onSubmit={e => checkLogin(e)}>
                <label>Email: </label>
                <input type="text" placeholder="email/username" value={formData.username} onChange={e => updateForm(e, "username")}></input><br/>
                <label>Password: </label>
                <input type="password" placeholder="password" value={formData.password} onChange={e => updateForm(e, "password")}></input><br/>
                <button type="submit">Login</button><br/>
                <Link to="/signup">Don't have an account? Sign up</Link>
            </form>
        </div>
    )
}

export default Login 