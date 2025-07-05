import React from "react";

function TaskFilter({ setFilter, tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All ({total})</button>
      <button onClick={() => setFilter("completed")}>Completed ({completed})</button>
      <button onClick={() => setFilter("pending")}>Pending ({pending})</button>
    </div>
  );
}

export default TaskFilter;