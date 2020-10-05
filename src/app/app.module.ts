import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateSpComponent } from './pages/create-sp/create-sp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SpElementComponent } from './elements/sp-element/sp-element.component';
import { WorkSpComponent } from './pages/work-sp/work-sp.component';
import { MainComponent } from './pages/work-sp-pages/main/main.component';
import { CreateInputParamsComponent } from './pages/create-input-params/create-input-params.component';
import { InputParamComponent } from './elements/input-param/input-param.component';
import { CreateOutputParamsComponent } from './pages/create-output-params/create-output-params.component';
import { CreateCursorComponent } from './pages/create-cursor/create-cursor.component';
import { CreateCursorColumnComponent } from './pages/create-cursor-column/create-cursor-column.component';
import { DialogModule } from 'simcusdi';
import { CursorsPageComponent } from './pages/work-sp-pages/cursors-page/cursors-page.component';
import { CursorPageComponent } from './pages/work-sp-pages/cursor-page/cursor-page.component';
import { CursorCellComponent } from './elements/cursor-cell/cursor-cell.component';
import { CreateFromBufferComponent } from './pages/create-from-buffer/create-from-buffer.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { CoordinatTypePipe } from './pipes/coordinat-type.pipe';
import { ParamsTypePipe } from './pipes/params-type.pipe';
import { TokenInterceptor } from './helpers/token.interceptor';

const JWT_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateSpComponent,
    SpElementComponent,
    WorkSpComponent,
    MainComponent,
    CreateInputParamsComponent,
    InputParamComponent,
    CreateOutputParamsComponent,
    CreateCursorComponent,
    CreateCursorColumnComponent,
    CursorsPageComponent,
    CursorPageComponent,
    CursorCellComponent,
    CreateFromBufferComponent,
    LoaderComponent,
    CoordinatTypePipe,
    ParamsTypePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [JWT_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule { }
