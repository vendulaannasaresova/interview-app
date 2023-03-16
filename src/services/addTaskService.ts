import {getTasksUrl} from '../config/constants/paths';
import {IToDo} from '../config/types/types';

export async function addNewTask(text: string): Promise<IToDo> {
    const settings = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            text: text,
        }),
    }
    try {
        const response = await fetch(getTasksUrl(), settings)
        return await response.json()
    } catch (error) {
        throw new Error('Unable to access tasks list.')
    }

}
