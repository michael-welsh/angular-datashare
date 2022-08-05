import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-instrument',
  template: `
    <h2>Which instrument would you like to play? </h2>
    <h4 *ngFor="let choice of completedChoices">
        <p>{{choice}}</p>
    </h4>

    <app-musician
      *ngFor="let musician of musicians"
      [musician]="musician"
      (chosen)="onChosen($event)">
    </app-musician>
  `
})
export class OutputParentComponent {
  completedChoices: string[] = [];
  musicians = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison'];

  onChosen(choice: string) {
    this.completedChoices.push(choice);
  }
}