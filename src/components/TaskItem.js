import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h4>{task.title}</h4>
        {task.description && <p>{task.description}</p>}
        <small>{new Date(task.createdAt).toLocaleString()}</small>
      </div>
      <div className="task-actions">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;