//import the model

const Todo = require("../models/Todo");

//define router handler

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      data: todo,
      message: `Deleted Successfully`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server error",
      message: err.message,
    });
  }
};
