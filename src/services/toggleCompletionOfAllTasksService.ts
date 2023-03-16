import {IToDoData, IToDo} from '../config/types/types';
import {toggleCompletionOfTaskById} from './toggleCompletionOfTaskByIdService';

export const toggleCompletionOfAllTasksService = (toDos: IToDoData, shouldBeCompleted: boolean) => {
    const promises: any[] = [];
    const filteredToDos: IToDo[] = toDos.data.filter((toDo) => toDo.completed === shouldBeCompleted)

    filteredToDos.map((toDo) => {
        return promises.push(toggleCompletionOfTaskById(toDo.id, shouldBeCompleted));
    })

    Promise.all(promises)
        .then(() => {
            return true
        })
        .catch((e) => {
            throw new Error(e)
        })
        .finally(()=> { return true })

}
