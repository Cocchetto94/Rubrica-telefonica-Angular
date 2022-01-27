import { MaterialModule } from './module/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookComponent } from './features/phonebook/phonebook.component';
import { PopularComponent } from './features/popular/popular.component';
import { ContactComponent } from './features/contact/contact.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    PopularComponent,
    ContactComponent,
    NavbarComponent,
    DialogComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    FlexLayoutModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
