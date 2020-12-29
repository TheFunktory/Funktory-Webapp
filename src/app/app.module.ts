import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcresPrivacyComponent } from './acres-privacy/acres-privacy.component';
import { HomeComponent } from './home/home.component';
import { DataDeletionComponent } from './data-deletion/data-deletion.component';

@NgModule({
  declarations: [
    AppComponent,
    AcresPrivacyComponent,
    HomeComponent,
    DataDeletionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
