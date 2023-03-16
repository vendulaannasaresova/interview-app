import {createContext} from 'react';
import {
    DeleteAllCompletedToDos,
    DeleteToDo,
    SelectAllToDos,
    ToggleCompleteToDo,
    ToggleFilteredCompletedToDos,
    UpdateTodo
} from './config/types/types';

interface ContextProps {
    deleteToDo: DeleteToDo;
    updateTodo: UpdateTodo;
    toggleCompleteToDo: ToggleCompleteToDo;
    toggleFilteredCompletedToDos: ToggleFilteredCompletedToDos;
    selectAllToDos: SelectAllToDos;
    deleteAllCompletedToDos: DeleteAllCompletedToDos;
}

const Context = createContext<ContextProps>({
    deleteToDo: () => {
    },
    updateTodo: () => {
    },
    toggleCompleteToDo: () => {
    },
    toggleFilteredCompletedToDos: () => {
    },
    selectAllToDos: () => {
    },
    deleteAllCompletedToDos: () => {
    },
});

export default Context;
