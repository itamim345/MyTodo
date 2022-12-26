import Todo from "../models/todo";

export async function getTodoController(req, res){
    const {todoId} = req.params;
    const searchedTodo = await Todo.findById(todoId);
    res.json(searchedTodo)
}