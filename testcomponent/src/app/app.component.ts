import {Component} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component'
import { ProductService } from "./product-list/product.service";

@Component ({
  selector : 'pm-app',
  templateUrl : 'app.component.html',
  providers : [ProductService]
})
export class AppComponent {
  pageTitle : string =`Acme Product Management`;
}
