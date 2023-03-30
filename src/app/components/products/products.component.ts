import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

    constructor(public _product: ProductsService) { }

    ngOnInit(): void {
    }

    counterValue$ = this._product.getCounterValue();
  
    incrementCounter() {
      this._product.incrementCounter();
    }

    minusCounter() {
        this._product.minusCounter();
    }
}
