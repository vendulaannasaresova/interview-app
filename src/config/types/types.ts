export interface IToDo {
    id: string;
    text: string;
    completed: boolean;
    createdDate: string;
    completedDate?: string;
}

export interface IToDoData {
    data: IToDo[];
}

export type DeleteToDo = (id: string) => void;
export type UpdateTodo = (item: IToDo) => void;
export type ToggleCompleteToDo = (id: string, item: IToDo) => void;
export type ToggleFilteredCompletedToDos = () => void;
export type SelectAllToDos = (selectedAll: boolean) => void;
export type DeleteAllCompletedToDos = () => void;
export type AddToDo = (todo: IToDo) => void;
