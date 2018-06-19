import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

    public getTasks(): any[] {
        return [
            { id: 1, name: 'Task1' },
            { id: 2, name: 'Task2' },
            { id: 3, name: 'Task3' },
            { id: 4, name: 'Task4' }
        ];
    }

    public createTask(task: any): void {

    }
}
