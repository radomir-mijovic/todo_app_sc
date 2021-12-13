import React, {useState} from 'react';
import {AddButton, AddNewTaskStyled, AddNewTaskWrapper} from "./AddNewTaskStyled";
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
        <AddNewTaskWrapper>
            <AddNewTaskStyled
                type='text'
                value={isTask}
                onChange={(e => setIsTask(e.target.value))}
                maxLength={100}
                placeholder='Add New Task'/>
            {isTask &&
            <AddButton onClick={addNewTaskHandler}>add</AddButton> }
        </AddNewTaskWrapper>
    );
};

export default AddNewTask;