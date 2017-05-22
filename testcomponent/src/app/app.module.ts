import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductFilterPipe } from './product-list/product-filter.pipe';
import { StarComponent } from './common/star/star.component';
import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './common/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
