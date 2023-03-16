import {getCompletedTasksUrl} from '../config/constants/paths';
import {IToDo} from '../config/types/types';

export async function getCompletedTasks(): Promise<IToDo[]> {
    const settings = {
        method: 'GET',
    }
    try {
        const response = await fetch(getCompletedTasksUrl(), settings)
        return await response.json()
    } catch (error) {
        throw new Error('Unable to access tasks list.')
    }
}
