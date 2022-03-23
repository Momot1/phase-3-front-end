import React from "react";
import { useHistory } from "react-router-dom"

//Sends users to homepage
function Logout(){
    const history = useHistory()

    return <>{history.push("/")}</> 
}

export default Logout