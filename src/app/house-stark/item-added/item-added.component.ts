import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-added',
  templateUrl: './item-added.component.html',
  styleUrls: ['./item-added.component.css']
})
export class ItemAddedComponent implements OnInit {

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

}
