import {ADD_NEW_TASK} from "../context/actions";

export const task_reducer = (state, action) => {
    if (action.type === ADD_NEW_TASK) {
        return {
            ...state,
            tasks: [
                ...state.tasks, action.payload
            ]
        }
    }

    if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.filter(item => item.id !== action.payload)
        }
    }

    if (action.type === 'COMPLETED_TASK') {
        return {
            ...state,
            tasks: [
                ...state.tasks, ...state.tasks.filter(item => {
                    if (item.id === action.payload) {
                        item.completed = true
                    }
                })
            ]
        }
    }

    if (action.type === 'UPDATE_TASK') {
        const {values, isPriorityValue, isDate} = action.payload
        const {id, title, description} = values;
        return {
            ...state,
            tasks: [
                ...state.tasks, ...state.tasks.filter(item => {
                    if (item.id === id) {
                        item.name = title
                        item.description = description
                        item.priority = isPriorityValue
                        item.due_date = isDate
                    }
                })
            ]
        }
    }
}