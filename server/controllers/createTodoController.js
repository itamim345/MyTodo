import Todo from "../models/todo";

export async function createTodoController (req, res){
    const newTodo = new Todo ({
        title: req.body
    })
    const createdNewTodo = await newTodo.save();
    res.json(createdNewTodo);
}