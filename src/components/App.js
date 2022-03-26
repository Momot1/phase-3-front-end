import React, {useState} from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login";
import Signup from "./Signup";
import NewCar from "./NewCar";
import NewRepair from "./NewRepair";
import NewCarOwner from "./NewCarOwner";
import UserInfo from "./UserInfo";


function App() {
  const [userData, setUserData] = useState({logged_in: false})

  function updateUserData(userInfo){
    setUserData(userInfo)
  }

  console.log(userData)


  return (
    <BrowserRouter>
      <NavBar 
        userData={userData} 
        onLogout={() => setUserData({logged_in: false})}
      />
      
      <Switch>
        <Route exact path="/"><Home userData={userData}/></Route>
        <Route path="/login"><Login onLogin={updateUserData}/></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/cars/new"><NewCar /></Route>
        <Route path="/cars/:id/repairs/new"><NewRepair /></Route>
        <Route path="/cars/:id/owner/new"><NewCarOwner /></Route>
        <Route path="/users/:id/about"><UserInfo /></Route>
        <Route path= "/"><h1>404 NOT FOUND</h1></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
