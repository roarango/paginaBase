import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { ParticipaComponent } from './pages/participa/participa.component';
import { RegistroGraciasComponent } from './pages/registro-gracias/registro-gracias.component';
import { TeaserComponent } from './pages/teaser/teaser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'participa', component: ParticipaComponent },
  { path: 'gracias-registro', component: RegistroGraciasComponent },
  { path: 'gracias-participacion', component: ParticipaComponent },
  { path: 'teaser', component: TeaserComponent },

  //seccionHome
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo:'home' }
  
  //para mostrar el teaser en maqueta comenta seccionHome
  /*{ path: '**', pathMatch: 'full', redirectTo: 'teaser' },
  { path: '', pathMatch: 'full', redirectTo:'teaser' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
