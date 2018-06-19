import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

import { CreateTaskNotificationComponent } from '../notifications/create-task-notification.component';

@Component({
  selector: 'create-component',
  templateUrl: 'create.component.html'
})
export class CreateComponent {
  constructor(private snackBar: MatSnackBar) {
    this.showSnackBar(true, 'Task created succesfully!');
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
}
