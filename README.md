# Rails walk through

# instructions on cloning a dpl react/rails repo
```
$ git clone <ssh-link> project-folder-name
$ cd project-folder-name

### RAILS ###

$ bundle (install ruby gems)

$ rails db:create db:migrate * db:seed

$ rails s -p 3001 (start server)

### REACT ###
//!!!CD INTO CLIENT

$ cd client
$ yarn
$ yarn start

### GITHUB ###
//add contributors
```

### setup

- to create a new project
- we are using postgresql as db
- --api renders app to send JSON(raw data) (no views/html pages)
- we can name the remote anything origin is the convention

```
$ rails new project-name-here -d postgresql --api
$ cd project-name-here
$ git add .
$ git commit -m 'init'
* option to push to github

$ git remote add origin git@github.com:jimibue/menu-app-sum22.git

$ rails db:create
# react will run on port 3000 so lets rails run on 3001
$ rails s -p 3001
(control c to stop server)

```
go to [localhost](http://localhost:3001/)


# Models

think of the model as the chef that is preparing the box food and know how to add and grab things from the fridge (db)

string
text
integer
bigint
float
decimal
numeric
datetime
time
date
datetime
timestamp
binary
primary_key
boolean


## create a model
```
rails g model model_name attr1:string attr2:text
# this create a migration file (the instruction to create the table in the DB)
# this also creates create the model file.

# need to migrate after a model is created
# running the migration creates the table
rails db:migrate

# delete a model
rails d model model_name
```

# Controllers
```
$ rails g controller api/pluralofwhateveryourmodelname
$ rails g controller foods

```

* note on api and routes
```ruby
  resources :foods
  
  # this is just a semi common convention
  # all of the route in here are going to be prepend with /api
  # controller need to be in the api folder in the controllers
  namespace :api do 
    # resources :dishes
    get '/dishes', to: 'dishes#index' # return all dishes
    post '/dishes', to: 'dishes#create' # create a dish
    get '/dishes/:id' to:'dishes#show' # return 1 dish
    put '/dishes/:id' to:'dishes#update' # update 1 dish
    delete '/dishes/:id' to:'dishes#destroy' # destroy 1 dish

  end
end
```

### Seeding DB
this is useful to have some default dummy
```
rails db:seed
```
add faker to gemfile to add more realistic data

```ruby
gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
```

* remember when adding a gem.  Stop your server and run `bundle`
* rember if using faker to add this to seeds
file
```ruby
require 'faker'
```

# setup react
in your rails directory

```
# nothing about calling this client just as accurate term
$ yarn create react-app client
$ cd client
$ yarn add axios react-router
$ yarn start
```

in package.json
```
...
"proxy":"http://localhost:3001"
...
```
* this all assuming your are running your rails s on port 3001

setup react router
```javascript
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

# GENERAL LOAD ON MOUNT

```javascript
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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

  // load data on mount
  useEffect(() => {
    getDishes();
  }, []);

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

  const renderDishes = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
   return dishes.map(d=>{
      return (
        <div style={{margin:'20px', border:'1px solid'}}>
          <h1>{d.name}: ${d.price}</h1>
          <p>{d.description}</p>
        </div>
      )
    })
 
  };

  return (
    <div className="App">
      <h1>Dishes</h1>
      <div>{renderDishes()}</div>
    </div>
  );
}

export default App;
```



```



