import React, {useState} from 'react';
import {EditTaskModalStyled, UpdateButton} from "./EditTaskModalStyled";
import {Form, Field, Formik, ErrorMessage} from "formik";
import {edit_schema} from "../../input_schemas/input_schemas";
import {useTaskContext} from "../../context/task_context";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import closeIcon from '../../assets/icons/icon-close.svg'

const EditTaskModal = ({isTask ,setIsModal}) => {
    const {updateTask} = useTaskContext()
    const [isPriority, setIsPriority] = useState(false)
    const {id, name, description, due_date, priority} = isTask
    const [isPriorityValue, setIsPriorityValue] = useState(priority)
    const date = new Date(due_date)
    const [isDate, setIsDate] = useState(date)

    const initialValues = {
        id: id,
        title: name,
        description: description,
        priority: priority,
        due_date: isDate
    }

    const priorityHandler = (e) => {
        setIsPriorityValue(e.target.textContent)
        setIsPriority(false)
    }

    const submitHandler = (values) => {
        updateTask(values, isPriorityValue, isDate)
        setIsModal(false)
    }

    return (
        <EditTaskModalStyled>
            <img onClick={() => setIsModal(false)} src={closeIcon} alt="close-icon"/>
            <Formik
                validationSchema={edit_schema}
                initialValues={initialValues}
                onSubmit={submitHandler}>
                <Form>
                    <h1>Update Task</h1>
                    <div>
                        <label>Title</label>
                        <Field type='text' name='title'/>
                        <ErrorMessage name='title' render={msg => <p>{msg}</p>}/>
                    </div>

                    <div>
                        <label>Description</label>
                        <Field as='textarea' name='description'/>
                        <ErrorMessage name='description' render={msg => <p>{msg}</p>}/>
                    </div>


                    <div className="priority">
                        <h2 onClick={() => setIsPriority(true)}>Priority: {isPriorityValue}</h2>
                        {isPriority &&
                        <ul>
                            <li onClick={e => priorityHandler(e)}>
                                Low
                            </li>
                            <li onClick={e => priorityHandler(e)}>
                                Medium
                            </li>
                            <li onClick={e => priorityHandler(e)}>
                                High
                            </li>
                        </ul>}
                    </div>
                    <div className='date'>
                        <DatePicker
                            dateFormat="MM-dd-yyyy"
                            wrapperClassName='datePicker'
                            selected={isDate}
                            minDate={new Date()}
                            onChange={date => setIsDate(date)}/>
                    </div>
                    <UpdateButton type='submit'>Save changes</UpdateButton>
                </Form>
            </Formik>

        </EditTaskModalStyled>
    );
};

export default EditTaskModal;