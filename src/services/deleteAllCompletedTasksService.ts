import {IToDoData} from '../config/types/types';
import {deleteTaskById} from './deleteTaskByIdService';

export const deleteAllCompletedTodoTasks = (toDos: IToDoData) => {
    const promises: any[] = [];
    const onlyCompletedToDos = toDos.data.filter((toDo) => toDo.completed)

    onlyCompletedToDos.map((toDo) => {
        return promises.push(deleteTaskById(toDo.id));
    })

    Promise.all(promises)
        .then((results) => {
            return results
        })
        .catch((e) => {
            // Handle errors here
        });
}
