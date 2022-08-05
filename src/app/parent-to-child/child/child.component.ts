import { Component,Input } from '@angular/core';
import { FamousCounters } from '../../data.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() counter!: FamousCounters;
  @Input('expression') expression = '';

}