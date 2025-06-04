import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import Card from '../../components/Card/Card';
import PopModal from '../../components/PopModel';
import TodoServices from '../../Services/TodoServices';

const TodoList = () => {
    const [allTask, setAllTask] = useState([]);
    //handle modal
    const openModalHandler = () => {
      setShowModal(true);
    };
  
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const id = userData && userData?.user.id;
      console.log(id);
      const getUserTask = async () => {
        try {
          const { data } = await TodoServices.getAllTodo(id);
          // console.log(data);
          setAllTask(data?.todos);
        } catch (error) {
          console.log(error);
        }
      };
      getUserTask();
    }, []);
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="add-task">
            <h1>Task List</h1>
          </div>
          {allTask?.map((task, i) => (
            <ul>
              <li>{task?.title}</li>
            </ul>
          ))}
        </div>
      </>
    );
}

export default TodoList
