import React, {useState} from 'react';
import {AddNewTaskStyled} from "./AddNewTaskStyled";
import {useTaskContext} from "../../context/task_context";


const AddNewTask = () => {
    const {addNewTask} = useTaskContext()
    const [isTask, setIsTask] = useState('')

    const addNewTaskHandler = (e) => {
        e.preventDefault()
        addNewTask(isTask)
        setIsTask('')
    }

    return (
        <>
            <AddNewTaskStyled
                type='text'
                value={isTask}
                onChange={(e => setIsTask(e.target.value))}
                required={true}
                placeholder='Add New Task'/>
            {isTask &&
            <button onClick={addNewTaskHandler}>add</button> }
        </>
    );
};

export default AddNewTask;