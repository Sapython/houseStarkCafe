import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    CompsModule
  ]
})
export class FavouritesModule { }
