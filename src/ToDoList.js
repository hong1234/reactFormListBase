import React from 'react';

const ToDoList = ({toDoList, deleteTask}) => {
    return (
        <div>
            {toDoList.map(todo => (
		        <tr key={todo.id}>                        
                    <td>{todo.task}</td>
                    <td onClick={() => deleteTask(todo.id)}>Delete</td>
                </tr>
            ))}
        </div>
    );
};

export default ToDoList;