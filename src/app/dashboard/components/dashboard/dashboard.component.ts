import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styles: [
        `
        #drawer {
            width: 8.33333333vw;
            visibility: visible !important;
            cursor: pointer;
            padding: 10x 0px 10px 0px;
        }

        .drawer-opened {
            margin-left: 0px !important;
        }

        .drawer-closed {
            margin-left: 45px !important;
        }

        .route-name {
            font-size: 22px;
            font-weight: bold;
            color: red;
        }

        .route-link {
            font-size: 18px;
            padding: 5px;
        }

        .route-link:hover {
            background: lightgray;
        }

        .col-xs-closed {
            width: 60px;
            padding: 0px 10px;
            float: left;
            -webkit-transition: width 0.3s; /* Safari */
            transition: width 0.3s;
        }

        .drawer-container {
            background-color: #fff !important;
        }
      `
    ]
})
export class DashboardComponent {
    @ViewChild('drawer') drawer: MatDrawer;

    public title: String = 'Service Status';
    public version: String = '0.0.1';
    public status: String = 'Beta';

    public drawerOpened: Boolean = false;
    public routes: any[] = [
        {
            name: '',
            links: [
                { name: 'Overview', path: 'overview', icon: 'fa-chart-bar' }
            ]
        },
        {
            name: 'Tasks',
            links: [
                { name: 'List', path: 'tasks/list', icon: 'fa-list' },
                { name: 'Create', path: 'tasks/create', icon: 'fa-plus' }
            ]
        }
    ];

    public constructor(private router: Router) {

    }

    public openDrawer(): void {
        this.drawerOpened = true;
        this.drawer.open();
    }

    public closeDrawer(): void {
        this.drawerOpened = false;
        this.drawer.close();
    }

    public navigateTo(path: String): void {
        this.router.navigate([path]);
    }
}
