import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDoneComponent } from './logout-done/logout-done.component';

@Component({
  selector: 'app-logout-popup',
  templateUrl: './logout-popup.component.html',
  styleUrls: ['./logout-popup.component.css']
})
export class LogoutPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { } 

  ngOnInit(): void {
  }
  logOut(){
    this.dialog.open(LogoutDoneComponent)
      }

}
