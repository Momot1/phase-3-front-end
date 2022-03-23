import { useParams } from "react-router-dom"

function NewCarOwner(){
    const { id } = useParams()

    return <><h1>New car owner for id {id}</h1></>
}

export default NewCarOwner