import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { ParticipaComponent } from './pages/participa/participa.component';
import { RegistroGraciasComponent } from './pages/registro-gracias/registro-gracias.component';
import { TeaserComponent } from './pages/teaser/teaser.component';
import { UploadimageComponent } from './components/uploadimage/uploadimage.component';
import { ParticipaGraciasComponent } from './pages/participa-gracias/participa-gracias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'participa', component: ParticipaComponent },
  { path: 'gracias-registro', component: RegistroGraciasComponent },
  { path: 'gracias-participacion', component: ParticipaGraciasComponent },
  { path: 'teaser', component: TeaserComponent },
  { path: 'ftp', component: UploadimageComponent },

  //seccionHome
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo:'home' }
  
  //para mostrar el teaser en maqueta comenta seccionHome
  /*{ path: '**', pathMatch: 'full', redirectTo: 'teaser' },
  { path: '', pathMatch: 'full', redirectTo:'teaser' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
