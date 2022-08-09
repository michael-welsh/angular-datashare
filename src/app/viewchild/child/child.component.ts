import { Component, OnInit } from '@angular/core';
import { QUOTES, famousQuotes } from '../../data.model';

  @Component({
    selector: 'app-viewchild-child',
    template: '<p>{{currentQuote.quote}} <i>{{currentQuote.name}}</i></p>'
  })
  export class ViewChildChildComponent implements OnInit {
  
    quotes: famousQuotes[] = QUOTES;
    quoteNumber: number = 0;
    currentQuote!: famousQuotes;
  
    ngOnInit(){ this.currentQuote = this.quotes[0]}
  
    nextQuote(){
      this.quoteNumber += 1;
      this.currentQuote = this.quotes[this.getQuoteNumber()];
    }

    previousQuote(){
      this.quoteNumber -= 1;
      this.currentQuote = this.quotes[this.getQuoteNumber()];
    }

    passData(name: string, quote: string){
      this.currentQuote = {name, quote};
    }

    getQuoteNumber(){
      if(this.quoteNumber < 0){ this.quoteNumber = this.quotes.length-1}
      if(this.quoteNumber >= this.quotes.length){this.quoteNumber = 0}
      return this.quoteNumber;
    }
  }