import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { getLocalTasks, saveLocalTasks } from "./utils/localStorage";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [tasks, setTasks] = useState(getLocalTasks());
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveLocalTasks(tasks);
  }, [tasks]);

  if (!username) {
    return <Login setUsername={setUsername} />;
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Welcome, {username}!</h1>
      <TaskForm setTasks={setTasks} />
      <TaskFilter setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;