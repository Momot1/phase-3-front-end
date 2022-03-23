import React, {useState} from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"

function App() {
  const [userData, setUserData] = useState({isLoggedIn: false})

  return (
    <BrowserRouter>
      <NavBar userData={userData} onLogout={() => setUserData({...userData, isLoggedIn: false})} />
      
      <Switch>
        <Route exact path="/"><Home /></Route>

        <Route path= "/"><h1>404 NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
