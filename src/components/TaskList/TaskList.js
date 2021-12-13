import React, {useState} from 'react';
import {H2Styled, TaskListStyled} from "./TaskListStyled";
import {useTaskContext} from "../../context/task_context";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import checkIcon from '../../assets/icons/icon-check.svg'
import deleteIcon from '../../assets/icons/trash-solid.svg'
import InfoBar from "../InfoBar/InfoBar";

const TaskList = () => {
    const {tasks, deleteTask, completedTask} = useTaskContext()
    const [isModal, setIsModal] = useState(false)
    const [isTask, setIsTask] = useState({})

    const taskHandler = (task) => {
        const {id, name, description, priority, completed, due_date} = task;
        if (completed) {
            return
        }

        setIsTask({
            id,
            name,
            description,
            priority,
            due_date
        })
        setIsModal(true)
    }

    return (
        <>
            <InfoBar/>
            <TaskListStyled>
                {isModal && <EditTaskModal setIsModal={setIsModal} isTask={isTask}/>}
                <ul>
                    {tasks && tasks.map((task, index) => {
                        const {completed} = task;
                        return (
                            <li key={index}>
                                <H2Styled
                                    onClick={() => taskHandler(task)}
                                    completed={completed}>
                                    {task.name}
                                </H2Styled>
                                <div>
                                    {!completed && <img src={checkIcon} alt='check-icon' onClick={() => completedTask(task.id)}/>}
                                    <img src={deleteIcon} alt='trash-icon' onClick={() => deleteTask(task.id)}/>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </TaskListStyled>
        </>
    );
};

export default TaskList;