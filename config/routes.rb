Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :foods
  
  # this is just a semi common convention
  # all of the route in here are going to be prepend with /api
  # controller need to be in the api folder in the controllers
  namespace :api do 
    # resources :dishes
    get '/dishes', to: 'dishes#index' # return all dishes
    post '/dishes', to: 'dishes#create' # create a dish {name(required), price, descrption}
    get '/dishes/:id', to:'dishes#show' # return 1 dish
    put '/dishes/:id', to:'dishes#update' # update 1 dish {name(required), price, descrption}
    delete '/dishes/:id', to:'dishes#destroy' # destroy 1 dish
  end
end

# get '/dishes',  # return all dishes
# post '/dishes',  # create a dish {name(required), price, descrption}
# get '/dishes/:id',  # return 1 dish
# put '/dishes/:id',  # update 1 dish {name(required), price, descrption}
# delete '/dishes/:id',  # destroy 1 dish

#LOTS OF CHANGES BUT NOT DONE WITH FEATURE