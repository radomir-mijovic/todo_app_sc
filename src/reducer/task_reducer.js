import {ADD_NEW_TASK} from "../context/actions";

export const task_reducer = (state, action) => {
    localStorage.setItem('tasks', JSON.stringify([...state.tasks, action.payload]))
    if (action.type === ADD_NEW_TASK) {
        return {
            ...state,
            tasks: [
                ...state.tasks, action.payload
            ]
        }
    }


    if (action.type === 'DELETE_TASK') {
        const newTasks = state.tasks.filter(item => item.id !== action.payload)
        localStorage.setItem('tasks', JSON.stringify([...newTasks]))
        return {
            ...state,
            tasks: newTasks
        }
    }


    if (action.type === 'COMPLETED_TASK') {
        const newTasks = [
            ...state.tasks, ...state.tasks.filter(item => {
                if (item.id === action.payload) {
                    item.completed = true
                }
            })
        ]
        localStorage.setItem('tasks', JSON.stringify([...newTasks]))

        return {
            ...state,
            tasks: newTasks
        }
    }

    if (action.type === 'UPDATE_TASK') {
        const {values, isPriorityValue, isDate} = action.payload
        const {id, title, description} = values;
        const newTasks = [
            ...state.tasks, ...state.tasks.filter(item => {
                if (item.id === id) {
                    item.name = title
                    item.description = description
                    item.priority = isPriorityValue
                    item.due_date = isDate
                }
            })
        ]
        localStorage.setItem('tasks', JSON.stringify([...newTasks]))

        return {
            ...state,
            tasks: newTasks
        }
    }

    if (action.type === 'SORT_BY_TITLE') {
        let tempSort = [...state.tasks]
        if (action.payload === true) {
            tempSort = tempSort.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            })
        }
        if (action.payload === false) {
            tempSort = tempSort.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        }
        return {
            ...state,
            tasks: tempSort
        }
    }
}