import * as React from 'react';
import {IToDo} from '../../config/types/types';
import {Box, TextField} from '@mui/material';
import {useState} from 'react';
import {addNewTask} from '../../services/addTaskService';
import {INPUT_HELPER} from '../../config/constants/labels';
import {ENTER} from '../../config/constants/codeConstants';

export interface IAddToDoItemProps {
    addToDo: (todo: IToDo) => void
}

function AddToDoTask(props: IAddToDoItemProps) {
    const {addToDo} = props
    const [inputState, setInputState] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputState(e.target.value);
    };
    const handleKeyDown = (event: any): void => {
        if (event.key === ENTER) {
            addNewTask(inputState).then((item) => addToDo(item))
            setInputState('');
        }
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 2,
                m: 1,
            }}
        >
            <TextField
                id='outlined-disabled'
                label='New todo task'
                helperText={INPUT_HELPER}
                onKeyDown={handleKeyDown}
                value={inputState}
                onChange={handleChange}
            />
        </Box>
    )
}

export default AddToDoTask;
