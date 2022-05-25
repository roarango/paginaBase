import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { RegistroGraciasComponent } from './pages/registro-gracias/registro-gracias.component';
import { ParticipaComponent } from './pages/participa/participa.component';
import { ParticipaGraciasComponent } from './pages/participa-gracias/participa-gracias.component';
import { TeaserComponent } from './pages/teaser/teaser.component';
import { UploadimageComponent } from './components/uploadimage/uploadimage.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuentaComponent,
    RegistroGraciasComponent,
    ParticipaComponent,
    ParticipaGraciasComponent,
    TeaserComponent,
    UploadimageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
