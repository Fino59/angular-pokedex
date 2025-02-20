// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
]
})
export class PagesModule { }
