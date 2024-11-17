import { Component, OnInit } from '@angular/core';
import { AuthencationService } from './services/authencation.service';
import { DataProvider } from './providers/data.provider';

declare var $:any;
declare var jQuery :any;
declare var jquery : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'House Stark Restaurant';
  constructor(public authService:AuthencationService, public dataProvider : DataProvider){
  }
  ngOnInit(): void{
  }
}
