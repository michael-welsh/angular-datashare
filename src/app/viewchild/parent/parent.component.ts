import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ViewChildChildComponent } from '../child/child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './parent.component.html'
})

export class ViewChildParentComponent {

  @ViewChild(ViewChildChildComponent)
  private quoteComponent!: ViewChildChildComponent;

  next() { 
    this.quoteComponent.nextQuote();
  }

  previous() { 
    this.quoteComponent.previousQuote(); 
  }

  passData(){
    this.quoteComponent.passData('-Steve Jobs', 'Stay Hungry Stay Foolish');
  }
}