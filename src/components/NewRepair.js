import { useParams } from "react-router-dom"

function NewRepair(){
    const { id } = useParams()

    return <><h1>New repair for car id {id}</h1></>
}

export default NewRepair