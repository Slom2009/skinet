import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class BuyerRoutingModule { }
