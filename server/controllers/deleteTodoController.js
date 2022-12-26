import Todo from "../models/todo";

export async function deleteTodoController(req, res){
    const todoId = req.params.todoId;
    const deletedTodo = Todo.findByIdAndDelete(todoId);
    res.status(201).json(deletedTodo);
}
