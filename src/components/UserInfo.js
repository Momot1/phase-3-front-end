import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function UserInfo(){
    const { id } = useParams()
    const [userInfo, setUserInfo] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(resp => resp.json())
        .then(data => setUserInfo(data))
    }, [])

    console.log(userInfo)

    function onDeleteUserAccount(e){
        if(window.confirm("Are you sure you want to delete account? Cannot be undone!")){
            fetch(`http://localhost:9292/users/${id}`, {
                method: "DELETE"
            })
            .then(resp => resp.json())
            .then(() => {})
        }
    }

    return (
        <div>
            <h3>Name: {userInfo.first_name} {userInfo.last_name}</h3>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            <p>Birthday: {userInfo.birthday}</p>
            <button onClick={onDeleteUserAccount}>Delete Account</button>
        </div>
    )
}

export default UserInfo