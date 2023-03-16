import {ListItemSecondaryAction, Card, CardContent, Divider} from '@mui/material';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {IToDoData} from '../../config/types/types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Context from '../../Context';
import {useContext, useState} from 'react';
import ToDoListFooter from './ToDoListFooter';
import EditToDoTask from './EditToDoTask';
import {toggleCompletionOfTaskById} from '../../services/toggleCompletionOfTaskByIdService';
import {deleteTaskById} from '../../services/deleteTaskByIdService';


export interface IToDoListProps {
    toDos: IToDoData
    completedToDosCount: number
}

function ToDoList(props: IToDoListProps) {
    const {toDos, completedToDosCount} = props
    const [selectedAll, setSelectedAll] = useState<boolean>(false);
    const [checked, setChecked] = useState<number[]>([0]);
    const [editMode, setEditMode] = useState<number>(-1);
    const {deleteToDo, toggleCompleteToDo, deleteAllCompletedToDos, selectAllToDos} = useContext(Context);

    const handleToggle = (index: number, id: string, completed: boolean) => () => {
        const currentIndex = checked.indexOf(index)
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(index)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        toggleCompletionOfTaskById(id, completed).then((item) => {
            toggleCompleteToDo(id, item)
        })
    };

    const handleToggleSelectAll = (): void => {
        setSelectedAll((prevState) => !prevState)
        selectAllToDos(selectedAll)
    };

    const handleDelete = (id: string): void => {
        deleteTaskById(id).then(() => {
            deleteToDo(id)
        })
    };

    const handleEditMode = (index: number): void => {
        setEditMode(index)
    };

    const handleCancelEditMode = (): void => {
        setEditMode(-1)
    };

    return (
        <Card sx={{width: '100%'}}>
            <CardContent>
                <ListItem key={'checkbox-list-label-all'}>
                    <ListItemButton role={undefined} onClick={() => handleToggleSelectAll()}
                                    dense>
                        <ListItemIcon>
                            <Checkbox
                                edge='start'
                                checked={selectedAll}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText id={'checkbox-list-label-all'} primary={'Select all tasks'}/>
                    </ListItemButton>
                </ListItem>
                <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                    {toDos.data.map((toDoTask, index) => {
                        const labelId = `checkbox-list-label-${toDoTask}`;
                        return (
                            <ListItem key={`${toDoTask.id}-list-item`}>
                                <ListItemButton role={undefined}
                                                dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge='start'
                                            checked={toDoTask.completed}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                            onClick={handleToggle(index, toDoTask.id, toDoTask.completed)}
                                        />
                                    </ListItemIcon>
                                    {index !== editMode ?
                                        (<>
                                            <ListItemText id={labelId} primary={toDoTask.text}/>
                                            <ListItemSecondaryAction>
                                                <IconButton edge='end' aria-label='comments'
                                                            onClick={() => handleDelete(toDoTask.id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <IconButton edge='end' aria-label='comments' sx={{ml: 2}}
                                                            onClick={() => handleEditMode(index)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </>)
                                        :
                                        (<EditToDoTask toDoTask={toDoTask} cancelEditMode={handleCancelEditMode}/>)
                                    }
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
                <Divider light/>
                <ToDoListFooter completedToDosCount={completedToDosCount}/>
            </CardContent>
        </Card>
    );
}

export default ToDoList;
