export function getTasksUrl(): string {
    return `/tasks`;
}
export function getCompletedTasksUrl(): string {
    return `${getTasksUrl()}/completed`;
}
export function getTaskByIdUrl(id: string): string {
    return `${getTasksUrl()}/${id}`;
}
export function getCompleteTaskByIdUrl(id: string): string {
    return `${getTaskByIdUrl(id)}/complete`;
}
export function getIncompleteTaskByIdUrl(id: string): string {
    return `${getTaskByIdUrl(id)}/incomplete`;
}


