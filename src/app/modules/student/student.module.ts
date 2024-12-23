import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { SectionsComponent } from './sections/sections.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { Shared2Module } from 'src/app/shared2/shared.module';

@NgModule({
  declarations: [StudentListComponent, SectionsComponent, StudentFormComponent],
  imports: [CommonModule, StudentRoutingModule, Shared2Module],
})
export class StudentModule {}
