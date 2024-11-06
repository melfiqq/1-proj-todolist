import React, { ChangeEvent, useState } from 'react';
import Todolist from './Todolist';
import App from './App';

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}

function EditableSpan(props: EditableSpanPropsType) {
    /* in useState(***), *** - this is start value - стартовое значение. */
    let [editMode, setEditMode] = useState(false) /* from start it will be false, because user does not need to enter changes in title right from the start. */
    //let [title, setTitle] = useState(props.title) /* as a start value we take props.title and change it if needed. */ /* CAN BE LIKE THAT, BUT I'LL MAKE IT DIFFERENT. */
    let [title, setTitle] = useState("") /* like that, sine we take it as smth initial - you crate new task - new title for it, which is empty line. */

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title) /* title - set that value which is in props when we activetaeEditMode. So when we doubleclick - the line become not empty, but with the value which was written. */
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    /* const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTitle
        }
    } */


    return editMode 
    ? <input value={title} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus/> 
    /* autoFocus - when user just press on the element - it becomes input+there is focus right after user clicks on the element. And it is boolean, but if it is true, we just write the name and thats all //no (autoFocus="true") */
    /* onBlur - when you click somewhere but not on the element. */ 
    : <span onDoubleClick={activateEditMode} >{props.title}</span>
    /* onDoubleClick - when you click two times - then "" activates. */
};

export default EditableSpan;
