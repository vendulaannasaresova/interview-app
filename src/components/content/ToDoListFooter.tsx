import {Button, Typography, Box} from '@mui/material';
import * as React from 'react';
import Context from '../../Context';
import {useContext} from 'react';

export interface IToDoListFooterProps {
    completedToDosCount: number
}

function ToDoListFooter(props: IToDoListFooterProps) {
    const {completedToDosCount} = props
    const {deleteAllCompletedToDos} = useContext(Context);
    const completedToDosLabelText = completedToDosCount < 1 ?
        `None of tasks is completed.` : `${completedToDosCount} ${completedToDosCount < 2 ? `task is` : `tasks are`} completed.`

    const handleDeleteAllCompletedToDos = (): void => {
        deleteAllCompletedToDos()
    };

    return (
        <Box mt={3} m={4} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant='overline' display='block' gutterBottom>
                {completedToDosLabelText}
            </Typography>
            <Button disabled={!completedToDosCount} variant='contained' color='primary'
                    onClick={() => handleDeleteAllCompletedToDos()}>
                Delete all completed tasks
            </Button>
        </Box>
    )
        ;
}

export default ToDoListFooter;
