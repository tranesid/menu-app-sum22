class Api::DishesController < ApplicationController
    before_action :set_dish, only: [:show, :update, :destroy]
    # get '/dishes' #return all dishes
    def index
        render json: Dish.all
    end

     # get '/dishes/:id' #return one dishes
     # will get params[:id]
     def show
        render json: @dish
    end

      # post '/dishes' #create a dish
      # accpecting params = {dish: {name:string, price:float, description:string}}
    def create
        # create a dish in memory
        @dish = Dish.new(dish_params)
        #try to save to db
        if @dish.save
            render json: @dish
        else
            render json: @dish.errors.full_messages, status: 422
        end
    end

    # put '/dishes/:id' #updates a dish
    def update
        #try to update to db
        if @dish.update(dish_params)
            render json: @dish
        else
            render json: {errors: @dish.errors.full_messages}, status: 422
        end
    end

     # delete '/dishes/:id' #deletes a dish
    def destroy
      render json: @dish.destroy
    end

    # this methods only visible in class file
    private

    # set the dish before our show, update, and destroy methods
    def set_dish
        @dish = Dish.find(params[:id])
    end

    # make sure we got the correct params and remove any unwanted ones
    # accpecting params = {dish: {name:string, price:float, description:string}}
    # this return a hash {name:string, price:float, description:string} (if where given good params from client)
    def dish_params
        params.require(:dish).permit(:name, :price,:description)
    end
end
