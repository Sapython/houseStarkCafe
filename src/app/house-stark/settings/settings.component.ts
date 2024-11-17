import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { LogoutPopupComponent } from './logout-popup/logout-popup.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
  }
  logOut() {
    this.dialog.open(LogoutPopupComponent)
  }

}
