import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private counter$ = new BehaviorSubject<number>(0);


  incrementCounter() {
    const currentValue = this.counter$.getValue();
    this.counter$.next(currentValue + 1);
  }
  minusCounter(){
    const currentValue = this.counter$.getValue();
    this.counter$.next(currentValue - 1);
  }

  getCounterValue(): Observable<number> {
    return this.counter$.asObservable();
  }

}
