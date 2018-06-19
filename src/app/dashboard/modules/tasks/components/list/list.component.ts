import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatCheckboxChange, MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

import { TasksService } from '../../services/tasks.service';
import { CreateTaskNotificationComponent } from '../notifications/create-task-notification.component';

@Component({
  selector: 'list-component',
  templateUrl: 'list.component.html'
})
export class ListComponent implements AfterViewInit {
  public displayedColumns: String[] = ['name', 'type', 'status', 'update', 'active'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public tasks: any[];
  public task: any = {
    active: true,
    loadingInProgress: false
  };

  constructor(private tasksService: TasksService, private snackBar: MatSnackBar) {
    this.tasks = this.tasksService.getTasks();
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public updateTaskActiveState(change: MatCheckboxChange, task: any): void {
    console.log(change, task);
    task.loadingInProgress = true;

    setTimeout(() => {
      task.loadingInProgress = false;
      // this.showSnackBar(true, `Task ${task.name} has been succesfully updated!`);

      task.active = !change.checked;
      this.showSnackBar(false, `Error updating task ${task.name} please contact service support.`);
    }, 2000);
  }

  private showSnackBar(status: Boolean, message: String): void {
    this.snackBar.openFromComponent(CreateTaskNotificationComponent, {
      panelClass: status ? 'status-good' : 'status-bad',
      duration: 5000,
      data: {
        message: message
      }
    });
}
}
