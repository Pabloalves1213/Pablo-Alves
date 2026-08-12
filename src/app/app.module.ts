import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './custom-layout/navbar/navbar.component';
import { FooterComponent } from './custom-layout/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ContatoComponent } from './features/contato/contato.component';
import { SobreMimComponent } from './features/sobre-mim/sobre-mim.component';
import { HabilidadesComponent } from './features/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    SobreMimComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
