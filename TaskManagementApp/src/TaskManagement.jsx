import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // Manages the list of tasks
  const [editIndex, setEditIndex] = useState(-1); // Tracks which task is being edited
  const [formData, setFormData] = useState({ title: "", detail: "", date: "" }); // Manages form input

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...formData };

    if (editIndex === -1) {
      setTasks([...tasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? newTask : task
      );
      setTasks(updatedTasks);
      setEditIndex(-1);
    }

    setFormData({ title: "", detail: "", date: "" }); // Reset form after submit
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    const task = tasks[index];
    setFormData(task);
  };

  const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmDelete) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100">
        <h1 className="font-bold text-4xl mb-8 text-blue-700">Task Management App</h1>
      <div className="flex flex-row w-full max-w-4xl space-x-8 p-6">
        {/* Form Section */}
        <form
          className="flex flex-col w-1/2 p-6 space-y-4 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Task Title"
          />
          <textarea
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            name="detail"
            value={formData.detail}
            onChange={handleInputChange}
            placeholder="Task Details"
          />
          <input
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <button
            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 shadow-md"
            type="submit"
          >
            {editIndex === -1 ? "Add Task" : "Edit Task"}
          </button>
        </form>

        {/* Tasks Section */}
        <div className="flex flex-col w-1/2 space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-600">No tasks available</p>
          ) : (
            tasks.map((task, index) => (
              <div
                className="p-6 bg-white rounded-lg shadow-md flex justify-between items-start"
                key={index}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                  <p className="text-gray-600">{task.detail}</p>
                  <p className="text-sm text-gray-500">Due: {task.date}</p>
                </div>
                <div className="space-x-2">
                  <button
                    className="px-3 py-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300"
                    onClick={() => handleEditTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
