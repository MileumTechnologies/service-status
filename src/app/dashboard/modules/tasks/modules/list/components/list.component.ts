import { Component } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'list-component',
  template: `<p>List</p>`
})
export class ListComponent {
    constructor(private tasksService: TasksService) {
        this.tasksService.getTasks().subscribe(
            (tasks: Task[]) => {
                console.log('GetTasks', tasks);
            }
        );
    }
}
