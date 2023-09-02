
import '@angular/compiler';
import { createSelector } from 'reselect';
import { Observable } from 'rxjs';

export type MyState = {vegetables: {items: any[]}};

export const selectVegetable = createSelector( (someState: MyState) => someState.vegetables, s => s.items);

export const bob: Observable<any> = new Observable(x => {});

console.log('>>--------------the state: ', selectVegetable({vegetables: {items: [{carrots: 90}]}}));