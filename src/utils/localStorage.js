export const getLocalTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const saveLocalTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};