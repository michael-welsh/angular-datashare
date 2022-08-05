import { Component } from '@angular/core';

import { FAMOUSCOUNTERS } from '../../data.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
 })
 export class ParentComponent {
 
  counters = FAMOUSCOUNTERS;
  expression = 'Yay!';

 }

