import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TopComponent } from './components/top/top.component';
import { FormsModule } from "@angular/forms"; //Se debe importar este módulo para poder usar formularios en Angular.


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
