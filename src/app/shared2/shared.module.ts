import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert1Component } from './component/alert1/alert1.component';
import { ToopTipDirective } from './directive/toop-tip.directive';



@NgModule({
  declarations: [
    Alert1Component,
    ToopTipDirective,
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Alert1Component
  ]
})
export class Shared2Module { }
