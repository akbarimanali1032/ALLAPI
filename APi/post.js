const express = require('express');
const app = express();
const router = express.Router();

// Schema Added...
`const TodoSchema = require('../MODEL/Schema');`

// post create a todo
router.post('/add-todo', async (req, res) => {
    try {
        const todoAdd = await TodoSchema.create({
            addres: req.body.addresTodo,
            phon: req.body.phonTodo,
            email: req.body.emailTodo,
            gender: req.body.genderTodo
        })
        return res.send(todoAdd);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

// getAPI list todo
router.get('/list-todo', async (req, res) => {
    try {
        const listTodo = await TodoSchema.find({});
        return res.send(listTodo);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

// EDITapi get edit data todo
router.get('/get-edit-todo/:id', async (req, res) => {
    try {
        const listTodo = await TodoSchema.findById(req.params.id);
        return res.send(listTodo);
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

// PUT update data todo
router.put('/update-todo/:id', async (req, res) => {
    try {
        const listTodo = await TodoSchema.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        console.log(listTodo);
        return res.send({ message: "update done" });
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

// DeLETeapi
router.delete('/delete-list/:id', async (req, res) => {
    try {
        const removeStudent = await TodoSchema.findByIdAndDelete(req.params.id);
        console.log(removeStudent);
        res.send({ message: 'The data was removed' })
    } catch (error) {
        return res.send(error)
    }
})

module.exports = router;