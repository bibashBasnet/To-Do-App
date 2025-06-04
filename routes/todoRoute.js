const express = require('express')
const { createTodoController, getTodoController, deleteTodoController, updateTodoController } = require('../controllers/todoController');
//const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router()

//create todo
router.post('/create', createTodoController)


//get todo
router.post('/getAll/:userId', getTodoController)

//delete todo
router.post('/delete/:id',deleteTodoController)

//update todo
router.patch('/update/:id',updateTodoController)

module.exports = router;