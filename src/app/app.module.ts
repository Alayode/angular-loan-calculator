
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { WindowReferenceService } from './window-reference.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WindowReferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
