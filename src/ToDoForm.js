import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} placeholder="Enter task..."/>
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoForm;