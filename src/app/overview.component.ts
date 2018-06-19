import { Component } from '@angular/core';

@Component({
  selector: 'overview-component',
  template: `
    <div class="row" style="padding-top: 15px">
      <div class="col-xs-2">
        <mat-card>
        <img mat-card-image src="http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg"/>
          <mat-card-title>Title</mat-card-title>
          <mat-card-subtitle>Subtitle</mat-card-subtitle>
          <mat-card-content>Card content</mat-card-content>
        </mat-card>
      </div>
      <div class="col-xs-3">
        <mat-accordion>
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>
                Personal data
              </mat-panel-title>
              <mat-panel-description>
                Type your name and age
              </mat-panel-description>
            </mat-expansion-panel-header>

            <form>
              <mat-form-field>
                <input matInput placeholder="First name">
              </mat-form-field>

              <mat-form-field>
                <input matInput placeholder="Age">
              </mat-form-field>
            </form>
          </mat-expansion-panel>

          <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
            <mat-expansion-panel-header>
              <mat-panel-title>
                Location data
              </mat-panel-title>
              <mat-panel-description>
                Choose your location
              </mat-panel-description>
            </mat-expansion-panel-header>
            <form>
              <mat-form-field>
                <mat-select placeholder="Location">
                  <mat-option *ngFor="let location of ['London', 'Dublin', 'New York']" [value]="location">
                    {{ location }}
                  </mat-option>
                </mat-select>
              </mat-form-field>
            </form>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </div>
  `
})
export class OverviewComponent {
  panelOpenState = false;
}
