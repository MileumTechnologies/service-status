import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

    public getTasks(): any[] {
        const tasks: any[] = [
            { id: 1, name: 'Task_1', type: 'Ping', status: true, update: new Date(), active: true },
            { id: 2, name: 'Task_2', type: 'Ping', status: true, update: new Date(), active: false },
            { id: 3, name: 'Task_3', type: 'Ping', status: false, update: new Date(), active: true },
            { id: 4, name: 'Task_4', type: 'Ping', status: true, update: new Date(), active: true }
        ];

        return tasks.map(task => {
            task.update = (<Date>task.update).toISOString()
                .substr(0, (<Date>task.update).toISOString().length - 8)
                .split('T')
                .join(' @ ');

            return task;
        });
    }

    public createTask(task: any): void {

    }
}
