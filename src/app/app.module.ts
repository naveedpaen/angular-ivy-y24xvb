import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
 
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
 
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  imports:      [AppRoutingModule, BrowserModule, FormsModule, AppRoutingModule, CommonModule ],
  declarations: [ AppComponent, HelloComponent, SecondComponent, FirstComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
