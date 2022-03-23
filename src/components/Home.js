import { useState, useEffect } from "react"
import Car from "./Car"
import { useHistory } from "react-router-dom"

function Home({userData}) {
    const [cars, setCars] = useState([])

    const history = useHistory()

    useEffect(() => {
        fetch("http://localhost:9292/cars")
            .then(resp => resp.json())
            .then(cars => setCars(cars))
            .catch(error => console.log(error))
    
    }, [])

    const carElements = cars.map(car => 
        <Car
            key = {car.id} 
            id = {car.id}
            make = {car.make} 
            year = {car.year} 
            model = {car.model}
            repairs = {car.repairs}
            totalRepairCost = {car.total_repair_cost}
            onDeleteCar = {onDeleteCar}
            history = {history}
        />
    )

    
    function onDeleteCar(id){
        fetch(`http://localhost:9292/cars/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => {
            const updatedCars = cars.filter(car => car.id !== id)
            setCars(updatedCars)
        })
    }


    return (<>{carElements}</>)
}

export default Home;

