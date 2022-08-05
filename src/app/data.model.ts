
 export interface FamousCounters {
   name: string;
   count: number;
   item: string;
   destination: string;
 }
 
 export const FAMOUSCOUNTERS = [
   {name: 'Wolgang Amadeus Mozart', count: 88, item: 'keys', destination: 'piano'},
   {name: 'Henry Ford', count: 4, item: 'wheels', destination: 'car'},
   {name: 'Some Poker Player', count: 52, item: 'cards', destination: 'deck'}
 ];

 export interface famousQuotes {
      name: string;
      quote: string;
 }

 export const QUOTES = [
   {name: '-John Lennon',  quote: 'Life is what happens when you\'re busy making other plans.'},
   {name: '-Margaret Mead', quote: 'Always remember that you are absolutely unique. Just like everyone else'},
   {name: '-Babe Ruth', quote: 'Never let the fear of striking out keep you from playing the game.'},
   {name: '-Thomas A. Edison', quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.'},
   {name: '-Mae West', quote: 'You only live once, but if you do it right, once is enough.'},
   {name: '-Helen Keller', quote: 'Life is either a daring adventure or nothing at all.'},
];