const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pizza', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})