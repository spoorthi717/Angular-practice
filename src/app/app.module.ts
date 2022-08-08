import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HeaderComponent } from './common/header/header.component';



@NgModule({
  declarations: [

 AppComponent,
routingComponents,
// HeaderComponent,

],
  
imports: [
    BrowserModule,
   FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log("App Module loaded")
}
}
