import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CompsModule } from 'src/app/components/comps.module';
import { SortPopupComponent } from './sort-popup/sort-popup.component';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';


@NgModule({
  declarations: [
    MenuComponent,
    SortPopupComponent,
    FilterPopupComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    CompsModule
  ]
})
export class MenuModule { }
