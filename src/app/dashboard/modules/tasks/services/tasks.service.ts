import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class TasksService {

    constructor() {

    }

    public getTasks(): Observable<Task[]> {
        return of([
            { id: 1, name: 'Task 1', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 2, name: 'Task 2', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 3, name: 'Task 3', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 4, name: 'Task 4', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 5, name: 'Task 5', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 6, name: 'Task 6', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 7, name: 'Task 7', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 8, name: 'Task 8', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null },
            { id: 9, name: 'Task 9', type: 'Ping', createdBy: '', lastUpdate: null, status: 'Down', definition: null }
        ]);
    }

    public createTask(): Observable<Boolean> {
        return of(true);
    }
}
