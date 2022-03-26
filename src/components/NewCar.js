import { useState } from "react"

function NewCar(){
    const [formData, setFormData] = useState({
        year: "",
        make: "",
        model: "",
        user_id: ""
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()

        fetch("http://localhost:9292/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(car => console.log(car))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Year: </label>
                <input type="number" placeholder="year" value={formData.year} onChange={e => updateForm(e, "year")} required></input><br/>
                <label>Make: </label>
                <input type="text" placeholder="make" value={formData.make} onChange={e => updateForm(e, "make")} required></input><br/>
                <label>Model: </label>
                <input type="text" placeholder="model" value={formData.model} onChange={e => updateForm(e, "model")} required></input><br/>
                <button type="submit">Add Car</button>
            </form>
        </div>
    )
}

export default NewCar