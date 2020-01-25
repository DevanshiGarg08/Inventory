import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DisplayComponent } from './display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
