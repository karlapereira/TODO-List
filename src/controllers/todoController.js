exports.get = (req, res) => {
    const id = req.params.id;
    console.log("Get");
    res.send(`OK GET id={id}`);
}

exports.getAll = (req, res) => {
    console.log("GetAll");
    res.send("OK Get All");
}

exports.add = (req, res) => {
    console.log("Add");
    res.send("OK Get Add");
}

exports.update = (req, res) => {
    console.log("Update");
    res.send("OK Update");
}

exports.delete = (req, res) => {
    console.log("Delete");
    res.send("OK Delete");
}