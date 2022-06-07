Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :foods
  
  # this is just a semi common convention
  # all of the route in here are going to be prepend with /api
  # controller need to be in the api folder in the controllers
  namespace :api do 
    # resources :dishes
    get '/dishes', to: 'dishes#index' # return all dishes
    post '/dishes', to: 'dishes#create' # create a dish
    get '/dishes/:id', to:'dishes#show' # return 1 dish
    put '/dishes/:id', to:'dishes#update' # update 1 dish
    delete '/dishes/:id', to:'dishes#destroy' # destroy 1 dishs
  end
end
