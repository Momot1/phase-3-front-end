import { useState, useEffect } from "react"

function Home() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cars")
            .then(resp => resp.json())
            .then(data => setCars(data))
            .catch(error => console.log(error))
    
    }, [])

    console.log(cars)


    return (<><h1>TEST</h1></>)
}

export default Home;

