import Repair from "./Repair"

function Car({year, make, model, repairs, totalRepairCost, id, onDeleteCar, history}){

    const repairElements = repairs.map(repair => <Repair key={repair.id} repair={repair}/>)

    return (
        <div>
            <h2>{year} {make} {model}</h2>
            <h3>Repairs. Total repair cost is ${totalRepairCost}</h3>
            <ul>{repairElements}</ul>
            <button onClick={() => onDeleteCar(id)}>Delete Car</button>
            <button onClick={() => history.push(`/cars/${id}/repairs/new`)}>New Repair</button>
            <button onClick={() => history.push(`/cars/${id}/owner/new`)}>Sell Car</button>
        </div>
    )
}

export default Car