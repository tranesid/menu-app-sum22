# Rails walk through

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
    get '/dishes', to: 'dishes#index'
  end
end
```
https://api.twitter.com/2/tweets/counts/all
