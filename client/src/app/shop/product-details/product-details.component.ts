import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  paramId: any = this.activatedRoute.snapshot.paramMap.get('id');
  initiateHTTPReq: any;
  quantity = 1




  constructor(private shopService: ShopService, private basketService: BasketService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;

    }
  }

  loadProduct() {
    this.shopService.getProduct(this.paramId as number).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name)
    },
      error => { console.log(error) })
  }



}
