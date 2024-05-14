import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* Map over the tasks array and render a Task component for each task */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
