import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        animate(
          '500ms cubic-bezier(0.33, 1, 0.68, 1)',
          keyframes([
            style({ transform: 'translateY(100%)' }),
            style({ transform: 'translateY(0%)' }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms cubic-bezier(0.33, 1, 0.68, 1)',
          keyframes([
            style({ transform: 'translateY(0%)' }),
            style({ transform: 'translateY(100%)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  filter = 1;
  sortOpen: boolean = false;
  filterOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  quantity: number = 1;
  i = 1;
  plus() {
    if (this.i != 10) {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }
  filterClicked(any: any) {
    this.filter = any;
  }

}
