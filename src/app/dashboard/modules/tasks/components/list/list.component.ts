import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html'
})
export class ListComponent {
  public tasks: any[];

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }
}
