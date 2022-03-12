import React, {useState, useEffect} from "react";

function App() {
  const [messages, setMessages] = useState("")

  useEffect(() => {
    fetch('http://localhost:9292')
    .then(resp => resp.json())
    .then(data => setMessages(data.message))
    .catch(error => console.log(error))
  })

  return (
    <div className="App">
      <h1>{messages}</h1>
      <h2>hello</h2>
    </div>
  );
}

export default App;


// Cars you own and keep track of rapairs and maintenance you've done