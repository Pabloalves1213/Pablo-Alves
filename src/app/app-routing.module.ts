import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HabilidadesComponent } from './features/habilidades/habilidades.component';
import { ContatoComponent } from './features/contato/contato.component';
import { SobreMimComponent } from './features/sobre-mim/sobre-mim.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-mim', component: SobreMimComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contato', component: ContatoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }