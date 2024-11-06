import React, { ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { title } from 'process';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

const Todolist = (props: PropsType) => {

    const onAllClickHandler = () => props.changeFilter("all", props.id)
    const onActiveClickHandler = () => props.changeFilter("active", props.id)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id)

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    return (
        <div>
            <h3>{props.title} <button onClick={removeTodolist}>x</button> </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {
                    props.tasks.map( t => {
                        const onClickHandler = () => props.removeTask( t.id, props.id)
                        const onChangeStatusHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
                            props.changeTaskStatus( t.id, e.currentTarget.checked, props.id)
                        }
                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle( t.id, newValue, props.id)
                        }
                        return <li key={t.id} className={t.isDone === true ? "isDone" : ""}>
                            <input 
                            type="checkbox" 
                            onChange={onChangeStatusHandler} 
                            checked={t.isDone} />
                            <EditableSpan 
                                title={t.title} 
                                onChange={onChangeTitleHandler} />
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    } ) 
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;