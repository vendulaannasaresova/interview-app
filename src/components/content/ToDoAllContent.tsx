import {
    AddToDo, DeleteAllCompletedToDos,
    DeleteToDo, IToDo,
    IToDoData, SelectAllToDos,
    ToggleCompleteToDo, ToggleFilteredCompletedToDos,
    UpdateTodo,
} from '../../config/types/types';
import * as React from 'react';
import Context from './../../Context';
import ToDoList from './ToDoList';
import {useEffect, useState} from 'react';
import AddToDoTask from './AddToDoTask';
import {getAllTasks} from '../../services/getTasksService';
import {CircularProgress, Grid} from '@mui/material';
import {getCompletedTasks} from '../../services/getCompletedTasksService';
import ToDoListHeader from './ToDoListHeader';
import {deleteAllCompletedTodoTasks} from '../../services/deleteAllCompletedTasksService';
import {toggleCompletionOfAllTasksService} from '../../services/toggleCompletionOfAllTasksService';

function ToDoAllContent() {
    const initialToDos: IToDoData = {data: []};
    const [toDos, setToDos] = useState<IToDoData>(initialToDos)
    const [completedToDos, setCompletedToDos] = useState<IToDoData>(initialToDos)
    const [loading, setLoading] = useState<boolean>(false)
    const [showOnlyCompleted, setShowOnlyCompleted] = useState<boolean>(false)


    useEffect(() => {
        setLoading(true)
        getAllTasks().then((tasks) => {
            setToDos({data: tasks})
        }).finally(() => setLoading(false))
    }, []);

    useEffect(() => {
        getCompletedTasks().then((tasks) => {
            setCompletedToDos({data: tasks})
        })
    }, [toDos]);

    const addToDo: AddToDo = (newData) => {
        setToDos((prevState) => ({
            data: [...prevState.data, newData]
        }));
    };

    const updateTodo: UpdateTodo = (toDoTask: IToDo) => {
        let updatedTodo = toDos.data.findIndex(item => item.id === toDoTask.id);
        toDos.data[updatedTodo].text = toDoTask.text
        setToDos({data: toDos.data});
    };
    const deleteToDo: DeleteToDo = (id) => {
        const newData = toDos.data.filter((item) => item.id !== id);
        return setToDos({data: newData});
    };
    const deleteAllCompletedToDos: DeleteAllCompletedToDos = () => {
        deleteAllCompletedTodoTasks(toDos)
        const newData = toDos.data.filter((item) => !item.completed);
        setToDos({data: newData})
    };
    const toggleCompleteToDo: ToggleCompleteToDo = (id, item) => {
        const updatedItemIndex = toDos.data.findIndex((toDo) => toDo.id === id)
        if (updatedItemIndex !== -1) {
            toDos.data[updatedItemIndex].completed = item.completed
            setToDos({data: toDos.data})
        }
    };

    const selectAllToDos: SelectAllToDos = (selectedAll) => {
        toggleCompletionOfAllTasksService(toDos, selectedAll)
        toDos.data.map((toDo) => toDo.completed = !selectedAll)
        setToDos({data: toDos.data})

    };
    const toggleFilteredCompletedToDos: ToggleFilteredCompletedToDos = () => {
        setShowOnlyCompleted((prevState) => (!prevState))
    };

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
        >
            <Context.Provider value={{
                deleteToDo,
                updateTodo,
                toggleCompleteToDo,
                toggleFilteredCompletedToDos,
                selectAllToDos,
                deleteAllCompletedToDos
            }}>
                <ToDoListHeader/>
                <AddToDoTask addToDo={addToDo}/>
                {loading ?
                    <CircularProgress/> :
                    <ToDoList completedToDosCount={completedToDos.data.length}
                              toDos={showOnlyCompleted ? completedToDos : toDos}/>}
            </Context.Provider>
        </Grid>
    )
}

export default ToDoAllContent;
