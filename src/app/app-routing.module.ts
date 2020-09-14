import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateSpComponent } from './pages/create-sp/create-sp.component';
import { WorkSpComponent } from './pages/work-sp/work-sp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'create-sp', component: CreateSpComponent},
  {path: 'sp/:id', component: WorkSpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
