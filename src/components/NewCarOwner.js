import { useParams } from "react-router-dom"
import { useState } from "react"

function NewCarOwner(){
    const { id } = useParams()
    const [formData, setFormData] = useState({
        user_id: ""
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function onSellCar(e){
        e.preventDefault()

        fetch(`http://localhost:9292/cars/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={onSellCar}>
            <label>New Owner's user id: </label>
            <input type="number" placeholder="new owner id" value={formData.user_id} onChange={e => updateForm(e, "user_id")} required></input><br/>
            <button type="submit">Sell Car</button>
        </form>
    )
}

export default NewCarOwner