import { useState } from "react"
import { Link } from "react-router-dom"

function Signup(){
    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthday: "",
        group: "user"
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function onSignup(e){
        e.preventDefault()
        
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }

    return (
        <div>
            <form onSubmit={onSignup}>
                <label>First Name: </label>
                <input type="text" placeholder="First Name" value={formData.firstName} onChange={e => updateForm(e, "firstName")} required/><br/>
                <label>Last Name: </label>
                <input type="text" placeholder="Last Name" value={formData.lastName} onChange={e => updateForm(e, "lastName")} required/><br/>
                <label>Birthday: </label>
                <input type="date" placeholder="" value={formData.birthday} onChange={e => updateForm(e, "birthday")} required/><br/>
                <label>Email: </label>
                <input type="email" placeholder="" value={formData.email} onChange={e => updateForm(e, "email")} required/><br/>
                <label>Username: </label>
                <input type="text" placeholder="" value={formData.username} onChange={e => updateForm(e, "username")} required/><br/>
                <label>Password: </label>
                <input type="password" placeholder="" value={formData.password} onChange={e => updateForm(e, "password")} required/><br/>
                <button type="submit">Signup</button><br/>
                <Link to="/login">Already have an account? Login</Link>
            </form>
        </div>
    )
}

export default Signup