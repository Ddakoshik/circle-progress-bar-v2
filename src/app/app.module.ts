import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppComponent } from './app.component';
import { ExemplControllComponent } from './exempl-controll/exempl-controll.component';



@NgModule({
  declarations: [
    AppComponent,
    ExemplControllComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


