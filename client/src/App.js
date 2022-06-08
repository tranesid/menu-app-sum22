import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DishForm from "./DishForm";
import UpdateDishForm from "./UpdateDishForm";

// # get '/dishes',  # return all dishes
// # post '/dishes',  # create a dish {name(required), price, descrption}
// # get '/dishes/:id',  # return 1 dish
// # put '/dishes/:id',  # update 1 dish {name(required), price, descrption}
// # delete '/dishes/:id',  # destroy 1 dish

function App() {
  // Three pieces of usefull state
  const [dishes, setDishes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('asdfasdf')

  // load data on mount
  useEffect(() => {
    getDishes();
  }, []);

  const addDish = (dish)=>{
    setDishes([dish, ...dishes])
  }

  const getDishes = async () => {
    try {
      let res = await axios.get("/api/dishes");
      // it is not always going to be res.data
      console.log('res', res)
      setDishes(res.data);
      setLoading(false);
    } catch (err) {
      // check
      alert('error occured')
      setError(err);
      setLoading(false);
    }
  };

  const deleteDish = async (id)=>{
     try{
       let res = await axios.delete(`/api/dishes/${id}`)
       // if successful remove from UI (assume this will work)
       let newDishes = dishes.filter(d=> d.id !== res.data.id)
       setDishes(newDishes)
     } catch(err){
         alert('err occured')
     }
  }

  const updateDish = (dish) =>{
     let updatedDishes = dishes.map(d=> d.id === dish.id ? dish : d)
     setDishes(updatedDishes)
  }

  const renderDishes = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
   return dishes.map(d=>{
      return (
        <div key={d.id} style={{margin:'20px', border:'1px solid'}}>
          <h1>{d.name}: ${d.price}</h1>
          <p>{d.description}</p>
          <button onClick={()=> deleteDish(d.id)}>delete</button>
          <UpdateDishForm {...d} updateDish={updateDish} />
        </div>
      )
    })
 
  };

  return (
    <div className="App">
      <DishForm addDish={addDish}/>
      <h1>Dishes</h1>
      <div>{renderDishes()}</div>
    </div>
  );
}

export default App;