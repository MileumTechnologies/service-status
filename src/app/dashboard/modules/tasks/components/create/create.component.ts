import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

import { CreateTaskNotificationComponent } from '../notifications/create-task-notification.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'create-component',
  templateUrl: 'create.component.html'
})
export class CreateComponent {
  public types: any[];

  constructor(private snackBar: MatSnackBar, private tasksService: TasksService) {
    this.showSnackBar(true, 'Task created succesfully!');
    this.types = this.tasksService.getTypes();
  }

  private showSnackBar(status: Boolean, message: String): void {
      this.snackBar.openFromComponent(CreateTaskNotificationComponent, {
        panelClass: status ? 'status-good' : 'status-bad',
        duration: 3000,
        data: {
          message: message
        }
      });
  }

  public stringify(str: String): String {
    console.log(str);
    return str;
  }
}
