//import the model

const Todo = require("../models/Todo");

//define router handler

exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
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

exports.getTodoById = async (req, res) => {
  try {
    //fetch item basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }
    //data for given id found
    return res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
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
