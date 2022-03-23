import React, {useState} from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"

function App() {
  const [userData, setUserData] = useState({isLoggedIn: false})

  return (
    <BrowserRouter>
      <NavBar userData={userData} onLogout={() => setUserData({...userData, isLoggedIn: false})} />
      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
