import React, { ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { title } from 'process';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

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
    changeTodolistTitle: (id: string, newTitle: string) => void
}

const Todolist = (props: PropsType) => {

    const onAllClickHandler = () => props.changeFilter("all", props.id)
    const onActiveClickHandler = () => props.changeFilter("active", props.id)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id)

    const changeTodolistTitle = (newtitle: string) => {
        props.changeTodolistTitle(props.id, newtitle)
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    return (
        <div>
            <h3> <EditableSpan 
                    title={props.title} 
                    onChange={changeTodolistTitle}
                /> 
                <IconButton aria-label="delete" onClick={removeTodolist}>
                    <DeleteIcon />
                </IconButton>
            </h3>
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
                            <Checkbox
                            onChange={onChangeStatusHandler} 
                            checked={t.isDone} />
                            <EditableSpan 
                                title={t.title} 
                                onChange={onChangeTitleHandler} />
                            <IconButton onClick={onClickHandler}>
                                <DeleteIcon />
                            </IconButton>
                        </li>
                    } ) 
                }
            </ul>
            <div>
                <Button 
                    variant={props.filter === 'all' ? "contained" : "text"}     
                    onClick={onAllClickHandler}>All</Button>
                <Button  
                    color={'primary'}
                    variant={props.filter === 'active' ? "contained" : "text"}
                    onClick={onActiveClickHandler}>Active</Button>
                <Button 
                    color={'secondary'} 
                    variant={props.filter === 'completed' ? "contained" : "text"}
                    onClick={onCompletedClickHandler}>Completed</Button>
            </div>
        </div>
    );
};

export default Todolist;