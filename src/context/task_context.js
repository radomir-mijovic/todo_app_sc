import React, {useContext, useReducer} from "react";
import {task_reducer} from "../reducer/task_reducer";

const initialValues = {}

const TaskContext = React.createContext()

export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(initialValues, task_reducer)


    return (
        <TaskContext.Provider
            value={{}}>
            {children}
        </TaskContext.Provider>
    )
};

export const useTaskContext = () => useContext(TaskContext);