const Todo = require("../models/Todo"); 

module.exports = class TodoService {

    static async getTodo(id){
        try {
            const todo = await Todo.find(
                filter = {"_id": id}
            );
            return todo;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async getAllTodos(){
        try {
            const allTodos = await Todo.find();
            return allTodos;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async addTodo(data){
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            }
            const response = await new Todo(newTodo).save();
            return response
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTodo(data){
        try {
            const todo = await Todo.updateOne(
                filter = {"_id": id}, 
                update = data
            );
            return todo;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async deleteTodo(id){
        try {
            const todo = await Todo.deleteOne({"_id": id});
            return todo;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }
}
