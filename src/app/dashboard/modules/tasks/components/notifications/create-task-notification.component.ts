import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'create-task-component',
  template: `
    <span> {{ message }} </span>
  `
})
export class CreateTaskNotificationComponent {
  public status: Boolean = false;
  public message: String = 'An error occured.';

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) {
    if (this.data) {
      this.status = data.status || false;
      this.message = data.message || 'An error occured.';
    }
  }
}
