import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import TodoServices from "../../Services/TodoServices";
import Card from "../../components/Card/Card";
import PopModal from "../../components/PopModel";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTask, setFilteredTask] = useState([]);
  //handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };

  const todo = async () => {
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
  } 

  useEffect(() => {
    todo();
  },[])

useEffect(() => {
  if (!searchTerm) {
    setFilteredTask([]);
    return;  // return here to stop if no search term
  }
  
  const results = allTask.filter((task) => {
    const text = `${task.title} ${task.description}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });
  setFilteredTask(results);
}, [searchTerm, allTask]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
          <button className=" btn btn-primary" onClick={openModalHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {allTask && <Card allTask={filteredTask.length > 0 ? filteredTask : allTask} />}
        {/* ========== modal =========== */}
        <PopModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          fetchToDo = {todo}
        />
      </div>
    </>
  );
};

export default HomePage;
