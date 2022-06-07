# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
# this will destroy all my dishes
Dish.destroy_all

100.times do |i|
 puts i
 Dish.create(name:Faker::Food.dish , price:('%.2f' % rand(5.00..30.00)).to_f , description:Faker::Food.description)
end

puts 'seed db'
puts "#{Dish.all.size} Dishes in db"
