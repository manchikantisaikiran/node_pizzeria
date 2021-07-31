const express = require('express')

require('./db/mongoose')

const Pizza = require('./db/models/pizza');
const Ingridents = require('./db/models/ingredients');

const app = express();
const port = 3000;

app.use(express.json())

app.post('/pizza', async (req, res) => {
    const pizza = new Pizza(req.body);
    try {
        await pizza.save()
        res.status(201).send(pizza)
    } catch (e) {
        res.status(400).send(e);
    }
})

app.post('/ingridents', async (req, res) => {
    const ingridents = new Pizza(req.body);
    try {
        await ingridents.save()
        res.status(201).send(ingridents)
    } catch (e) {
        res.status(400).send(e);
    }
})

app.get('/pizza', async (req, res) => {
    try {
        const pizza = await Pizza.find();
        res.send(pizza)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/ingridents', async (req, res) => {
    try {
        const ingridents = await Ingridents.find();
        res.send(ingridents)
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(port, () => console.log('server is up on port ' + port))