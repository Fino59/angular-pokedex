import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainHeaderComponent } from './main-header/main-header.component';
import { SearchComponent } from './search/search.component';
import { CardListComponent } from './card-list/card-list.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    SearchComponent,
    CardListComponent
  ],
  exports: [
    MainHeaderComponent,
    SearchComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
