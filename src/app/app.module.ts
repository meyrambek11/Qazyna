import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { AllWordsPageComponent } from './components/all-words-page/all-words-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationWindowComponent } from './components/information-window/information-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddPageComponent,
    AllWordsPageComponent,
    EditPageComponent,
    InformationWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
