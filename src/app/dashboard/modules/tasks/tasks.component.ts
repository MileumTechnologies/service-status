import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tasks-component',
  templateUrl: 'tasks.component.html',
  styles: ['mat-form-field { margin-right: 25px; }']
})
export class TasksComponent {
  public selectedIndex: number;

  constructor(private router: Router) {
    this.initialIndexCheck();
  }

  public checkSelectedIndex(index: number): void {
    if (index === 0 && !this.router.url.includes('list')) {
      this.router.navigateByUrl('tasks/list');
    } else if (index === 1 && !this.router.url.includes('create')) {
      this.router.navigateByUrl('tasks/create');
    }
  }

  private initialIndexCheck(): void {
    if (this.router.url.endsWith('create')) {
      this.selectedIndex = 1;
    } else if (this.router.url.endsWith('list')) {
      this.selectedIndex = 0;
    } else {
      this.router.navigateByUrl('tasks/list');
    }
  }
}
