const TodoModel = require('../models/todo-model');


exports.create = async (req, res, next) => {
    const { title, content } = req.body

    const newTodo = new TodoModel({ title, content })
    await newTodo.save()

    return res.status(201).json({
        message : "Todo was created.",
        todo : newTodo
    })
}

exports.getAll = async (req, res, next) => {
    const todos = await TodoModel.find({})

    return res.json({ todos })
}

exports.getByTitle = async (req, res, next) => {
    const { todoTitle } = req.params

    const todo = await TodoModel.findOne({ title : todoTitle })

    return res.json({ todo })
}

exports.updateByTitle = async (req, res, next) => {
    const { todoTitle } = req.params

    const updatedTodo = await TodoModel.updateOne({ title : todoTitle }, { $set : {...req.body} })

    return res.status(200).json({
        message : "The todo was updated.",
        updatedTodo
    })
}

exports.deleteByTitle = async (req, res, next) => {
    const { todoTitle } = req.params

    const todo = await TodoModel.findOne({ title : todoTitle })
    await todo.remove()

    return res.status(200).json({
        message : "The todo was deleted.",
        todo
    })
}

exports.deleteAll = async (req, res, next) => {
    await TodoModel.deleteMany({})

    const todos = await TodoModel.find({})

    return res.status(200).json({
        message : "All todos were deleted.",
        todos
    })
}