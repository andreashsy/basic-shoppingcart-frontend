import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ItemListingComponent } from './item-listing/item-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
