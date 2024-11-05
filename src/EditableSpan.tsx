import React, { useState } from 'react';
import Todolist from './Todolist';
import App from './App';

type EditableSpanPropsType = {
    title: string
}

function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(true) /* from start it will be false, because user does not need to enter changes in title right from the start */


    return editMode ? <input value={props.title} /> : <span>{props.title}</span>
};

export default EditableSpan;
