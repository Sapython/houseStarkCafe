import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  filter=1;

  constructor() { }

  ngOnInit(): void {
  }

  quantity:number=1;
  i=1
  plus(){
    if(this.i !=10){
      this.i++;
      this.quantity=this.i;

    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  filterClicked(any: any) { 
    this.filter=any;
  }
}
