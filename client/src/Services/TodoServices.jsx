import axios from "axios";

// get user token
// const user = JSON.parse(localStorage.getItem("todoapp"));

// default auth header
// axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;

//CRETE TODO
const createTodo = (data) => {
  return axios.post("http://localhost:8080/api/v1/todo/create", data);
};
//GET ALL TODO
const getAllTodo = (id) => {
  return axios.post(`http://localhost:8080/api/v1/todo/getAll/${id}`);
};

//update todo
const updateTodo = (id, data) => {
  return axios.patch(`http://localhost:8080/api/v1/todo/update/${id}`, data);
}

//delete todo
const deleteTodo = (id) => {
  return axios.post(`http://localhost:8080/api/v1/todo/delete/${id}`);
}
const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;
