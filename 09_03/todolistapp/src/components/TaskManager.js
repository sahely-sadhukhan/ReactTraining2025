import { useState } from 'react';

function TaskManager() {

    const [items, setItems] = useState([]);
    const [newTaskName, setNewTaskName] = useState("");
    
    function addTask(event) {
        event.preventDefault();
        if(newTaskName.trim() === "") {
            alert("Task detail cannot be empty");
            return;
        }
        let newTask = { id: items.length + 1, task: newTaskName, completed: false };
        setItems([...items, newTask]);
        setNewTaskName("");
    }
    function deleteTask(taskId) {
        const updatedItems = items.filter(item => item.id !== taskId);
        setItems(updatedItems);
    }

    let tRows = items.map( (a) => 
        <tr key={a.id} className="hover:bg-purple-50"> 
            <td>{a.task}</td>
            <td>{a.completed ? "Completed" : "Pending"}</td>
            <td><button onClick={() => deleteTask(a.id)}>Delete Task</button></td>
        </tr>
    );

    return (
        <div>
            <h1>Task Manager</h1><br/><br/>
            <div>
                <h2>Add a new Task!</h2>
                <form onSubmit={addTask}>
                    <input type="text" placeholder="Task Detail" value={newTaskName} 
                    onChange={(e) => setNewTaskName(e.target.value)} />
                    <button type="submit">Add Task</button>
                </form>
            </div>

            <h2>List of Tasks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task Detail</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tRows}
                </tbody>
            </table>
        </div>
    );
}
export default TaskManager;