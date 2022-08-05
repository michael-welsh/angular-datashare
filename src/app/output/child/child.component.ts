import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-musician',
  template: `
    <h4>{{musician}}</h4>
    <button type="button" (click)="chooseInstrument('guitar')"  [disabled]="hasChosen">Guitar</button>
    <button type="button" (click)="chooseInstrument('bass')" [disabled]="hasChosen">Bass</button>
    <button type="button" (click)="chooseInstrument('drums')" [disabled]="hasChosen">Drums</button>
    <button type="button" (click)="chooseInstrument('vocals')" [disabled]="hasChosen">Vocals</button>
  `
})
export class OutputChildComponent {

  @Input() musician = '';
  @Output() chosen: EventEmitter<string> = new EventEmitter<string>();
  hasChosen = false;

  chooseInstrument(instrument: string) {
    let choice = this.musician + ' ' + instrument;
    this.chosen.emit(choice);
    this.hasChosen = true;
  }
}
