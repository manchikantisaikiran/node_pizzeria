const mongoose = require('mongoose')

const ingridentSchema = mongoose.Schema({
    id: Number,
    tname: String,
    price: Number,
    image:String
})

const Ingridents = mongoose.model('Ingridents', ingridentSchema);

module.exports = Ingridents;