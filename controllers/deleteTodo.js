const Todo = require("../models/Todo");

exports.deleteTodo = async(req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id: id});
        res.json({
            success:true,
            message:"Todo DELETED",
        })
       
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}