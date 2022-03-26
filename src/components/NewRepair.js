import { useParams } from "react-router-dom"
import { useState } from "react"

function NewRepair(){
    const { id } = useParams()
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        car_id: id,
        miliage: ""
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function onAddNewRepair(e){
        e.preventDefault()

        fetch(`http://localhost:9292/cars/${id}/repairs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <form onSubmit={onAddNewRepair}>
                <label>Repair Name: </label>
                <input type="text" placeholder="repair name" value={formData.name} onChange={e => updateForm(e, "name")} required></input><br/>
                <label>Price: </label>
                <input type="number" placeholder="repair price" value={formData.price} onChange={e => updateForm(e, "price")} required></input><br/>
                <label>Miliage: </label>
                <input type="number" placeholder="car miliage" value={formData.miliage} onChange={e => updateForm(e, "miliage")} required></input><br/>
                <button type="submit">Add Repair</button>
            </form>
        </div>
    )
}

export default NewRepair