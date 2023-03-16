import {getTaskByIdUrl} from '../config/constants/paths';
import {IToDo} from '../config/types/types';

export async function updateTask(text: string, id: string): Promise<IToDo> {
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
        const response = await fetch(getTaskByIdUrl(id), settings)
        return await response.json()
    } catch (error) {
        throw new Error('Unable to access tasks list.')
    }

}
