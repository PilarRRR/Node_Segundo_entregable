const { Router } = require('express')
const ToDo = require('../models/toDo.model')

const router = Router()

router.get('/api/v1/toDo', async (req, res) => {
    try {
        const toDos = await ToDo.findAll({
            attributes: ["title", "description", "status"],
        }); 
        res.json(toDos);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post('/api/v1/toDo', async (req, res) => {
    try {
        const newToDo = req.body;
        const result = await ToDo.create(newToDo);
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/api/v1/toDo/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const data = req.body;
        await ToDo.update(data, {
            where: {id}
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete('/api/v1/toDo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await ToDo.destroy({
            where: {id},
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;