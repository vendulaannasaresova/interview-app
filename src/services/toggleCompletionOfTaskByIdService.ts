import {getCompleteTaskByIdUrl, getIncompleteTaskByIdUrl} from '../config/constants/paths';
import {IToDo} from '../config/types/types';

export async function toggleCompletionOfTaskById(id: string, completed: boolean): Promise<IToDo> {
    const settings = {
        method: 'POST',
    }
    try {
        const response = await fetch(
            completed ? getIncompleteTaskByIdUrl(id) : getCompleteTaskByIdUrl(id),
            settings
        )
        return await response.json()
    } catch (error) {
        throw new Error(`Unable to set task as ${completed ? 'completed' : 'uncompleted'}.`)
    }

}
