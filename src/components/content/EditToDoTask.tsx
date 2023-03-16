import * as React from 'react';
import {IToDo} from '../../config/types/types';
import {TextField} from '@mui/material';
import {useContext, useState} from 'react';
import {updateTask} from '../../services/updateTaskService';
import Context from '../../Context';
import {ENTER} from '../../config/constants/codeConstants';

export interface IEditToDoTaskProps {
    toDoTask: IToDo
    cancelEditMode: () => void;
}

function EditToDoTask(props: IEditToDoTaskProps) {
    const {toDoTask, cancelEditMode} = props
    const [inputState, setInputState] = useState<string>(toDoTask.text)
    const {updateTodo} = useContext(Context);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.target.value)
    };
    const handleKeyDown = (event: any): void => {
        if (event.key === ENTER) {
            updateTask(inputState, toDoTask.id).then((item) => updateTodo(item))
            setInputState('')
            cancelEditMode()
        }
    };
    return (
        <TextField
            id='outlined-disabled'
            label='Edit todo task'
            size='small'
            onKeyDown={handleKeyDown}
            value={inputState}
            onChange={handleChange}
        />
    )
}

export default EditToDoTask;
