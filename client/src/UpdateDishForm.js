import axios from "axios"
import { useState } from "react"

const UpdateDishForm = (props)=>{
    const [name, setName] = useState(props.name)
    const [price, setPrice] = useState(props.price)
    const [description, setDescription] = useState(props.description)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          let res = await axios.put(`/api/dishes/${props.id}`,{name, price, description})
          console.log(res)
          // res.data is the update dish
          props.updateDish(res.data)
        } catch(err){
          console.log(err)
        }

    }
    return (
        <div>
            <h1>Form Yo</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>price</p>
                <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <p>description</p>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
}
export default UpdateDishForm

// steps for creating a new item 
// go through these on by and test don't move until it working
// 1. get your form UI working
// 2. get your events/state hooked up
// 3. do the api call to add the thing 
// 4. update UI to show the new thing