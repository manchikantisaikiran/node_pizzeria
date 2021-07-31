const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema({
    id: String,
    type: String,
    price: Number,
    image:String,
    description:String,
    ingredients:[],
    topping:Array

})

const pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = pizza;