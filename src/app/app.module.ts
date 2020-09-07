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
import { CreateInputParamsComponent } from './pages/create-input-params/create-input-params.component';
import { InputParamComponent } from './elements/input-param/input-param.component';
import { CreateOutputParamsComponent } from './pages/create-output-params/create-output-params.component';
import { CreateCursorComponent } from './pages/create-cursor/create-cursor.component';
import { CursorComponent } from './elements/cursor/cursor.component';
import { CreateCursorColumnComponent } from './pages/create-cursor-column/create-cursor-column.component';
import {DialogModule} from 'simcusdi';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpComponent,
    CreateSpComponent,
    SpElementComponent,
    WorkSpComponent,
    MainComponent,
    CreateInputParamsComponent,
    InputParamComponent,
    CreateOutputParamsComponent,
    CreateCursorComponent,
    CursorComponent,
    CreateCursorColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
