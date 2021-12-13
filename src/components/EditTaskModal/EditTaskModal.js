import React, {useState} from 'react';
import {EditTaskModalStyled} from "./EditTaskModalStyled";
import {Form, Field, Formik, ErrorMessage} from "formik";
import {edit_schema} from "../../input_schemas/input_schemas";
import {useTaskContext} from "../../context/task_context";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const EditTaskModal = ({isTask ,setIsModal}) => {
    const {updateTask} = useTaskContext()
    const [isPriority, setIsPriority] = useState(false)
    const {id, name, description, due_date, priority} = isTask
    const [isPriorityValue, setIsPriorityValue] = useState(priority)
    const [isDate, setIsDate] = useState(due_date)

    const initialValues = {
        id: id,
        title: name,
        description: description,
        priority: priority,
        due_date: due_date
    }

    const submitHandler = (values) => {
        console.log(values)
        updateTask(values, isPriorityValue, isDate)
        setIsModal(false)
    }

    return (
        <EditTaskModalStyled>
            <Formik
                validationSchema={edit_schema}
                initialValues={initialValues}
                onSubmit={submitHandler}>
                <Form>
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
                        <h2 onClick={() => setIsPriority(true)}>Priority: {priority}</h2>
                        {isPriority &&
                        <ul>
                            <li onClick={(e) => setIsPriorityValue(e.target.textContent)}>
                                Low
                            </li>
                            <li onClick={(e) => setIsPriorityValue(e.target.textContent)}>
                                Medium
                            </li>
                            <li onClick={(e) => setIsPriorityValue(e.target.textContent)}>
                                High
                            </li>
                        </ul>}
                    </div>
                    <div className='date'>
                        <DatePicker
                            selected={isDate}
                            minDate={new Date()}
                            onChange={date => setIsDate(date)}/>
                    </div>
                    <button type='submit'>Save changes</button>
                </Form>
            </Formik>

        </EditTaskModalStyled>
    );
};

export default EditTaskModal;