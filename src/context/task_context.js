import React, {useContext, useReducer} from "react";
import {task_reducer} from "../reducer/task_reducer";
import {ADD_NEW_TASK} from "./actions";
import {v1} from "uuid";

const initialValues = {
    tasks: []
}

const TaskContext = React.createContext()

export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(task_reducer, initialValues)

    const addNewTask = (isTask) => {
        const newTask = {
            id: v1(),
            name: isTask,
            due_date: new Date(),
            description: '',
            priority: 'Low',
            completed: false,

        }
        dispatch({
            type: ADD_NEW_TASK,
            payload: newTask
        })
    }

    const deleteTask = (id) => {
      dispatch({
          type: 'DELETE_TASK',
          payload: id
      })
    }

    const completedTask = (id) => {
      dispatch({
          type: 'COMPLETED_TASK',
          payload: id
      })
    }

    const updateTask = (values, isPriorityValue, isDate) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: {
                values,
                isPriorityValue,
                isDate
            }
        })
    }

    return (
        <TaskContext.Provider
            value={{
                ...state,
                addNewTask,
                deleteTask,
                completedTask,
                updateTask,
            }}>
            {children}
        </TaskContext.Provider>
    )
};

export const useTaskContext = () => useContext(TaskContext);