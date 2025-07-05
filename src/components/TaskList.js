import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;