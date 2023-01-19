const TodoService = require("../services/TodoService");

exports.get = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await TodoService.getTodo(id);
        if(!todo) {
            return res.status(404).json("Don't find this id todo.");
        }
        res.status(200).json(todos);
    } catch (error) {
        
    }

    TodoService.get(id)
    console.log("Get");
    res.send(`OK GET id={id}`);
}

exports.getAll = async (req, res) => {
    try{
        const todos = await TodoService.getAllTodos();
        if(!todos) {
            return res.status(404).json("There are no todos published yet!");
        }
        res.status(200).json(todos);
    } catch(err){
        return res.status(500).json({error: err});
    }

    console.log("GetAll");
    res.send("OK Get All");

}

exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.createdTodo(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        return res.status(500).json({error: err});
    }
    console.log("Add");
    res.send("OK Get Add");
}

exports.update = async (req, res) => {
    try {
        const updatedTodo = await TodoService.updatedTodo(req.body);
        res.status(200).json(updatedTodo);
    } catch (error) {
        return res.status(500).json({error: err});
    }
    console.log("Update");
    res.send("OK Update");
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTodo = await TodoService.updatedTodo(id);
        res.status(200).json(deleteTodo);
    } catch (error) {
        return res.status(500).json({error: err});
    }
    console.log("Delete");
    res.send("OK Delete");
}
