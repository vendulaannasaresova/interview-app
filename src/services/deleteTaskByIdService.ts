import {getTaskByIdUrl} from '../config/constants/paths';

export async function deleteTaskById(id: string): Promise<void> {
    const settings = {
        method: 'DELETE',
    }
    try {
        await fetch(getTaskByIdUrl(id), settings)
        return
    } catch (error) {
        throw new Error('Unable to delete the task.')
    }

}
