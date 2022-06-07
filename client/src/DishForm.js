import axios from "axios"
import { useState } from "react"

const DishForm = (props)=>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log({name, price, description})
        // axios call
        try{
          let res = await axios.post('/api/dishes',{name, price, description})
          props.addDish(res.data)
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
export default DishForm

// steps for creating a new item 
// go through these on by and test don't move until it working
// 1. get your form UI working
// 2. get your events/state hooked up
// 3. do the api call to add the thing 
// 4. update UI to show the new thing