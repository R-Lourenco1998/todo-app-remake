import { TodosService } from './services/todos.service';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HeaderComponent } from './template/header/header.component';
@NgModule({
  declarations: [
    TodoFormComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  exports: [HeaderComponent]
})
export class TodosModule { }
