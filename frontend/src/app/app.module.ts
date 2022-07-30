import { AppMaterialModule } from './shared/app-material/app-material.module';
import { TodosModule } from './todos/todos.module';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosRoutingModule,
    TodosModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
