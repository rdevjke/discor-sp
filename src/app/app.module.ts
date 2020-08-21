import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SpComponent } from './pages/sp/sp.component';
import { CreateSpComponent } from './pages/create-sp/create-sp.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SpElementComponent } from './elements/sp-element/sp-element.component';
import { WorkSpComponent } from './pages/work-sp/work-sp.component';
import { MainComponent } from './pages/work-sp-pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpComponent,
    CreateSpComponent,
    SpElementComponent,
    WorkSpComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
