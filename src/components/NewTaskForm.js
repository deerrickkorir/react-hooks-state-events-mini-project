import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to manage form inputs
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]); // Set default category

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 10000), // Generate a unique ID (replace with your preferred method)
      text: taskText,
      category: taskCategory
    };
    onTaskFormSubmit(newTask);
    // Reset form inputs after submission
    setTaskText("");
    setTaskCategory(categories[0]); // Reset category to the default
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
