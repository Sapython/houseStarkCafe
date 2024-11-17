import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductComponent } from './product/product.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { HeaderComponent } from './header/header.component';


const components = [StarRatingComponent,ProductComponent, ProductQuantityComponent,HeaderComponent]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
  ],
  exports: [
    components
  ]
})
export class CompsModule { }
