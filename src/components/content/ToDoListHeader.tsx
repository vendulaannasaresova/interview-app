import {Card, CardContent, Box, Typography} from '@mui/material';
import * as React from 'react';
import {useContext, useState} from 'react';
import Switch from '@mui/material/Switch';
import Context from '../../Context';

export interface IToDoListHeaderProps {
}

function ToDoListHeader(props: IToDoListHeaderProps) {
    const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false)
    const {toggleFilteredCompletedToDos} = useContext(Context);


    const handleToggleCompleted = () => {
        setShowOnlyCompleted((prevState) => (!prevState))
        toggleFilteredCompletedToDos()
    }

    return (
        <Card sx={{width: '100%'}}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                    }}
                >
                    <Switch
                        checked={showOnlyCompleted}
                        onChange={() => handleToggleCompleted()}
                        color='primary'
                        name='checkedB'
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                    <Typography variant='overline' pt={0.5}>
                        Show only completed todo tasks
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ToDoListHeader;
