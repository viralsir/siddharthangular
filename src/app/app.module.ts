import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpEntryComponent } from './emp-entry/emp-entry.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmpEntryComponent,
    EmpViewComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
