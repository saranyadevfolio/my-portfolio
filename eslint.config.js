import { useState } from "react";

function App() {
  // State for input field
  const [task, setTask] = useState("");

  // State for storing all tasks
  const [tasks, setTasks] = useState([]);

  // Function to add task
  const addTask = () => {
    // Prevent empty tasks
    if (task.trim() === "") return;

    // Create new task object
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };    
   
    // Add new task to array
    setTasks([...tasks, newTask]);

    // Clear input field
    setTask("");
  };


  // Function to delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };
  
  // Function to mark task complete
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((t) =>    
      t.id === id
        ? { ...t, completed: !t.completed }
        : t
    );

    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",       
        fontFamily: "Arial",
      }}
    >
      <h1>Task Manager</h1>

      {/* Input Section */}                    
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >       

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <button onClick={addTask }>    
          Add
        </button>
      </div>

      {/* Task List */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            {/* Task Text */}
            <span
              style={{
                textDecoration: t.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {t.text}
            </span>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={() => toggleComplete(t.id)}
              >
                {t.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() => deleteTask(t.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;  



