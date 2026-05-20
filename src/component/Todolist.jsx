import React, { useState } from 'react'

function Todolist() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const addList = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        setList([...list, task]);
        setTask('');
    }

    const deleteTodo = (i) => {
        setList(list.filter((a, index) => index !== i));
    }

    return (
        <>
            <div>
                <h1>Todo List</h1>
                <form onSubmit={addList}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task..."
                    />
                    <button type='submit'>Add</button>
                </form>

                <ul>
                    {list.map((list, i) => (
                        <li key={i}>
                            {list}
                            <button onClick={() => deleteTodo(i)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todolist