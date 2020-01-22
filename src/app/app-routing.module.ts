import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {HomeComponent} from './home/home.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {
    path: BaseComponent.URL, component: BaseComponent,
    children:[
    {path: EstudianteComponent.URL, component: EstudianteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
