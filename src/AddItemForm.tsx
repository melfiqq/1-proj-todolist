import { ControlPoint } from '@mui/icons-material';
import { Button, IconButton, TextField } from '@mui/material';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {

    const [title, setTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null) /* то есть там или строка (пробелы), или ничего не написано и пытаются добавить пустую таску (пустую строку) */
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addItem()
        }
    }
    const addItem = () => {
        if (title.trim() !== '' && 'kakashka') {
            props.addItem(title.trim())
            setTaskTitle('')
        } else {
            setError("Title is required.")
        }
    }

    return <div>
        {/* <input 
            value={title}
            onChange={onChangeHandler}
            onKeyUp={onKeyPressHandler}
            className={error ? "error" : ""}
        /> */}
        <TextField
            id="filled-basic" 
            label="Give it a name ..." 
            variant="filled" 
            value={title}
            onChange={onChangeHandler}
            onKeyUp={onKeyPressHandler}
            error={!!error} /* цифры - всегда ТРУ. НОль и МИНУС НОЛЬ - Фолс. Один знак ! - это фолс, а два знака !! - обратное к обратному, и вот так мы конвертируем простой элемент в булевое значение. */ /* If we have an empty line - '!!'  will make from this BOLEEAN FALSE. If the line is not empty - '!!' will make from it BOOLEAN TRUE. Object is always TRUE. An Array is alwasy TRUE.  */
            helperText={error}
        />
        <IconButton onClick={addItem} color={'primary'}><ControlPoint /></IconButton>
        {/* {error && <div className="error-message">{error}</div>} - */}    {/* instead -  helperText={error} */}
    </div>
};

export default AddItemForm;