# express-todo-app

Project for backend development featuring CRUD operations, Express routes, MVC structure, and MongoDB.

This project was created as part of my backend development learning journey. It follows a structured architecture using routes, controllers, models, configuration files, and environment variables. The API supports complete CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Features

* Create a new todo
* Get all todos
* Get a specific todo
* Update a todo
* Delete a todo
* Environment variable configuration
* Organized project structure (Routes, Controllers, Models)

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

## API Endpoints

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| POST   | /createTodo     | Create a new todo              |
| GET    | /getTodos       | Retrieve all todos             |
| GET    | /getTodo/:id    | Retrieve a specific todo by ID |
| PUT    | /updateTodo/:id | Update a specific todo by ID   |
| DELETE | /deleteTodo/:id | Delete a specific todo by ID   |

