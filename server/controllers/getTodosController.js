import Todo from "../models/todo";

export async function getTodosController(req, res){
    const allTodos = await Todo.find();
    res.json(allTodos);
}